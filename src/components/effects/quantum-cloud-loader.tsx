"use client"

import * as React from "react"
import { cn } from "@/lib/cn"

let quantumLoaderStylesInjected = false

function ensureQuantumLoaderStyles() {
  if (typeof document === "undefined" || quantumLoaderStylesInjected) return
  quantumLoaderStylesInjected = true
  const style = document.createElement("style")
  style.textContent = `
@keyframes qc-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
@keyframes qc-pulse {
  0%, 100% { transform: scale(1); opacity: 0.85; }
  50% { transform: scale(1.3); opacity: 0.5; }
}
@keyframes qc-drift {
  0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.35; }
  50% { transform: translate(var(--qc-dx, 6px), var(--qc-dy, -8px)) scale(1.35); opacity: 0.95; }
}
`
  document.head.appendChild(style)
}

interface OrbitRing {
  count: number
  radius: number
  duration: number
  tiltX: number
  tiltY: number
  reverse: boolean
  dotSize: number
}

const DEFAULT_RINGS: OrbitRing[] = [
  { count: 8, radius: 118, duration: 9, tiltX: 68, tiltY: 0, reverse: false, dotSize: 6 },
  { count: 6, radius: 92, duration: 7, tiltX: 0, tiltY: 62, reverse: true, dotSize: 5 },
  { count: 10, radius: 70, duration: 5.5, tiltX: 55, tiltY: 40, reverse: false, dotSize: 4 },
]

// Deterministic pseudo-random cloud of drifting particles.
const CLOUD_DOTS = Array.from({ length: 16 }, (_, i) => {
  const seed = (n: number) => {
    const s = Math.sin(n * 127.1 + 311.7) * 43758.5453
    return s - Math.floor(s)
  }
  return {
    left: `${5 + seed(i * 3 + 1) * 90}%`,
    top: `${5 + seed(i * 3 + 2) * 90}%`,
    dx: `${(seed(i * 5 + 3) - 0.5) * 26}px`,
    dy: `${(seed(i * 5 + 4) - 0.5) * 26}px`,
    delay: seed(i * 7 + 5) * 2.4,
    duration: 2.6 + seed(i * 11 + 6) * 2.4,
  }
})

const DEFAULT_COLORS = [
  "#60a5fa",
  "#a78bfa",
  "#f472b6",
  "#34d399",
  "#fbbf24",
  "#f87171",
]

export interface QuantumCloudLoaderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** CSS size of the loader in px. */
  size?: number
  /** Dot colors. Pass your own palette to match your brand/theme. */
  colors?: string[]
  /** Speed multiplier for the orbital rings. */
  speed?: number
  /** Accessible label for the loading state. */
  label?: string
  className?: string
}

export function QuantumCloudLoader({
  size = 280,
  colors = DEFAULT_COLORS,
  speed = 1,
  label = "Loading",
  className,
  ...props
}: QuantumCloudLoaderProps) {
  React.useEffect(() => {
    ensureQuantumLoaderStyles()
  }, [])

  const colorFor = (index: number) => colors[index % colors.length]

  return (
    <div
      role="status"
      aria-label={label}
      className={cn("relative", className)}
      style={{ width: size, height: size }}
      {...props}
    >
      {/* drifting particle cloud */}
      {CLOUD_DOTS.map((dot, index) => (
        <span
          key={index}
          className="absolute rounded-full"
          style={
            {
              left: dot.left,
              top: dot.top,
              width: 3,
              height: 3,
              backgroundColor: colorFor(index),
              boxShadow: `0 0 6px ${colorFor(index)}`,
              "--qc-dx": dot.dx,
              "--qc-dy": dot.dy,
              animation: `qc-drift ${dot.duration}s ease-in-out infinite ${dot.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}

      {/* orbital rings */}
      {DEFAULT_RINGS.map((ring, ringIndex) => (
        <div
          key={ringIndex}
          className="absolute inset-0"
          style={{
            transform: `rotateX(${ring.tiltX}deg) rotateY(${ring.tiltY}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              animation: `qc-spin ${ring.duration / speed}s linear infinite`,
              animationDirection: ring.reverse ? "reverse" : "normal",
              transformStyle: "preserve-3d",
            }}
          >
            {Array.from({ length: ring.count }).map((_, dotIndex) => {
              const angle = (360 / ring.count) * dotIndex
              return (
                <span
                  key={dotIndex}
                  className="absolute left-1/2 top-1/2 rounded-full"
                  style={{
                    width: ring.dotSize,
                    height: ring.dotSize,
                    marginLeft: -ring.dotSize / 2,
                    marginTop: -ring.dotSize / 2,
                    backgroundColor: colorFor(dotIndex + ringIndex),
                    boxShadow: `0 0 10px ${colorFor(dotIndex + ringIndex)}`,
                    transform: `rotate(${angle}deg) translateX(${ring.radius}px) rotate(-${angle}deg)`,
                  }}
                />
              )
            })}
          </div>
        </div>
      ))}

      {/* pulsing quantum core */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/50 blur-2xl"
        style={{ width: size * 0.4, height: size * 0.4 }}
      />
      <span
        className="absolute left-1/2 top-1/2 rounded-full bg-foreground/80"
        style={{
          width: 10,
          height: 10,
          marginLeft: -5,
          marginTop: -5,
          boxShadow: "0 0 24px 6px var(--foreground)",
          animation: "qc-pulse 2.4s ease-in-out infinite",
        }}
      />

      <span className="sr-only">{label}</span>
    </div>
  )
}

export default QuantumCloudLoader