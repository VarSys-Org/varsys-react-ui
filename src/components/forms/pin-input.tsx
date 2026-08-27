"use client"

import * as React from "react"

import { cn } from "@/lib/cn"

export interface PinInputProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** Number of pin slots. */
  length?: number
  /** Controlled value. */
  value?: string
  /** Callback fired whenever the pin value changes. */
  onChange?: (value: string) => void
  /** Restrict input to digits only. */
  numeric?: boolean
  /** Placeholder shown in each empty slot. */
  placeholder?: string
  /** Disable all inputs. */
  disabled?: boolean
  /** Auto submit callback fired once every slot is filled. */
  onComplete?: (value: string) => void
}

export function PinInput({
  length = 4,
  value: valueProp,
  onChange,
  numeric = true,
  placeholder,
  disabled,
  onComplete,
  className,
  ...props
}: PinInputProps) {
  const isControlled = valueProp !== undefined
  const [uncontrolledValue, setUncontrolledValue] = React.useState("")

  const value = isControlled ? valueProp : uncontrolledValue

  const setValue = (next: string) => {
    if (!isControlled) setUncontrolledValue(next)
    onChange?.(next)
  }

  const inputsRef = React.useRef<Array<HTMLInputElement | null>>([])

  const focusIndex = (index: number) => {
    const el = inputsRef.current[Math.max(0, Math.min(length - 1, index))]
    el?.focus()
    el?.select()
  }

  const handleChange = (index: number, raw: string) => {
    let char = raw
    if (numeric) char = char.replace(/[^0-9]/g, "")
    if (!char) {
      setValue(value.slice(0, index) + value.slice(index + 1))
      return
    }
    const charAt = value[index] ?? ""
    const next =
      value.slice(0, index) +
      (charAt === char ? "" : char) +
      value.slice(index + 1)
    setValue(next)
    if (next.length >= length && charAt !== char) onComplete?.(next)
    else if (charAt !== char) focusIndex(index + 1)
  }

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace") {
      e.preventDefault()
      const current = value[index] ?? ""
      if (current) {
        setValue(value.slice(0, index) + value.slice(index + 1))
        focusIndex(index)
      } else {
        focusIndex(index - 1)
      }
    } else if (e.key === "ArrowLeft") {
      e.preventDefault()
      focusIndex(index - 1)
    } else if (e.key === "ArrowRight") {
      e.preventDefault()
      focusIndex(index + 1)
    }
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const text = e.clipboardData.getData("text")
    const cleaned = numeric ? text.replace(/[^0-9]/g, "") : text
    const next = (cleaned + value).slice(0, length)
    setValue(next)
    focusIndex(Math.min(next.length, length - 1))
    if (next.length >= length) onComplete?.(next)
  }

  return (
    <div
      className={cn("flex justify-center gap-x-3", className)}
      {...props}
    >
      {Array.from({ length }).map((_, index) => (
        <input
          key={`vs-pin-input-${index}`}
          ref={(el) => {
            inputsRef.current[index] = el
          }}
          type="text"
          inputMode={numeric ? "numeric" : "text"}
          autoComplete="one-time-code"
          aria-label={`Pin slot ${index + 1}`}
          value={value[index] ?? ""}
          disabled={disabled}
          placeholder={placeholder}
          maxLength={numeric ? 1 : undefined}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          className={cn(
            "block size-9.5 h-11 w-11 text-center bg-background border border-input rounded-md text-sm text-foreground placeholder:text-muted-foreground shadow-sm focus:border-ring focus:ring-2 focus:ring-ring/30 disabled:opacity-50 disabled:pointer-events-none",
            "outline-none transition-colors"
          )}
        />
      ))}
    </div>
  )
}

PinInput.displayName = "PinInput"

export default PinInput