"use client"

import React from "react"
import { cn } from "@/lib/utils"

type TrackerData = {
  color?: string
  tooltip?: string
}

export interface TrackerProps {
  data: TrackerData[]
  className?: string
}

export const Tracker = ({ data, className }: TrackerProps) => {
  return (
    <div className={cn("flex w-min flex-nowrap", className)}>
      {data.map((item, index) => (
        <div
          key={index}
          className={cn(
            "h-9 w-3 transition-opacity hover:opacity-75",
            index === 0 && "rounded-l-[4px]",
            index === data.length - 1 && "rounded-r-[4px]",
            item.color || "bg-primary/20",
          )}
          style={item.color ? { backgroundColor: item.color } : undefined}
          title={item.tooltip}
          role="img"
          aria-label={item.tooltip}
        />
      ))}
    </div>
  )
}

Tracker.displayName = "Tracker"
