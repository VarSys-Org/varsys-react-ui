"use client"

import * as React from "react"
import { cn } from "@/lib/cn"

const RIPPLE_VERTEX_SHADER = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`

const RIPPLE_FRAGMENT_SHADER = `
precision highp float;
uniform vec2 u_resolution;
uniform float u_time;
uniform float u_aspect;
uniform float u_blueish;
uniform float u_scale;
uniform float u_illumination;
uniform float u_surfaceDistortion;
uniform float u_waterDistortion;
uniform vec2 u_pointer;
uniform sampler2D u_image;

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

float heightAt(vec2 q, float t) {
  float h = 0.0;
  h += sin(q.x * 7.0 + t * 1.5) * 0.5;
  h += sin(q.y * 6.0 - t * 1.1) * 0.5;
  h += sin(dot(q, vec2(2.3, -1.7)) * 8.0 + t * 0.9) * 0.35;
  h += noise(q * 2.0 + t * 0.3) * 0.8;
  float mouse = 0.0;
  if (u_pointer.x >= 0.0) {
    vec2 mp = u_pointer - 0.5;
    mp.x *= u_aspect;
    float d = length(q - mp);
    mouse = sin(d * 26.0 - t * 5.0) * exp(-d * 9.0);
  }
  return h * u_waterDistortion + mouse * u_surfaceDistortion;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  vec2 p = uv - 0.5;
  p.x *= u_aspect;
  float t = u_time;

  float e = 0.01;
  float hL = heightAt(p - vec2(e, 0.0), t);
  float hR = heightAt(p + vec2(e, 0.0), t);
  float hB = heightAt(p - vec2(0.0, e), t);
  float hT = heightAt(p + vec2(0.0, e), t);
  vec2 grad = vec2(hR - hL, hT - hB) / (2.0 * e);

  vec2 cuv = uv - grad * 0.045;
  vec2 suv = (cuv - 0.5) * u_scale + 0.5;
  vec3 col = texture2D(u_image, suv).rgb;

  // blue-ish underwater tint
  float lum = dot(col, vec3(0.299, 0.587, 0.114));
  vec3 blue = vec3(lum * 0.55, lum * 0.75, lum * 1.0 + 0.15);
  col = mix(col, blue, u_blueish);

  // specular-style illumination on ripple crests
  float slope = length(grad);
  col += u_illumination * slope * vec3(1.0, 1.0, 1.0);

  // subtle moving glints
  col += 0.02 * sin(suv.y * 320.0 + t * 2.0) * (0.4 + slope * 6.0);

  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`

export interface WaterRippleImageProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Image URL to display. Use a CORS-enabled or same-origin source. */
  src: string
  /** How much the water takes on a blue tint (0..1). */
  blueish?: number
  /** Zoom factor of the displayed image. */
  scale?: number
  /** Brightness of ripple crests. */
  illumination?: number
  /** Strength of the ripple driven by the pointer position. */
  surfaceDistortion?: number
  /** Strength of the ambient, time-based water distortion. */
  waterDistortion?: number
  /** Children rendered on top of the water surface. */
  children?: React.ReactNode
  className?: string
}

export function WaterRippleImage({
  src,
  blueish = 0.35,
  scale = 1,
  illumination = 0.18,
  surfaceDistortion = 0.04,
  waterDistortion = 0.02,
  children,
  className,
  ...props
}: WaterRippleImageProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const propsRef = React.useRef({
    blueish,
    scale,
    illumination,
    surfaceDistortion,
    waterDistortion,
  })
  propsRef.current = { blueish, scale, illumination, surfaceDistortion, waterDistortion }
  const pointerRef = React.useRef<{ x: number; y: number } | null>(null)

  React.useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

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

    const vertex = compile(gl.VERTEX_SHADER, RIPPLE_VERTEX_SHADER)
    const fragment = compile(gl.FRAGMENT_SHADER, RIPPLE_FRAGMENT_SHADER)
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
    const aspectLoc = gl.getUniformLocation(program, "u_aspect")
    const blueishLoc = gl.getUniformLocation(program, "u_blueish")
    const scaleLoc = gl.getUniformLocation(program, "u_scale")
    const illumLoc = gl.getUniformLocation(program, "u_illumination")
    const surfaceLoc = gl.getUniformLocation(program, "u_surfaceDistortion")
    const waterLoc = gl.getUniformLocation(program, "u_waterDistortion")
    const pointerLoc = gl.getUniformLocation(program, "u_pointer")
    const imageLoc = gl.getUniformLocation(program, "u_image")

    gl.clearColor(0, 0, 0, 0)

    const texture = gl.createTexture()
    gl.activeTexture(gl.TEXTURE0)
    gl.bindTexture(gl.TEXTURE_2D, texture)
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      1,
      1,
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      new Uint8Array([0, 0, 0, 255]),
    )
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
    gl.uniform1i(imageLoc, 0)

    let imageLoaded = false
    const image = new Image()
    if (/^https?:/i.test(src)) image.crossOrigin = "anonymous"
    image.onload = () => {
      gl.bindTexture(gl.TEXTURE_2D, texture)
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1)
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image)
      imageLoaded = true
    }
    image.src = src

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const width = container.clientWidth
      const height = container.clientHeight
      canvas.width = Math.max(1, Math.floor(width * dpr))
      canvas.height = Math.max(1, Math.floor(height * dpr))
      gl.viewport(0, 0, canvas.width, canvas.height)
    }
    resize()

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(container)

    const onPointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect()
      pointerRef.current = {
        x: (event.clientX - rect.left) / rect.width,
        y: 1 - (event.clientY - rect.top) / rect.height,
      }
    }
    const onPointerLeave = () => {
      pointerRef.current = null
    }
    container.addEventListener("pointermove", onPointerMove)
    container.addEventListener("pointerleave", onPointerLeave)

    let frame = 0
    const start = performance.now()
    const render = () => {
      const p = propsRef.current
      const elapsed = (performance.now() - start) / 1000

      gl.uniform2f(resolutionLoc, canvas.width, canvas.height)
      gl.uniform1f(timeLoc, elapsed)
      gl.uniform1f(aspectLoc, canvas.width / Math.max(1, canvas.height))
      gl.uniform1f(blueishLoc, p.blueish)
      gl.uniform1f(scaleLoc, p.scale)
      gl.uniform1f(illumLoc, p.illumination)
      gl.uniform1f(surfaceLoc, p.surfaceDistortion)
      gl.uniform1f(waterLoc, p.waterDistortion)
      gl.uniform2f(pointerLoc, pointerRef.current?.x ?? -1, pointerRef.current?.y ?? -1)

      gl.clear(gl.COLOR_BUFFER_BIT)
      if (imageLoaded) {
        gl.drawArrays(gl.TRIANGLES, 0, 6)
      }
      frame = requestAnimationFrame(render)
    }
    frame = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      container.removeEventListener("pointermove", onPointerMove)
      container.removeEventListener("pointerleave", onPointerLeave)
      gl.deleteProgram(program)
      gl.deleteShader(vertex)
      gl.deleteShader(fragment)
      gl.deleteBuffer(buffer)
      gl.deleteTexture(texture)
    }
  }, [src])

  return (
    <div
      ref={containerRef}
      className={cn("relative h-full w-full overflow-hidden", className)}
      {...props}
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
      {children ? <div className="relative z-10">{children}</div> : null}
    </div>
  )
}

export default WaterRippleImage