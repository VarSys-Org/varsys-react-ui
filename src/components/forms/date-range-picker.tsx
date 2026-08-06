"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarRangeIcon } from "lucide-react"
import { type DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/buttons/button"
import { Calendar } from "@/components/forms/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/overlays/popover"

export type { DateRange as DateRangeValue }

export interface DateRangePreset {
  label: string
  dateRange: DateRange
}

export interface DateRangePickerProps
  extends Omit<
    React.ComponentProps<typeof Calendar>,
    "mode" | "selected" | "onSelect"
  > {
  className?: string
  placeholder?: string
  value?: DateRange
  defaultValue?: DateRange
  onChange?: (range: DateRange | undefined) => void
  presets?: DateRangePreset[]
}

const rangeFormat = (range: DateRange | undefined) => {
  if (!range?.from) return undefined
  const from = format(range.from, "MMM d, yyyy")
  const to = range.to ? format(range.to, "MMM d, yyyy") : "…"
  return `${from} – ${to}`
}

const datesEqual = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate()

const rangesEqual = (a: DateRange | undefined, b: DateRange) => {
  if (!a?.from || !b.from) return false
  const fromEqual = datesEqual(a.from, b.from)
  const toEqual = a.to && b.to ? datesEqual(a.to, b.to) : a.to === b.to
  return fromEqual && toEqual
}

function DateRangePicker({
  className,
  placeholder = "Select date range",
  value,
  defaultValue,
  onChange,
  presets,
  ...props
}: DateRangePickerProps) {
  const [open, setOpen] = React.useState(false)
  const [range, setRange] = React.useState<DateRange | undefined>(
    value ?? defaultValue ?? undefined
  )

  React.useEffect(() => {
    setRange(value ?? defaultValue ?? undefined)
  }, [value, defaultValue])

  const displayValue = rangeFormat(range)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        render={
          <Button
            variant="outline"
            className={cn(
              "w-[280px] justify-start text-left font-normal",
              !displayValue && "text-muted-foreground",
              className
            )}
          >
            <CalendarRangeIcon className="mr-2 h-4 w-4" />
            {displayValue ? (
              <span>{displayValue}</span>
            ) : (
              <span>{placeholder}</span>
            )}
          </Button>
        }
      />
      <PopoverContent align="start" className="w-auto p-0">
        {presets && presets.length > 0 ? (
          <div className="flex flex-col gap-2 p-3 sm:flex-row sm:gap-0 sm:p-0">
            <div className="flex w-full gap-1 overflow-x-auto border-border px-2 pb-2 sm:w-40 sm:flex-col sm:overflow-visible sm:border-r sm:pb-0 sm:pt-3">
              {presets.map((preset) => {
                const active = rangesEqual(range, preset.dateRange)
                return (
                  <button
                    key={preset.label}
                    type="button"
                    className={cn(
                      "shrink-0 rounded-md px-2.5 py-1.5 text-left text-sm transition-colors",
                      active
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    )}
                    onClick={() => {
                      setRange(preset.dateRange)
                      onChange?.(preset.dateRange)
                    }}
                  >
                    {preset.label}
                  </button>
                )
              })}
            </div>
            <Calendar
              mode="range"
              selected={range}
              onSelect={(newRange) => {
                setRange(newRange)
                onChange?.(newRange)
              }}
              numberOfMonths={2}
              {...props}
            />
          </div>
        ) : (
          <Calendar
            mode="range"
            selected={range}
            onSelect={(newRange) => {
              setRange(newRange)
              onChange?.(newRange)
            }}
            numberOfMonths={2}
            {...props}
          />
        )}
      </PopoverContent>
    </Popover>
  )
}

export { DateRangePicker }
