"use client"

import * as React from "react"

import { cn } from "@/lib/cn"

export interface GradientInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** CSS background applied to the gradient border. */
  gradient?: string
  /** Whether the gradient border keeps animating even when unfocused. */
  alwaysAnimate?: boolean
}

export function GradientInput({
  className,
  style,
  gradient = "linear-gradient(135deg, #22d3ee, #818cf8, #c084fc, #f472b6, #fbbf24, #22d3ee)",
  alwaysAnimate = false,
  ...props
}: GradientInputProps) {
  return (
    <div
      data-slot="gradient-input"
      className={cn(
        "group relative w-full overflow-hidden rounded-lg p-px transition-transform duration-300 focus-within:scale-[1.02]",
        className,
      )}
      style={style}
    >
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -inset-[100%] opacity-60 transition-opacity duration-500 group-focus-within:opacity-100",
          alwaysAnimate && "opacity-100",
        )}
        style={{ background: gradient, animation: "gradient-spin 6s linear infinite" }}
      />
      <div className="relative rounded-lg bg-background">
        <input
          className="w-full rounded-lg border-none bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none"
          {...props}
        />
      </div>
      <style>{`@keyframes gradient-spin { to { transform: rotate(360deg) } }`}</style>
    </div>
  )
}

export default GradientInput
