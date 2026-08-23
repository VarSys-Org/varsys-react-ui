"use client"

import * as React from "react"

import { cn } from "@/lib/cn"

export type GlowButtonMode =
  | "rotate"
  | "pulse"
  | "breathe"
  | "color-shift"
  | "flow"
  | "static"

export type GlowButtonBlur = "none" | "soft" | "strong"

export interface GlowButtonProps
  extends Omit<React.ComponentProps<"button">, "className"> {
  /** Classes applied to the inner button element. */
  className?: string
  /** Animation mode for the glow layer. */
  mode?: GlowButtonMode
  /** Colors used by the conic-gradient glow. */
  colors?: string[]
  /** Blur strength applied to the glow layer. */
  blur?: GlowButtonBlur
  /** Duration of one animation loop in seconds. */
  duration?: number
  /** Multiplier for the glow layer size. */
  glowScale?: number
  /** Extra classes applied to the outer wrapper. */
  wrapperClassName?: string
}

const GLOW_BLUR: Record<GlowButtonBlur, string> = {
  none: "blur-none",
  soft: "blur-2xl",
  strong: "blur-3xl",
}

const GLOW_KEYFRAMES = `
@keyframes vs-glow-rotate { to { --vs-glow-angle: 360deg } }
@keyframes vs-glow-pulse {
  0%, 100% { transform: scale(var(--vs-glow-scale, 1)); opacity: 0.85 }
  50% { transform: scale(calc(var(--vs-glow-scale, 1) * 1.12)); opacity: 1 }
}
@keyframes vs-glow-breathe {
  0%, 100% { opacity: 0.55 }
  50% { opacity: 1 }
}
@keyframes vs-glow-color-shift {
  0%, 100% { filter: hue-rotate(0deg) }
  50% { filter: hue-rotate(120deg) }
}
@keyframes vs-glow-flow {
  0%, 100% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
}
`

const MODE_ANIMATION: Record<GlowButtonMode, string> = {
  rotate: "vs-glow-rotate",
  pulse: "vs-glow-pulse",
  breathe: "vs-glow-breathe",
  "color-shift": "vs-glow-color-shift",
  flow: "vs-glow-flow",
  static: "",
}

export function GlowButton({
  className,
  wrapperClassName,
  mode = "rotate",
  colors = ["#FF5733", "#33FF57", "#3357FF", "#F1C40F"],
  blur = "strong",
  duration = 5,
  glowScale = 1,
  children,
  ...props
}: GlowButtonProps) {
  const animation = MODE_ANIMATION[mode]
  const blurClass = GLOW_BLUR[blur]

  return (
    <span
      className={cn(
        "group/glow relative inline-flex align-middle",
        wrapperClassName,
      )}
    >
      <style>{GLOW_KEYFRAMES}</style>
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -inset-1.5 z-0 rounded-full opacity-0 transition-opacity duration-300 group-hover/glow:opacity-100",
          blurClass,
        )}
        style={
          {
            "--vs-glow-scale": glowScale,
            "--vs-glow-duration": `${duration}s`,
            background: `conic-gradient(from var(--vs-glow-angle, 0deg), ${colors.join(", ")})`,
            backgroundSize: "200% 200%",
            animation: animation
              ? `var(--vs-glow-animation, ${animation}) var(--vs-glow-duration) linear infinite`
              : undefined,
          } as React.CSSProperties
        }
      />
      <button
        type="button"
        data-slot="glow-button"
        className={cn(
          "relative z-10 inline-flex items-center justify-center gap-2 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    </span>
  )
}

export default GlowButton