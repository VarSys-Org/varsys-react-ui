"use client"

import React from "react"
import { cn } from "@/lib/utils"

export type BarListItem = {
  name: string
  value: number
  href?: string
  color?: string
  onClick?: () => void
}

export interface BarListProps {
  data: BarListItem[]
  sortOrder?: "ascending" | "descending" | "none"
  showAnimation?: boolean
  showValue?: boolean
  valueFormatter?: (value: number) => string
  onValueChange?: (payload: BarListItem) => void
  className?: string
}

export const BarList = ({
  data,
  sortOrder = "descending",
  showAnimation = true,
  showValue = true,
  valueFormatter = (v) => v.toString(),
  onValueChange,
  className,
}: BarListProps) => {
  const sortedData = React.useMemo(() => {
    if (sortOrder === "ascending") return [...data].sort((a, b) => a.value - b.value)
    if (sortOrder === "descending") return [...data].sort((a, b) => b.value - a.value)
    return data
  }, [data, sortOrder])

  const maxValue = Math.max(...sortedData.map((item) => item.value), 1)

  return (
    <div className={cn("flex flex-col space-y-1.5", className)}>
      {sortedData.map((item, idx) => {
        const width = Math.max((item.value / maxValue) * 100, 2)

        const nameContent = item.href ? (
          <a href={item.href} className="text-sm font-medium text-foreground hover:underline">
            {item.name}
          </a>
        ) : (
          <p className="text-sm font-medium text-foreground">{item.name}</p>
        )

        return (
          <div
            key={idx}
            className="group flex items-center justify-between rounded-md px-2 py-1.5 transition-colors hover:bg-muted/50"
            onClick={() => {
              item.onClick?.()
              onValueChange?.(item)
            }}
            role={onValueChange ? "button" : undefined}
            tabIndex={onValueChange ? 0 : undefined}
          >
            <div className="flex w-full items-center gap-3">
              <span className="w-20 shrink-0 truncate text-left">{nameContent}</span>
              <div className="flex-1">
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className={cn("h-full rounded-full", showAnimation && "transition-all duration-800")}
                    style={{
                      width: `${width}%`,
                      backgroundColor: item.color || "var(--primary)",
                    }}
                  />
                </div>
              </div>
              {showValue && (
                <span className="w-14 text-right text-sm tabular-nums text-muted-foreground">
                  {valueFormatter(item.value)}
                </span>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

BarList.displayName = "BarList"
