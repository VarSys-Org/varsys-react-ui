"use client"

import * as React from "react"
import { cn } from "@/lib/cn"
import { Button } from "@/components/buttons/button"
import { Calendar } from "@/components/forms/calendar"
import { Card, CardContent, CardFooter } from "@/components/display/card"

export interface CalendarTimeSlot {
  value: string
  label?: string
  disabled?: boolean
}

export interface CalendarWithTimeSlotsProps
  extends Omit<
    React.ComponentProps<typeof Calendar>,
    "mode" | "selected" | "onSelect"
  > {
  value?: Date
  defaultValue?: Date
  onValueChange?: (date: Date | undefined) => void
  timeSlots?: CalendarTimeSlot[]
  selectedTime?: string
  onTimeChange?: (time: string) => void
  startHour?: number
  intervalMinutes?: number
  slotCount?: number
  bookedDates?: Date[]
  summary?: (date: Date | undefined, time: string | undefined) => React.ReactNode
  className?: string
}

const defaultFormatTime = (hour: number, minute: number) =>
  `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`

export function generateTimeSlots(
  startHour = 9,
  intervalMinutes = 15,
  count = 37,
): CalendarTimeSlot[] {
  return Array.from({ length: count }, (_, i) => {
    const totalMinutes = i * intervalMinutes
    const hour = Math.floor(totalMinutes / 60) + startHour
    const minute = totalMinutes % 60
    return {
      value: defaultFormatTime(hour, minute),
    }
  })
}

export function CalendarWithTimeSlots({
  value,
  defaultValue,
  onValueChange,
  timeSlots,
  selectedTime,
  onTimeChange,
  startHour = 9,
  intervalMinutes = 15,
  slotCount = 37,
  bookedDates = [],
  summary,
  className,
  ...props
}: CalendarWithTimeSlotsProps) {
  const [internalDate, setInternalDate] = React.useState<Date | undefined>(
    value ?? defaultValue,
  )
  const [internalTime, setInternalTime] = React.useState<string | undefined>(
    selectedTime,
  )

  const date = value ?? internalDate
  const time = selectedTime ?? internalTime
  const slots = timeSlots ?? generateTimeSlots(startHour, intervalMinutes, slotCount)

  const handleSelect = (next: Date | undefined) => {
    setInternalDate(next)
    onValueChange?.(next)
  }

  const handleTime = (next: string) => {
    setInternalTime(next)
    onTimeChange?.(next)
  }

  return (
    <Card className="gap-0 p-0">
      <CardContent className="relative p-0 md:pr-52">
        <div className="p-6">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleSelect}
            defaultMonth={date}
            disabled={bookedDates}
            showOutsideDays={false}
            modifiers={{ booked: bookedDates }}
            modifiersClassNames={{
              booked: "[&>button]:line-through opacity-100",
            }}
            className="bg-transparent p-0 md:min-w-80"
            {...props}
          />
        </div>
        <div className="no-scrollbar inset-y-0 right-0 flex max-h-72 w-full scroll-pb-6 flex-col gap-4 overflow-y-auto border-t p-6 md:absolute md:max-h-none md:w-52 md:border-t-0 md:border-l">
          <div className="grid gap-2">
            {slots.map((slot) => (
              <Button
                key={slot.value}
                type="button"
                variant={time === slot.value ? "default" : "outline"}
                disabled={slot.disabled}
                onClick={() => handleTime(slot.value)}
                className="w-full shadow-none"
              >
                {slot.label ?? slot.value}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
      {summary ? (
        <CardFooter className="flex flex-col gap-4 border-t px-6 py-5 md:flex-row md:items-center">
          {summary(date, time)}
        </CardFooter>
      ) : null}
    </Card>
  )
}