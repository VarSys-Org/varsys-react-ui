import * as React from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/lib/cn"

export interface CurrencyInputProps
  extends Omit<
    React.ComponentProps<"input">,
    "value" | "onChange" | "defaultValue" | "type"
  > {
  /** ISO 4217 currency code used for formatting. */
  currency?: string
  /** BCP 47 locale used for formatting. */
  locale?: string
  /** Controlled numeric value. */
  value?: number | null
  /** Uncontrolled numeric initial value. */
  defaultValue?: number
  /** Called with the parsed number (or null) as the user types. */
  onValueChange?: (value: number | null) => void
  /** Minimum value allowed by the steppers. */
  min?: number
  /** Maximum value allowed by the steppers. */
  max?: number
  /** Increment step for the stepper buttons. */
  step?: number
}

function parseNumeric(text: string): number | null {
  if (!text) return null
  const cleaned = text.replace(/[^\d.,-]/g, "")
  if (!cleaned) return null

  const lastComma = cleaned.lastIndexOf(",")
  const lastDot = cleaned.lastIndexOf(".")
  const decIndex = Math.max(lastComma, lastDot)
  const isDecimal = decIndex > -1

  const sign = cleaned.trimStart().startsWith("-") ? "-" : ""
  const intPart = isDecimal
    ? cleaned.slice(0, decIndex).replace(/[.,]/g, "")
    : cleaned.replace(/[.,]/g, "")
  const decPart = isDecimal ? cleaned.slice(decIndex + 1).replace(/[.,]/g, "") : ""

  const value = parseFloat(`${sign}${intPart || "0"}.${decPart}`)
  return Number.isNaN(value) ? null : value
}

export function CurrencyInput({
  className,
  currency = "USD",
  locale = "en-US",
  value,
  defaultValue,
  onValueChange,
  min,
  max,
  step = 1,
  onFocus,
  onBlur,
  ...props
}: CurrencyInputProps) {
  const formatter = React.useMemo(
    () =>
      new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
        currencySign: "accounting",
      }),
    [currency, locale],
  )

  const isControlled = value !== undefined
  const numericValue = isControlled ? value : (defaultValue ?? null)

  const [focused, setFocused] = React.useState(false)
  const [raw, setRaw] = React.useState<string | null>(null)

  const commit = (next: number | null) => {
    if (next != null) {
      if (min !== undefined) next = Math.max(min, next)
      if (max !== undefined) next = Math.min(max, next)
    }
    onValueChange?.(next)
  }

  const displayValue = () => {
    if (focused) {
      return raw ?? (numericValue == null ? "" : String(numericValue))
    }
    return numericValue == null ? "" : formatter.format(numericValue)
  }

  const stepBy = (delta: number) => {
    const base = numericValue ?? 0
    let next = base + delta * step
    if (min !== undefined) next = Math.max(min, next)
    if (max !== undefined) next = Math.min(max, next)
    setRaw(String(next))
    commit(next)
  }

  return (
    <div className={cn("relative", className)}>
      <input
        type="text"
        inputMode="decimal"
        data-slot="currency-input"
        className="border-input bg-transparent pr-8 flex h-9 w-full min-w-0 rounded-2xl border px-3 py-1 text-sm shadow-xs transition-colors outline-none placeholder:text-muted-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:border-ring disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
        value={displayValue()}
        onChange={(event) => {
          setRaw(event.target.value)
          commit(parseNumeric(event.target.value))
        }}
        onFocus={(event) => {
          setFocused(true)
          setRaw(numericValue == null ? "" : String(numericValue))
          onFocus?.(event)
        }}
        onBlur={(event) => {
          setFocused(false)
          setRaw(null)
          onBlur?.(event)
        }}
        {...props}
      />
      <span className="absolute inset-y-1 right-1 flex w-6 flex-col">
        <button
          type="button"
          tabIndex={-1}
          aria-label="Increment"
          onClick={() => stepBy(1)}
          className="flex h-1/2 items-center justify-center rounded-md text-muted-foreground/80 transition-colors hover:bg-muted hover:text-foreground disabled:pointer-events-none disabled:opacity-50"
          disabled={max !== undefined && (numericValue ?? 0) >= max}
        >
          <ChevronUp aria-hidden="true" className="size-3" />
        </button>
        <button
          type="button"
          tabIndex={-1}
          aria-label="Decrement"
          onClick={() => stepBy(-1)}
          className="flex h-1/2 items-center justify-center rounded-md text-muted-foreground/80 transition-colors hover:bg-muted hover:text-foreground disabled:pointer-events-none disabled:opacity-50"
          disabled={min !== undefined && (numericValue ?? 0) <= min}
        >
          <ChevronDown aria-hidden="true" className="size-3" />
        </button>
      </span>
    </div>
  )
}

export default CurrencyInput