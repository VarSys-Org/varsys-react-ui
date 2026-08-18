"use client"

import * as React from "react"
import { cn } from "@/lib/cn"
import { Calendar } from "@/components/forms/calendar"

export interface CalendarWithBookedDaysProps
  extends Omit<
    React.ComponentProps<typeof Calendar>,
    "mode" | "selected" | "onSelect"
  > {
  value?: Date
  defaultValue?: Date
  onValueChange?: (date: Date | undefined) => void
  bookedDates?: Date[]
  className?: string
}

export function CalendarWithBookedDays({
  value,
  defaultValue,
  onValueChange,
  bookedDates = [],
  className,
  ...props
}: CalendarWithBookedDaysProps) {
  const [internalDate, setInternalDate] = React.useState<Date | undefined>(
    value ?? defaultValue,
  )

  const date = value ?? internalDate

  return (
    <Calendar
      mode="single"
      defaultMonth={date}
      selected={date}
      onSelect={(next) => {
        setInternalDate(next)
        onValueChange?.(next)
      }}
      disabled={bookedDates}
      modifiers={{ booked: bookedDates }}
      modifiersClassNames={{
        booked: "[&>button]:line-through opacity-100",
      }}
      className={cn("rounded-lg border shadow-sm", className)}
      {...props}
    />
  )
}