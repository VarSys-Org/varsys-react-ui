"use client"

import React from "react"
import { cn } from "@/lib/utils"

export type CategoryBarValue = {
  value: number
  color?: string
  label?: string
  tooltip?: string
}

export interface CategoryBarProps {
  values: CategoryBarValue[]
  markerValue?: number
  showLabels?: boolean
  showAnimation?: boolean
  className?: string
}

export const CategoryBar = ({
  values,
  markerValue,
  showLabels = true,
  showAnimation = true,
  className,
}: CategoryBarProps) => {
  const total = values.reduce((sum, v) => sum + v.value, 0)
  let cumulative = 0
  const [markerLabel, setMarkerLabel] = React.useState(false)

  const getMarkerColor = () => {
    if (markerValue === undefined) return "var(--foreground)"
    let acc = 0
    for (const v of values) {
      acc += v.value
      if (markerValue <= acc) return v.color || "var(--primary)"
    }
    return "var(--foreground)"
  }

  const markerPos = markerValue !== undefined ? Math.min((markerValue / total) * 100, 100) : null

  return (
    <div className={cn("w-full", className)}>
      <div className="relative flex h-3 w-full">
        {values.map((item, idx) => {
          const width = (item.value / total) * 100
          const start = cumulative
          cumulative += width

          return (
            <div
              key={idx}
              className={cn(
                "h-full border-r-2 border-background first:rounded-l-full last:rounded-r-full",
                idx === values.length - 1 && "rounded-r-full",
                idx === 0 && "rounded-l-full",
                showAnimation && "transition-all duration-500",
              )}
              style={{
                width: `${width}%`,
                backgroundColor: item.color || `hsl(${(idx * 37) % 360}, 70%, 50%)`,
              }}
              title={item.tooltip}
            />
          )
        })}

        {markerPos !== null && (
          <div
            className="absolute top-0 -translate-x-1/2"
            style={{ left: `${markerPos}%` }}
            onMouseEnter={() => setMarkerLabel(true)}
            onMouseLeave={() => setMarkerLabel(false)}
          >
            <div
              className="h-3 w-1.5 rounded-sm bg-background ring-1 ring-border"
              style={{ boxShadow: `0 0 0 2px ${getMarkerColor()}` }}
            />
            {markerLabel && markerValue !== undefined && (
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 rounded-md bg-popover px-2 py-0.5 text-xs shadow-sm">
                {markerValue}
              </div>
            )}
          </div>
        )}
      </div>

      {showLabels && (
        <div className="mt-3 flex w-full gap-1">
          {values.map((item, idx) => {
            const width = (item.value / total) * 100
            return (
              <div key={idx} className="flex items-center gap-1.5" style={{ minWidth: `${Math.max(width, 5)}%` }}>
                <span className="size-2.5 shrink-0 rounded-[2px]" style={{ backgroundColor: item.color }} />
                <span className="truncate text-xs text-muted-foreground">{item.label}</span>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

CategoryBar.displayName = "CategoryBar"
