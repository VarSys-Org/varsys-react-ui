"use client"

import * as React from "react"
import { type DateRange } from "react-day-picker"
import { cn } from "@/lib/cn"
import { Calendar } from "@/components/forms/calendar"

export interface RangeCalendarMinProps
  extends Omit<
    React.ComponentProps<typeof Calendar>,
    "mode" | "selected" | "onSelect"
  > {
  value?: DateRange
  defaultValue?: DateRange
  onValueChange?: (range: DateRange | undefined) => void
  minDays?: number
  maxDays?: number
  hint?: React.ReactNode
  className?: string
}

export function RangeCalendarMin({
  value,
  defaultValue,
  onValueChange,
  minDays,
  maxDays,
  hint,
  className,
  ...props
}: RangeCalendarMinProps) {
  const [internalRange, setInternalRange] = React.useState<DateRange | undefined>(
    value ?? defaultValue,
  )

  const range = value ?? internalRange

  return (
    <div className={cn("flex min-w-0 flex-col gap-2", className)}>
      <Calendar
        mode="range"
        defaultMonth={range?.from}
        selected={range}
        onSelect={(next) => {
          setInternalRange(next)
          onValueChange?.(next)
        }}
        numberOfMonths={1}
        min={minDays}
        max={maxDays}
        className="rounded-lg border shadow-sm"
        {...props}
      />
      {hint ? (
        <div className="text-center text-xs text-muted-foreground">{hint}</div>
      ) : null}
    </div>
  )
}