"use client"

import * as React from "react"
import {
  motion,
  useMotionTemplate,
  useMotionValue,
} from "motion/react"

import { cn } from "@/lib/cn"
import { buttonVariants } from "@/components/buttons/button"

export interface SpotlightButtonProps
  extends React.ComponentProps<"button"> {
  /** Button style variant. */
  variant?: "default" | "outline" | "secondary" | "ghost" | "destructive"
  /** Color of the spotlight that follows the cursor. */
  spotlightColor?: string
}

export const SpotlightButton = React.forwardRef<
  HTMLButtonElement,
  SpotlightButtonProps
>(
  (
    {
      className,
      variant = "default",
      spotlightColor = "rgba(255, 255, 255, 0.35)",
      children,
      type = "button",
      ...props
    },
    ref,
  ) => {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const handleMouseMove = (event: React.MouseEvent<HTMLButtonElement>) => {
      const rect = event.currentTarget.getBoundingClientRect()
      mouseX.set(event.clientX - rect.left)
      mouseY.set(event.clientY - rect.top)
    }

    const spotlight = useMotionTemplate`radial-gradient(160px circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 65%)`

    return (
      <button
        ref={ref}
        type={type}
        data-slot="spotlight-button"
        onMouseMove={handleMouseMove}
        className={cn(
          buttonVariants({ variant }),
          "group relative overflow-hidden",
          className,
        )}
        {...props}
      >
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: spotlight }}
        />
        <span className="relative inline-flex items-center gap-1.5">
          {children}
        </span>
      </button>
    )
  },
)

SpotlightButton.displayName = "SpotlightButton"

export default SpotlightButton