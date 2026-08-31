"use client"

import * as React from "react"
import { cn } from "@/lib/cn"

const SIRI_VERTEX_SHADER = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`

const SIRI_FRAGMENT_SHADER = `
precision highp float;
uniform vec2 u_resolution;
uniform float u_time;
uniform vec3 u_color;
uniform int u_variant;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

// Vertical "sliver" intensity at screen coordinate sx (0..1).
float waveSliver(float sx, float sy, float t, float xOffset) {
  float N = 52.0;
  float cell = (floor((sx + xOffset) * N) + 0.5) / N - xOffset;
  float phase = cell * 9.0;
  float level = 0.0;
  level += sin(phase + t * 1.0) * 0.5;
  level += sin(phase * 2.3 - t * 1.2) * 0.28;
  level += sin(phase * 4.1 + t * 0.7) * 0.16;
  level += noise(vec2(phase * 0.6, t * 0.4)) * 0.4;
  float halfH = 0.04 + abs(level) * 0.34;
  float dx = abs(sx - cell);
  float xmask = 1.0 - smoothstep(0.003, 0.011, dx);
  float ymask = 1.0 - smoothstep(halfH, halfH + 0.015, abs(sy - 0.5));
  return xmask * ymask;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  float sx = gl_FragCoord.x / u_resolution.x;
  float sy = gl_FragCoord.y / u_resolution.y;
  float t = u_time;

  if (u_variant == 0) {
    // Siri-style waveform with chromatic aberration (per-channel offset).
    float r = waveSliver(sx, sy, t, 0.0015);
    float g = waveSliver(sx, sy, t, 0.0);
    float b = waveSliver(sx, sy, t, -0.0015);
    vec3 col = u_color * vec3(r, g, b);
    // soft vertical fade toward the top/bottom of the canvas
    float fade = 1.0 - smoothstep(0.05, 0.55, abs(sy - 0.5));
    col *= fade * 1.4;
    float alpha = clamp(max(max(r, g), b) * fade, 0.0, 1.0);
    gl_FragColor = vec4(col, alpha);
    return;
  }

  // Orb variant: metaball blob of orbiting dots.
  vec2 p = uv - 0.5;
  p.x *= u_resolution.x / u_resolution.y;
  float m = 0.0;
  for (float i = 0.0; i < 6.0; i++) {
    float ang = i / 6.0 * 6.28318 + t * (0.5 * (mod(i, 2.0) * 2.0 - 1.0));
    float rad = 0.16 + 0.045 * sin(i * 2.7 + t * 1.2);
    vec2 c = vec2(cos(ang), sin(ang)) * rad;
    float d = length(p - c);
    m += 0.11 / (d * d + 0.015);
  }
  m += 0.35 / (length(p) + 0.08);
  float body = smoothstep(0.9, 1.5, m);
  float halo = exp(-m * 0.9) * 0.35;
  float alpha = clamp(body + halo, 0.0, 1.0);
  vec3 col = u_color * clamp(body * 1.6 + halo * 0.9, 0.0, 1.0);
  gl_FragColor = vec4(col, alpha);
}
`

export interface SiriWaveProps extends React.HTMLAttributes<HTMLDivElement> {
  /** `wave` = Siri-style voice waveform, `orb` = fluid-dots metaball orb. */
  variant?: "wave" | "orb"
  /** CSS size of the canvas, in px. */
  size?: number
  /** Stroke color. Accepts any CSS color; defaults to the current foreground token. */
  color?: string
  className?: string
}

export function SiriWave({
  variant = "wave",
  size = 360,
  color,
  className,
  ...props
}: SiriWaveProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const propsRef = React.useRef({ variant, color })
  propsRef.current = { variant, color }

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext("webgl", {
      antialias: false,
      depth: false,
      stencil: false,
      premultipliedAlpha: false,
    })
    if (!gl) return

    const compile = (type: number, source: string): WebGLShader | null => {
      const shader = gl.createShader(type)
      if (!shader) return null
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader)
        return null
      }
      return shader
    }

    const vertex = compile(gl.VERTEX_SHADER, SIRI_VERTEX_SHADER)
    const fragment = compile(gl.FRAGMENT_SHADER, SIRI_FRAGMENT_SHADER)
    if (!vertex || !fragment) return

    const program = gl.createProgram()
    if (!program) return
    gl.attachShader(program, vertex)
    gl.attachShader(program, fragment)
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return
    gl.useProgram(program)

    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    )

    const positionLoc = gl.getAttribLocation(program, "a_position")
    gl.enableVertexAttribArray(positionLoc)
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0)

    const resolutionLoc = gl.getUniformLocation(program, "u_resolution")
    const timeLoc = gl.getUniformLocation(program, "u_time")
    const colorLoc = gl.getUniformLocation(program, "u_color")
    const variantLoc = gl.getUniformLocation(program, "u_variant")

    gl.enable(gl.BLEND)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)
    gl.clearColor(0, 0, 0, 0)

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = Math.max(1, Math.floor(size * dpr))
    canvas.height = Math.max(1, Math.floor(size * dpr))
    gl.viewport(0, 0, canvas.width, canvas.height)

    let frame = 0
    const start = performance.now()
    const render = () => {
      const p = propsRef.current
      const elapsed = (performance.now() - start) / 1000

      // Resolve theme color from the computed CSS `color` of the canvas so
      // the wave follows the current light/dark foreground token.
      const resolved = (() => {
        const css = getComputedStyle(canvas).color
        const m = css.match(/[\d.]+/g)
        if (m && m.length >= 3) {
          return [Number(m[0]) / 255, Number(m[1]) / 255, Number(m[2]) / 255]
        }
        return [1, 1, 1]
      })()

      gl.uniform2f(resolutionLoc, canvas.width, canvas.height)
      gl.uniform1f(timeLoc, elapsed)
      gl.uniform1i(variantLoc, p.variant === "wave" ? 0 : 1)
      gl.uniform3fv(colorLoc, resolved)

      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.drawArrays(gl.TRIANGLES, 0, 6)
      frame = requestAnimationFrame(render)
    }
    frame = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(frame)
      gl.deleteProgram(program)
      gl.deleteShader(vertex)
      gl.deleteShader(fragment)
      gl.deleteBuffer(buffer)
    }
  }, [size])

  return (
    <div
      className={cn("relative inline-flex shrink-0", className)}
      style={{ width: size, height: size }}
      {...props}
    >
      <canvas
        ref={canvasRef}
        className="h-full w-full text-foreground"
        style={{ color }}
        aria-hidden="true"
      />
    </div>
  )
}

export default SiriWave