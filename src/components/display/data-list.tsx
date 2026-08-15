"use client"

import * as React from "react"
import { cn } from "@/lib/cn"

export interface DataListProps extends React.HTMLAttributes<HTMLDListElement> {
  layout?: "stack" | "grid" | "split"
}

const layoutClasses = {
  stack: "space-y-0 divide-y divide-border",
  grid: "grid grid-cols-1 sm:grid-cols-3",
  split: "space-y-0 divide-y divide-border",
} as const

export const DataList = React.forwardRef<HTMLDListElement, DataListProps>(
  ({ layout = "stack", className, ...props }, forwardedRef) => {
    return (
      <dl
        ref={forwardedRef}
        data-slot="data-list"
        className={cn(layoutClasses[layout], className)}
        {...props}
      />
    )
  },
)

DataList.displayName = "DataList"

export interface DataListItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical"
}

const itemOrientationClasses = {
  horizontal: "flex flex-row",
  vertical: "flex flex-col",
} as const

export const DataListItem = React.forwardRef<HTMLDivElement, DataListItemProps>(
  ({ orientation = "horizontal", className, ...props }, forwardedRef) => {
    return (
      <div
        ref={forwardedRef}
        data-slot="data-list-item"
        className={cn(
          "gap-4 px-4 py-3",
          orientation === "vertical" && "flex-col gap-1",
          itemOrientationClasses[orientation],
          className,
        )}
        {...props}
      />
    )
  },
)

DataListItem.displayName = "DataListItem"

export interface DataListLabelProps
  extends React.HTMLAttributes<HTMLElement> {}

export const DataListLabel = React.forwardRef<
  HTMLElement,
  DataListLabelProps
>(({ className, ...props }, forwardedRef) => {
  return (
    <dt
      ref={forwardedRef}
      data-slot="data-list-label"
      className={cn(
        "min-w-0 shrink-0 text-sm font-medium text-foreground sm:w-40",
        className,
      )}
      {...props}
    />
  )
})

DataListLabel.displayName = "DataListLabel"

export interface DataListValueProps
  extends React.HTMLAttributes<HTMLElement> {}

export const DataListValue = React.forwardRef<
  HTMLElement,
  DataListValueProps
>(({ className, ...props }, forwardedRef) => {
  return (
    <dd
      ref={forwardedRef}
      data-slot="data-list-value"
      className={cn("min-w-0 text-sm text-muted-foreground", className)}
      {...props}
    />
  )
})

DataListValue.displayName = "DataListValue"

export default DataList
