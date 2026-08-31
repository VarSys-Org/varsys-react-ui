"use client"

import * as React from "react"
import { cn } from "@/lib/cn"

let handwritingStylesInjected = false

function ensureHandwritingStyles() {
  if (typeof document === "undefined" || handwritingStylesInjected) return
  handwritingStylesInjected = true
  const style = document.createElement("style")
  style.textContent = `
@keyframes hw-draw {
  to { stroke-dashoffset: 0; }
}
@media (prefers-reduced-motion: reduce) {
  [data-hw-draw] {
    animation: none !important;
    stroke-dashoffset: 0 !important;
  }
}
`
  document.head.appendChild(style)
}

export type HandwritingEase = "linear" | "easeIn" | "easeOut" | "easeInOut"

export interface HandwritingSvgProps {
  /** Custom SVG path data (`d` attribute). Use instead of `text` for freeform drawings. */
  path?: string
  /** Text to render as animated handwriting strokes, letter by letter. */
  text?: string
  /** Classes applied to the `<svg>` element (e.g. `text-primary` sets the stroke color). */
  className?: string
  /** Classes applied to the animated stroke elements. */
  strokeClassName?: string
  /** Duration of the full draw animation in seconds. */
  duration?: number
  /** Delay before drawing starts, in seconds. */
  delay?: number
  /** Stroke width of the pen. */
  strokeWidth?: number
  /** SVG width in pixels. */
  width?: number
  /** SVG height in pixels. */
  height?: number
  /** Font size (in px) used for `text` mode. */
  fontSize?: number
  /** CSS easing curve of the draw. */
  ease?: HandwritingEase
}

const EASE_MAP: Record<HandwritingEase, string> = {
  linear: "linear",
  easeIn: "cubic-bezier(0.55, 0, 1, 0.45)",
  easeOut: "cubic-bezier(0, 0.55, 0.45, 1)",
  easeInOut: "cubic-bezier(0.42, 0, 0.58, 1)",
}

const HANDWRITING_FONT =
  '"Caveat", "Indie Flower", "Segoe Script", "Comic Sans MS", cursive'

export function HandwritingSvg({
  path,
  text,
  className,
  strokeClassName,
  duration = 2,
  delay = 0.5,
  strokeWidth = 2,
  width = 320,
  height = 160,
  fontSize = 72,
  ease = "easeInOut",
}: HandwritingSvgProps) {
  React.useEffect(() => {
    ensureHandwritingStyles()
  }, [])

  const easeCss = EASE_MAP[ease]

  if (path) {
    return (
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className={cn("text-foreground", className)}
        aria-hidden="true"
      >
        <title>Handwriting drawing</title>
        <path
          d={path}
          pathLength={1}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={strokeClassName}
          data-hw-draw
          style={{
            strokeDasharray: 1,
            strokeDashoffset: 1,
            animation: `hw-draw ${duration}s ${easeCss} ${delay}s forwards`,
          }}
        />
      </svg>
    )
  }

  if (!text) {
    return null
  }

  const letters = Array.from(text)
  const step = duration / Math.max(1, letters.length)

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={cn("text-foreground", className)}
      aria-hidden="true"
    >
      <title>Handwriting text</title>
      {letters.map((letter, index) => (
        <text
          key={index}
          x={fontSize * 0.22 + index * fontSize * 0.66}
          y={fontSize * 0.95}
          fontFamily={HANDWRITING_FONT}
          fontSize={fontSize}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={strokeClassName}
          data-hw-draw
          style={{
            strokeDasharray: 2000,
            strokeDashoffset: 2000,
            animation: `hw-draw ${step}s ${easeCss} ${delay + index * step}s forwards`,
          }}
        >
          {letter}
        </text>
      ))}
    </svg>
  )
}

export default HandwritingSvg