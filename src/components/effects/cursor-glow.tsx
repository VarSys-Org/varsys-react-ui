import * as React from "react"

import { cn } from "@/lib/cn"

export interface CursorGlowProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Color of the glow. Defaults to the theme primary color. */
  color?: string
  /** Diameter of the glow in pixels. */
  size?: number
  /** Percentage of the gradient that is fully transparent. */
  fade?: number
}

export const CursorGlow = React.forwardRef<HTMLDivElement, CursorGlowProps>(
  (
    { className, color = "var(--primary)", size = 240, fade = 60, children, ...props },
    ref,
  ) => {
    const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
      const el = event.currentTarget
      const rect = el.getBoundingClientRect()
      el.style.setProperty("--cg-x", `${event.clientX - rect.left}px`)
      el.style.setProperty("--cg-y", `${event.clientY - rect.top}px`)
    }

    return (
      <div
        ref={ref}
        onPointerMove={handlePointerMove}
        className={cn("group/cursor-glow relative overflow-hidden", className)}
        {...props}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/cursor-glow:opacity-100"
          style={{
            background: `radial-gradient(${size}px circle at var(--cg-x, 50%) var(--cg-y, 50%), ${color}, transparent ${fade}%)`,
          }}
        />
        {children}
      </div>
    )
  },
)

CursorGlow.displayName = "CursorGlow"

export default CursorGlow