"use client"

import React from "react"
import { cn } from "@/lib/cn"

export interface MarkerBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Marker position in percent (0-100). */
  value: number
  /** Optional highlighted range start in percent. */
  minValue?: number
  /** Optional highlighted range end in percent. */
  maxValue?: number
  /** Optional tooltip content for the marker shown via the title attribute. */
  markerTooltip?: string
  /** Optional tooltip content for the range shown via the title attribute. */
  rangeTooltip?: string
  showAnimation?: boolean
  /** Optional marker color. */
  color?: string
}

export const MarkerBar = React.forwardRef<HTMLDivElement, MarkerBarProps>(
  (
    {
      value,
      minValue,
      maxValue,
      markerTooltip,
      rangeTooltip,
      showAnimation = false,
      color,
      className,
      ...props
    },
    forwardedRef,
  ) => {
    const markerPos = Math.min(Math.max(value, 0), 100)
    const hasRange = minValue !== undefined && maxValue !== undefined
    const rangeLeft = minValue !== undefined ? Math.min(Math.max(minValue, 0), 100) : 0
    const rangeWidth =
      minValue !== undefined && maxValue !== undefined
        ? Math.min(Math.max(maxValue, 0), 100) - rangeLeft
        : 0

    return (
      <div
        ref={forwardedRef}
        className={cn("relative flex h-2 w-full items-center rounded-full bg-muted", className)}
        {...props}
      >
        {hasRange && (
          <div
            title={rangeTooltip}
            className="absolute h-full rounded-full bg-foreground/15"
            style={{
              left: `${rangeLeft}%`,
              width: `${Math.max(rangeWidth, 0)}%`,
              transition: showAnimation ? "all duration-300" : "",
            }}
          />
        )}
        <div
          title={markerTooltip}
          className="absolute right-1/2 w-5 -translate-x-1/2"
          style={{
            left: `${markerPos}%`,
            transition: showAnimation ? "all 700ms" : "",
          }}
        >
          <div
            className={cn(
              "mx-auto h-4 w-1 rounded-full ring-2 ring-background",
            )}
            style={{
              backgroundColor: color || "var(--primary)",
            }}
          />
        </div>
      </div>
    )
  },
)

MarkerBar.displayName = "MarkerBar"
