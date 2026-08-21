import type { HTMLAttributes } from "react"
import { forwardRef } from "react"
import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/cn"

const statTrendVariants = cva(
  "inline-flex items-center gap-1 text-xs font-medium",
  {
    variants: {
      trend: {
        up: "text-emerald-600 dark:text-emerald-500",
        down: "text-red-600 dark:text-red-500",
        flat: "text-muted-foreground",
      },
    },
    defaultVariants: {
      trend: "flat",
    },
  },
)

export interface StatTrendProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof statTrendVariants> {
  /** Direction of the trend. */
  trend?: "up" | "down" | "flat"
  /** Whether the value is a percentage relative to a baseline. */
  percentage?: boolean
}

export const StatTrend = forwardRef<HTMLSpanElement, StatTrendProps>(
  ({ className, trend = "flat", percentage = true, children, ...props }, ref) => {
    const Icon =
      trend === "up" ? ArrowUpRight : trend === "down" ? ArrowDownRight : ArrowRight

    return (
      <span
        ref={ref}
        className={cn(statTrendVariants({ trend }), className)}
        {...props}
      >
        <Icon className="size-3.5" aria-hidden="true" />
        <span>
          {children}
          {percentage && trend !== "flat" ? "%" : null}
        </span>
      </span>
    )
  },
)

StatTrend.displayName = "StatTrend"

export default StatTrend
