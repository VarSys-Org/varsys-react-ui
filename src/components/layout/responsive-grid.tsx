"use client"

import React from "react"
import { cn } from "@/lib/utils"

export interface ResponsiveGridProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "onSelect"> {
  columns: number | "auto"
  gap?: number | string
  children: React.ReactNode[]
  onSelect?: (index: number) => void
}

export function ResponsiveGrid({
  columns,
  gap = 4,
  children,
  onSelect,
  className,
  ...props
}: ResponsiveGridProps) {
  const style = {
    gap: typeof gap === "number" ? `calc(${gap} * 0.25rem)` : gap,
    gridTemplateColumns:
      columns === "auto"
        ? "repeat(auto-fit, minmax(0, 1fr))"
        : `repeat(${columns}, minmax(0, 1fr))`,
  }

  return (
    <div
      className={cn("grid", className)}
      style={style}
      {...props}
    >
      {children.map((child, index) => (
        <div
          key={index}
          onClick={() => onSelect?.(index)}
          className={cn("min-w-0", onSelect && "cursor-pointer")}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
