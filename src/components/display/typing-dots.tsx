"use client"

import * as React from "react"
import { cn } from "@/lib/cn"

let typingKeyframesInjected = false

function ensureTypingKeyframes() {
  if (typeof document === "undefined" || typingKeyframesInjected) return
  typingKeyframesInjected = true
  const style = document.createElement("style")
  style.textContent = `
@keyframes typing-dot { 0% { opacity: 1; scale: 1; } 50% { opacity: 0.75; scale: 0.75; } 100% { opacity: 1; scale: 1; } }
`
  document.head.appendChild(style)
}

export interface TypingDotsProps extends React.HTMLAttributes<HTMLDivElement> {
  dotCount?: number
  duration?: number
  className?: string
  label?: string
}

export function TypingDots({
  dotCount = 3,
  duration = 1,
  className,
  label = "Someone is typing",
  ...props
}: TypingDotsProps) {
  React.useEffect(() => {
    ensureTypingKeyframes()
  }, [])

  return (
    <div
      {...props}
      role="status"
      aria-label={label}
      className={cn("inline-flex h-8 items-center", className)}
    >
      <span className="inline-flex gap-x-1" aria-hidden="true">
        {Array.from({ length: dotCount }).map((_, i) => (
          <span
            key={i}
            className="size-1.5 rounded-full bg-muted-foreground"
            style={{ animation: `typing-dot ${duration}s ease-in-out infinite ${i * 0.2}s` }}
          />
        ))}
      </span>
      <span className="sr-only">{label}</span>
    </div>
  )
}

export default TypingDots
