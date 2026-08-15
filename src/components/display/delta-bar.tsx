"use client"

import React from "react"
import { cn } from "@/lib/cn"

export type DeltaBarVariant = "increase" | "decrease"

const variantClasses: Record<DeltaBarVariant, string> = {
  increase: "bg-emerald-500",
  decrease: "bg-red-500",
}

export interface DeltaBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Signed delta value, e.g. -25 to 25. Negative renders left, positive right. */
  value: number
  /** When true a positive value is treated as a decrease. */
  isIncreasePositive?: boolean
  /** Optional tooltip content shown via the title attribute. */
  tooltip?: string
  showAnimation?: boolean
}

export const DeltaBar = React.forwardRef<HTMLDivElement, DeltaBarProps>(
  (
    { value, isIncreasePositive = true, showAnimation = false, className, tooltip, ...props },
    forwardedRef,
  ) => {
    const deltaType: DeltaBarVariant =
      (isIncreasePositive ? value >= 0 : value < 0) ? "increase" : "decrease"
    const magnitude = Math.min(Math.abs(value), 100)

    return (
      <div
        ref={forwardedRef}
        title={tooltip}
        className={cn("relative flex h-2 w-full items-center rounded-full bg-muted", className)}
        {...props}
      >
        <div className="flex h-full w-1/2 justify-end">
          {deltaType === "decrease" && (
            <div
              className={cn(
                "h-full rounded-l-full",
                variantClasses[deltaType],
                showAnimation && "transition-all duration-300",
              )}
              style={{ width: `${magnitude}%` }}
            />
          )}
        </div>
        <div className="z-10 h-4 w-1 rounded-full bg-foreground ring-2 ring-background" />
        <div className="flex h-full w-1/2 justify-start">
          {deltaType === "increase" && (
            <div
              className={cn(
                "h-full rounded-r-full",
                variantClasses[deltaType],
                showAnimation && "transition-all duration-700",
              )}
              style={{ width: `${magnitude}%` }}
            />
          )}
        </div>
      </div>
    )
  },
)

DeltaBar.displayName = "DeltaBar"
