import type { HTMLAttributes } from "react"
import { forwardRef } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/cn"

const statusDotVariants = cva("relative inline-flex shrink-0 rounded-full", {
  variants: {
    variant: {
      default: "bg-primary",
      success: "bg-emerald-500",
      warning: "bg-amber-500",
      danger: "bg-red-500",
      info: "bg-sky-500",
      neutral: "bg-muted-foreground",
    },
    size: {
      sm: "size-2",
      md: "size-2.5",
      lg: "size-3",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
})

export interface StatusDotProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof statusDotVariants> {
  /** Render an animated pulsing ring around the dot. */
  pulse?: boolean
  /** Accessible label describing the status. */
  label?: string
}

export const StatusDot = forwardRef<HTMLSpanElement, StatusDotProps>(
  ({ className, variant, size, pulse = false, label, ...props }, ref) => {
    return (
      <span
        ref={ref}
        role={label ? "status" : undefined}
        aria-label={label}
        className={cn("relative inline-flex", className)}
        {...props}
      >
        {pulse && (
          <span
            className={cn(
              "absolute inline-flex h-full w-full animate-ping rounded-full opacity-60",
              statusDotVariants({ variant, size }),
            )}
          />
        )}
        <span className={cn(statusDotVariants({ variant, size }))} />
      </span>
    )
  },
)

StatusDot.displayName = "StatusDot"

export default StatusDot
