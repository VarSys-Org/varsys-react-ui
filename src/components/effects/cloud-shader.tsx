"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const CLOUD_VERTEX_SHADER = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`

const CLOUD_FRAGMENT_SHADER = `
precision highp float;
uniform vec2 u_resolution;
uniform float u_time;
uniform float u_speed;
uniform int u_count;
uniform vec3 u_cloud_color;
uniform vec3 u_sky_top;
uniform vec3 u_sky_bottom;

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

float fbm(vec2 p) {
  float v = 0.0;
  float amp = 0.5;
  for (int i = 0; i < 5; i++) {
    v += amp * noise(p);
    p *= 2.02;
    amp *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  uv.x *= u_resolution.x / u_resolution.y;

  vec3 sky = mix(u_sky_bottom, u_sky_top, uv.y);

  float clouds = 0.0;
  float time = u_time * u_speed;
  for (int i = 0; i < 6; i++) {
    if (i >= u_count) break;
    float layer = float(i);
    vec2 p = uv * 2.0 + vec2(layer * 3.7, 0.0);
    p.x += time * (0.02 + layer * 0.008);
    float n = fbm(p * (1.0 + layer * 0.12));
    clouds += smoothstep(0.42, 0.72, n) * (1.0 - layer * 0.12);
  }
  clouds = clamp(clouds, 0.0, 1.0);

  vec3 color = mix(sky, u_cloud_color, clouds);
  gl_FragColor = vec4(color, 1.0);
}
`

export interface CloudShaderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  speed?: number
  count?: number
  cloudColor?: string
  skyTopColor?: string
  skyBottomColor?: string
  className?: string
}

function hexToRgb(hex: string): [number, number, number] {
  const value = hex.replace("#", "")
  const full =
    value.length === 3
      ? value
          .split("")
          .map((c) => c + c)
          .join("")
      : value
  const int = parseInt(full, 16)
  return [(int >> 16) & 255, (int >> 8) & 255, int & 255]
}

export function CloudShader({
  children,
  speed = 1,
  count = 6,
  cloudColor = "#fbf8f2",
  skyTopColor = "#3876ba",
  skyBottomColor = "#8cbfe8",
  className,
  ...props
}: CloudShaderProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const propsRef = React.useRef({ speed, count, cloudColor, skyTopColor, skyBottomColor })
  propsRef.current = { speed, count, cloudColor, skyTopColor, skyBottomColor }

  React.useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const gl = canvas.getContext("webgl", {
      antialias: false,
      depth: false,
      stencil: false,
    })
    if (!gl) return

    const compile = (
      type: number,
      source: string,
    ): WebGLShader | null => {
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

    const vertex = compile(gl.VERTEX_SHADER, CLOUD_VERTEX_SHADER)
    const fragment = compile(gl.FRAGMENT_SHADER, CLOUD_FRAGMENT_SHADER)
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
      new Float32Array([
        -1, -1, 1, -1, -1, 1,
        -1, 1, 1, -1, 1, 1,
      ]),
      gl.STATIC_DRAW,
    )

    const positionLoc = gl.getAttribLocation(program, "a_position")
    gl.enableVertexAttribArray(positionLoc)
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0)

    const resolutionLoc = gl.getUniformLocation(program, "u_resolution")
    const timeLoc = gl.getUniformLocation(program, "u_time")
    const speedLoc = gl.getUniformLocation(program, "u_speed")
    const countLoc = gl.getUniformLocation(program, "u_count")
    const cloudColorLoc = gl.getUniformLocation(program, "u_cloud_color")
    const skyTopLoc = gl.getUniformLocation(program, "u_sky_top")
    const skyBottomLoc = gl.getUniformLocation(program, "u_sky_bottom")

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      const width = container.clientWidth
      const height = container.clientHeight
      canvas.width = Math.max(1, Math.floor(width * dpr))
      canvas.height = Math.max(1, Math.floor(height * dpr))
      gl.viewport(0, 0, canvas.width, canvas.height)
    }
    resize()

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(container)

    let frame = 0
    const start = performance.now()
    const render = () => {
      const p = propsRef.current
      const elapsed = (performance.now() - start) / 1000
      gl.uniform2f(resolutionLoc, canvas.width, canvas.height)
      gl.uniform1f(timeLoc, elapsed)
      gl.uniform1f(speedLoc, p.speed)
      gl.uniform1i(countLoc, Math.max(1, Math.min(6, p.count)))
      gl.uniform3fv(cloudColorLoc, hexToRgb(p.cloudColor).map((v) => v / 255))
      gl.uniform3fv(skyTopLoc, hexToRgb(p.skyTopColor).map((v) => v / 255))
      gl.uniform3fv(skyBottomLoc, hexToRgb(p.skyBottomColor).map((v) => v / 255))
      gl.drawArrays(gl.TRIANGLES, 0, 6)
      frame = requestAnimationFrame(render)
    }
    frame = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      gl.deleteProgram(program)
      gl.deleteShader(vertex)
      gl.deleteShader(fragment)
      gl.deleteBuffer(buffer)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn("relative h-full w-full overflow-hidden", className)}
      {...props}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      />
      {children ? <div className="relative z-10">{children}</div> : null}
    </div>
  )
}

export default CloudShader
