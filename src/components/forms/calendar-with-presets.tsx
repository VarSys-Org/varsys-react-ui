"use client"

import * as React from "react"
import { addDays } from "date-fns"
import { cn } from "@/lib/cn"
import { Button } from "@/components/buttons/button"
import { Calendar } from "@/components/forms/calendar"
import { Card, CardContent, CardFooter } from "@/components/display/card"

export interface CalendarPreset {
  label: string
  date: Date
}

export interface CalendarWithPresetsProps
  extends Omit<
    React.ComponentProps<typeof Calendar>,
    "mode" | "selected" | "onSelect"
  > {
  value?: Date
  defaultValue?: Date
  onValueChange?: (date: Date | undefined) => void
  presets?: CalendarPreset[]
  className?: string
}

export function calendarPresetsFromToday(
  items: Array<{ label: string; offsetDays: number }>,
): CalendarPreset[] {
  return items.map(({ label, offsetDays }) => ({
    label,
    date: addDays(new Date(), offsetDays),
  }))
}

export function CalendarWithPresets({
  value,
  defaultValue,
  onValueChange,
  presets,
  className,
  ...props
}: CalendarWithPresetsProps) {
  const [internalDate, setInternalDate] = React.useState<Date | undefined>(
    value ?? defaultValue,
  )

  const date = value ?? internalDate
  const items =
    presets ??
    calendarPresetsFromToday([
      { label: "Today", offsetDays: 0 },
      { label: "Tomorrow", offsetDays: 1 },
      { label: "In 3 days", offsetDays: 3 },
      { label: "In a week", offsetDays: 7 },
      { label: "In 2 weeks", offsetDays: 14 },
    ])

  const handleSelect = (next: Date | undefined) => {
    setInternalDate(next)
    onValueChange?.(next)
  }

  return (
    <Card className={cn("max-w-sm py-4", className)}>
      <CardContent className="px-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleSelect}
          defaultMonth={date}
          className="bg-transparent p-0"
          {...props}
        />
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 border-t px-4 pt-4">
        {items.map((preset) => (
          <Button
            key={preset.label}
            type="button"
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={() => handleSelect(preset.date)}
          >
            {preset.label}
          </Button>
        ))}
      </CardFooter>
    </Card>
  )
}