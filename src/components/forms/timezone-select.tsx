"use client"

import * as React from "react"

import { cn } from "@/lib/cn"
import { NativeSelect } from "@/components/forms/native-select"

export interface TimezoneSelectProps
  extends Omit<React.ComponentProps<"select">, "value" | "children" | "size"> {
  /** Accessible label rendered above the select. */
  label?: string
  /** Selected timezone value (IANA name, e.g. "Europe/London"). */
  value?: string
  /** Called with the selected IANA timezone name. */
  onValueChange?: (value: string) => void
}

interface FormattedTimezone {
  label: string
  numericOffset: number
  value: string
}

function formatTimezones(): FormattedTimezone[] {
  const timezones = Intl.supportedValuesOf("timeZone")

  return timezones
    .map((timezone) => {
      const formatter = new Intl.DateTimeFormat("en", {
        timeZone: timezone,
        timeZoneName: "shortOffset",
      })
      const parts = formatter.formatToParts(new Date())
      const offset =
        parts.find((part) => part.type === "timeZoneName")?.value || ""
      const modifiedOffset = offset === "GMT" ? "GMT+0" : offset

      return {
        label: `(${modifiedOffset}) ${timezone.replace(/_/g, " ")}`,
        numericOffset: Number.parseInt(
          offset.replace("GMT", "").replace("+", "") || "0",
          10,
        ),
        value: timezone,
      }
    })
    .sort((a, b) => a.numericOffset - b.numericOffset)
}

export function TimezoneSelect({
  label = "Timezone",
  value,
  onValueChange,
  id,
  className,
  ...props
}: TimezoneSelectProps) {
  const generatedId = React.useId()
  const selectId = id ?? generatedId
  const timezones = React.useMemo(formatTimezones, [])

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={selectId} className="text-sm font-medium">
        {label}
      </label>
      <NativeSelect
        id={selectId}
        value={value}
        onChange={(event) => onValueChange?.(event.target.value)}
        className="w-full"
        {...props}
      >
        {timezones.map(({ value: tz, label: tzLabel }) => (
          <option key={tz} value={tz}>
            {tzLabel}
          </option>
        ))}
      </NativeSelect>
    </div>
  )
}

TimezoneSelect.displayName = "TimezoneSelect"

export default TimezoneSelect