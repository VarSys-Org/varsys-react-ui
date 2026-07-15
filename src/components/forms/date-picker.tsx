"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/buttons/button"
import { Calendar } from "@/components/forms/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/overlays/popover"

function DatePicker({
  className,
  value,
  onChange,
  placeholder = "Pick a date",
  ...props
}: Omit<React.ComponentProps<typeof Calendar>, "mode" | "selected" | "onSelect"> & {
  className?: string
  value?: Date
  onChange?: (date: Date | undefined) => void
  placeholder?: string
}) {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(value)

  React.useEffect(() => {
    setDate(value)
  }, [value])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        render={
          <Button
            variant="outline"
            className={cn(
              "w-[280px] justify-start text-left font-normal",
              !date && "text-muted-foreground",
              className
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>{placeholder}</span>}
          </Button>
        }
      />
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(newDate) => {
            setDate(newDate)
            onChange?.(newDate)
            setOpen(false)
          }}
          {...props}
        />
      </PopoverContent>
    </Popover>
  )
}

export { DatePicker }
