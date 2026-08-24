"use client"

import * as React from "react"

import { cn } from "@/lib/cn"

export interface SegmentedProgressSegment {
  /** Segment label. */
  name: string
  /** Segment value. */
  value: number
  /** Optional color override (CSS color). */
  color?: string
}

export interface SegmentedProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Segments rendered side by side in the bar. */
  segments: SegmentedProgressSegment[]
  /** Show the total value to the right of the bar. */
  showTotal?: boolean
  /** Show legend rows below the bar. */
  showLegend?: boolean
  /** Bar height in pixels. */
  height?: number
  /** Formatter applied to values. */
  valueFormatter?: (value: number) => string
}

const defaultColors = [
  "bg-primary",
  "bg-emerald-500",
  "bg-amber-500",
  "bg-sky-500",
  "bg-violet-500",
  "bg-rose-500",
]

export function SegmentedProgress({
  segments,
  showTotal = true,
  showLegend = true,
  height = 12,
  valueFormatter = (value: number) => String(value),
  className,
  ...props
}: SegmentedProgressProps) {
  const total = Math.max(1, segments.reduce((sum, segment) => sum + segment.value, 0))

  return (
    <div data-slot="segmented-progress" className={cn("w-full", className)} {...props}>
      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={segments.reduce((sum, segment) => sum + segment.value, 0)}
        className="relative w-full overflow-hidden rounded-full bg-muted"
        style={{ height }}
      >
        {segments.map((segment, index) => {
          const width = (segment.value / total) * 100
          const isCssColor =
            typeof segment.color === "string" && /^(#|rgb|hsl|var)/.test(segment.color)
          return (
            <span
              key={`${segment.name}-${index}`}
              className={cn(
                "absolute inset-y-0 left-0 transition-all duration-500 ease-in-out",
                isCssColor ? "" : defaultColors[index % defaultColors.length],
              )}
              style={{
                width: `${width}%`,
                ...(isCssColor ? { background: segment.color } : {}),
              }}
            />
          )
        })}
      </div>

      <div className="mt-2 flex items-center justify-between gap-2">
        <span className="text-xs text-muted-foreground">
          {segments.reduce((sum, segment) => sum + segment.value, 0)} total
        </span>
        {showTotal && (
          <span className="text-xs font-medium text-foreground">
            {valueFormatter(segments.reduce((sum, segment) => sum + segment.value, 0))}
          </span>
        )}
      </div>

      {showLegend && (
        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
          {segments.map((segment, index) => {
            const isCssColor =
              typeof segment.color === "string" && /^(#|rgb|hsl|var)/.test(segment.color)
            return (
              <li key={`${segment.name}-${index}`} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span
                  className={cn(
                    "size-2 rounded-full",
                    isCssColor ? "" : defaultColors[index % defaultColors.length],
                  )}
                  style={isCssColor ? { background: segment.color } : undefined}
                />
                <span>{segment.name}</span>
                <span className="font-medium text-foreground">
                  {valueFormatter(segment.value)}
                </span>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default SegmentedProgress
