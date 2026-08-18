"use client"

import * as React from "react"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/cn"
import { Button } from "@/components/buttons/button"
import { Calendar } from "@/components/forms/calendar"
import { Input } from "@/components/forms/input"
import { Label } from "@/components/forms/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/overlays/popover"

export interface DateInputPickerProps
  extends Omit<
    React.ComponentProps<typeof Calendar>,
    "mode" | "selected" | "onSelect"
  > {
  value?: Date
  defaultValue?: Date
  onValueChange?: (date: Date | undefined) => void
  label?: React.ReactNode
  placeholder?: string
  format?: (date: Date | undefined) => string
  parse?: (value: string) => Date | undefined
  className?: string
}

const defaultFormat = (date: Date | undefined) => {
  if (!date) return ""
  return date.toLocaleDateString(undefined, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
}

const defaultParse = (value: string): Date | undefined => {
  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? undefined : date
}

export function DateInputPicker({
  value,
  defaultValue,
  onValueChange,
  label,
  placeholder = "Select a date",
  format = defaultFormat,
  parse = defaultParse,
  className,
  ...props
}: DateInputPickerProps) {
  const [open, setOpen] = React.useState(false)
  const [internalDate, setInternalDate] = React.useState<Date | undefined>(
    value ?? defaultValue,
  )
  const [month, setMonth] = React.useState<Date | undefined>(
    value ?? defaultValue,
  )
  const [inputValue, setInputValue] = React.useState<string>(
    format(value ?? defaultValue),
  )

  const date = value ?? internalDate

  const selectDate = (next: Date | undefined) => {
    setInternalDate(next)
    setInputValue(format(next))
    setOpen(false)
    onValueChange?.(next)
  }

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {label ? <Label className="px-1">{label}</Label> : null}
      <div className="relative flex gap-2">
        <Input
          value={inputValue}
          placeholder={placeholder}
          className="bg-background pr-10"
          onChange={(event) => {
            const parsed = parse(event.target.value)
            setInputValue(event.target.value)
            if (parsed) {
              setInternalDate(parsed)
              setMonth(parsed)
            }
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowDown") {
              event.preventDefault()
              setOpen(true)
            }
          }}
        />
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger
            render={
              <Button
                type="button"
                variant="ghost"
                className="absolute top-1/2 right-2 size-6 -translate-y-1/2 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              >
                <CalendarIcon className="size-4" />
                <span className="sr-only">Select date</span>
              </Button>
            }
          />
          <PopoverContent
            className="w-auto overflow-hidden p-0"
            align="end"
            alignOffset={-8}
            sideOffset={10}
          >
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              month={month}
              onMonthChange={setMonth}
              onSelect={selectDate}
              {...props}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}