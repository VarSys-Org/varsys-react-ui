"use client"

import * as React from "react"
import {
  motion,
  useMotionTemplate,
  useMotionValue,
} from "motion/react"

import { cn } from "@/lib/cn"

export interface SpotlightCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Color of the spotlight shown under the cursor on hover. */
  spotlightColor?: string
  /** Diameter of the spotlight in pixels. */
  size?: number
}

export const SpotlightCard = React.forwardRef<
  HTMLDivElement,
  SpotlightCardProps
>(
  (
    {
      className,
      spotlightColor = "rgba(255, 255, 255, 0.25)",
      size = 500,
      children,
      ...props
    },
    ref,
  ) => {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
      const rect = event.currentTarget.getBoundingClientRect()
      mouseX.set(event.clientX - rect.left)
      mouseY.set(event.clientY - rect.top)
    }

    const spotlight = useMotionTemplate`radial-gradient(${size}px circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 80%)`

    return (
      <div
        ref={ref}
        data-slot="spotlight-card"
        onMouseMove={handleMouseMove}
        className={cn(
          "group relative overflow-hidden rounded-2xl border border-border bg-card text-card-foreground",
          className,
        )}
        {...props}
      >
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: spotlight }}
        />
        <div className="relative">{children}</div>
      </div>
    )
  },
)

SpotlightCard.displayName = "SpotlightCard"

export default SpotlightCard