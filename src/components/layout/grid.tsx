"use client"

import React from "react"
import { cn } from "@/lib/cn"

const gridCols: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
  7: "grid-cols-7",
  8: "grid-cols-8",
  9: "grid-cols-9",
  10: "grid-cols-10",
  11: "grid-cols-11",
  12: "grid-cols-12",
}

const gridColsSm: Record<number, string> = {
  1: "sm:grid-cols-1",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-4",
  5: "sm:grid-cols-5",
  6: "sm:grid-cols-6",
  7: "sm:grid-cols-7",
  8: "sm:grid-cols-8",
  9: "sm:grid-cols-9",
  10: "sm:grid-cols-10",
  11: "sm:grid-cols-11",
  12: "sm:grid-cols-12",
}

const gridColsMd: Record<number, string> = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
  5: "md:grid-cols-5",
  6: "md:grid-cols-6",
  7: "md:grid-cols-7",
  8: "md:grid-cols-8",
  9: "md:grid-cols-9",
  10: "md:grid-cols-10",
  11: "md:grid-cols-11",
  12: "md:grid-cols-12",
}

const gridColsLg: Record<number, string> = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
  6: "lg:grid-cols-6",
  7: "lg:grid-cols-7",
  8: "lg:grid-cols-8",
  9: "lg:grid-cols-9",
  10: "lg:grid-cols-10",
  11: "lg:grid-cols-11",
  12: "lg:grid-cols-12",
}

function getGridCols(numCols: number | undefined, mapping: Record<number, string>) {
  if (!numCols) return ""
  if (!(numCols in mapping)) return ""
  return mapping[numCols]
}

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  numItems?: number
  numItemsSm?: number
  numItemsMd?: number
  numItemsLg?: number
  children: React.ReactNode
}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  (
    { numItems = 1, numItemsSm, numItemsMd, numItemsLg, children, className, ...props },
    forwardedRef,
  ) => {
    const colsBase = getGridCols(numItems, gridCols)
    const colsSm = getGridCols(numItemsSm, gridColsSm)
    const colsMd = getGridCols(numItemsMd, gridColsMd)
    const colsLg = getGridCols(numItemsLg, gridColsLg)

    return (
      <div
        ref={forwardedRef}
        className={cn("grid", colsBase, colsSm, colsMd, colsLg, className)}
        {...props}
      >
        {children}
      </div>
    )
  },
)

Grid.displayName = "Grid"
