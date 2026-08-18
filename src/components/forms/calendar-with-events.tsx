"use client"

import * as React from "react"
import { PlusIcon } from "lucide-react"
import { cn } from "@/lib/cn"
import { Button } from "@/components/buttons/button"
import { Calendar } from "@/components/forms/calendar"
import { Card, CardContent, CardFooter } from "@/components/display/card"

export interface CalendarEvent {
  id: string
  title: string
  start: Date
  end?: Date
  color?: string
}

export interface CalendarWithEventsProps
  extends Omit<
    React.ComponentProps<typeof Calendar>,
    "mode" | "selected" | "onSelect"
  > {
  value?: Date
  defaultValue?: Date
  onValueChange?: (date: Date | undefined) => void
  events?: CalendarEvent[]
  onAddEvent?: () => void
  renderEvent?: (event: CalendarEvent) => React.ReactNode
  className?: string
}

const sameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate()

const formatTime = (date: Date) =>
  date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })

const formatEventTime = (event: CalendarEvent) => {
  if (!event.end || sameDay(event.start, event.end)) {
    return `${formatTime(event.start)}${event.end ? ` – ${formatTime(event.end)}` : ""}`
  }
  return `${event.start.toLocaleDateString()} – ${event.end.toLocaleDateString()}`
}

export function CalendarWithEvents({
  value,
  defaultValue,
  onValueChange,
  events = [],
  onAddEvent,
  renderEvent,
  className,
  ...props
}: CalendarWithEventsProps) {
  const [internalDate, setInternalDate] = React.useState<Date | undefined>(
    value ?? defaultValue,
  )

  const date = value ?? internalDate
  const dayEvents = events
    .filter((event) => date && sameDay(event.start, date))
    .sort((a, b) => a.start.getTime() - b.start.getTime())

  const handleSelect = (next: Date | undefined) => {
    setInternalDate(next)
    onValueChange?.(next)
  }

  return (
    <Card className={cn("w-fit py-4", className)}>
      <CardContent className="px-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleSelect}
          className="bg-transparent p-0"
          required
          {...props}
        />
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-3 border-t px-4 pt-4">
        <div className="flex w-full items-center justify-between px-1">
          <div className="text-sm font-medium">
            {date?.toLocaleDateString(undefined, {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </div>
          {onAddEvent ? (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="size-6"
              title="Add event"
              onClick={onAddEvent}
            >
              <PlusIcon />
              <span className="sr-only">Add event</span>
            </Button>
          ) : null}
        </div>
        <div className="flex w-full flex-col gap-2">
          {dayEvents.length === 0 ? (
            <p className="px-1 text-xs text-muted-foreground">
              No events for this day.
            </p>
          ) : (
            dayEvents.map((event) =>
              renderEvent ? (
                <React.Fragment key={event.id}>
                  {renderEvent(event)}
                </React.Fragment>
              ) : (
                <div
                  key={event.id}
                  className="bg-muted after:bg-primary/70 relative rounded-md p-2 pl-6 text-sm after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full"
                >
                  <div className="font-medium">{event.title}</div>
                  <div className="text-xs text-muted-foreground">
                    {formatEventTime(event)}
                  </div>
                </div>
              ),
            )
          )}
        </div>
      </CardFooter>
    </Card>
  )
}