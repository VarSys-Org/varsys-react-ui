"use client"

import * as React from "react"
import { cn } from "@/lib/cn"

export interface DotsLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Animation style of the dots. */
  variant?: "pulse" | "ping" | "bounce"
  /** Number of dots to render. */
  dots?: number
  /** Color of the dots. */
  color?: "primary" | "muted" | "foreground"
  /** Optional label rendered below (or beside) the dots. */
  label?: string
  /** Show label to the right of the dots instead of below. */
  inline?: boolean
}

const colorMap = {
  primary: "bg-primary",
  muted: "bg-muted-foreground/40",
  foreground: "bg-foreground/70",
} as const

const animationMap = {
  pulse: "animate-pulse",
  ping: "animate-ping",
  bounce: "animate-bounce",
} as const

export function DotsLoader({
  variant = "pulse",
  dots = 3,
  color = "primary",
  label,
  inline = false,
  className,
  ...props
}: DotsLoaderProps) {
  const animation = animationMap[variant]

  return (
    <div
      role="status"
      aria-label={label ?? "Loading"}
      className={cn(
        "flex items-center gap-2",
        inline ? "flex-row" : "flex-col",
        className
      )}
      {...props}
    >
      <div className="flex gap-1.5">
        {Array.from({ length: dots }).map((_, i) => (
          <span
            key={i}
            aria-hidden="true"
            className={cn("size-3 rounded-full", colorMap[color], animation)}
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
      {label != null && (
        <span
          className={cn(
            "text-sm font-medium text-muted-foreground",
            inline && "text-start"
          )}
        >
          {label}
        </span>
      )}
    </div>
  )
}
