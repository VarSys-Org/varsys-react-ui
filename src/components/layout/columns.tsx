"use client"

import * as React from "react"

import { cn } from "@/lib/cn"

export interface ColumnsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Number of columns at the base breakpoint. */
  columns?: 1 | 2 | 3 | 4 | 5 | 6 | 8 | 12
  /** Breakpoint-aware column counts: [base, sm, md, lg, xl]. */
  responsive?: [1 | 2 | 3 | 4 | 5 | 6 | 8 | 12, (1 | 2 | 3 | 4 | 5 | 6 | 8 | 12)?, (1 | 2 | 3 | 4 | 5 | 6 | 8 | 12)?, (1 | 2 | 3 | 4 | 5 | 6 | 8 | 12)?, (1 | 2 | 3 | 4 | 5 | 6 | 8 | 12)?]
  /** Gap between columns and items. */
  gap?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 10
}

const columnClass = (count: 1 | 2 | 3 | 4 | 5 | 6 | 8 | 12) => {
  switch (count) {
    case 1:
      return "columns-1"
    case 2:
      return "columns-2"
    case 3:
      return "columns-3"
    case 4:
      return "columns-4"
    case 5:
      return "columns-5"
    case 6:
      return "columns-6"
    case 8:
      return "columns-8"
    case 12:
      return "columns-12"
  }
}

export function Columns({
  columns = 3,
  responsive,
  gap = 4,
  className,
  children,
  ...props
}: ColumnsProps) {
  const [base, sm, md, lg, xl] = responsive ?? [columns]

  return (
    <div
      className={cn(
        columnClass(base),
        sm && `sm:${columnClass(sm)}`,
        md && `md:${columnClass(md)}`,
        lg && `lg:${columnClass(lg)}`,
        xl && `xl:${columnClass(xl)}`,
        `gap-${gap}`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

Columns.displayName = "Columns"

export default Columns