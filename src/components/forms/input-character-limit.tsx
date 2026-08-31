"use client"

import * as React from "react"
import { useId, useState } from "react"

import { cn } from "@/lib/cn"

export interface InputCharacterLimitProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "maxLength" | "value" | "defaultValue"
  > {
  /** Maximum number of characters. Defaults to 50. */
  maxLength?: number
  /** Where the counter renders: inside the input ("inside") or as a helper line below ("below"). */
  variant?: "inside" | "below"
  /** Label text. */
  label?: string
  /** Initial value (uncontrolled). */
  defaultValue?: string
  /** Controlled value. */
  value?: string
  /** Called with the trimmed length-safe value on change. */
  onChange?: (value: string) => void
}

export function InputCharacterLimit({
  maxLength = 50,
  variant = "inside",
  label = "Input with character limit",
  defaultValue,
  value: controlledValue,
  onChange,
  className,
  id: idProp,
  disabled,
  placeholder,
  ...props
}: InputCharacterLimitProps) {
  const autoId = useId()
  const id = idProp ?? autoId
  const isControlled = controlledValue !== undefined
  const [internalValue, setInternalValue] = useState(defaultValue ?? "")

  const value = isControlled ? controlledValue : internalValue
  const characterCount = value.length

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = e.target.value
    if (next.length > maxLength) return
    if (!isControlled) setInternalValue(next)
    onChange?.(next)
  }

  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={id}>{label}</Label>
      {variant === "inside" ? (
        <div className="relative">
          <Input
            id={id}
            aria-describedby={`${id}-description`}
            className="peer pe-14"
            maxLength={maxLength}
            value={value}
            onChange={handleChange}
            disabled={disabled}
            placeholder={placeholder}
            {...props}
          />
          <div
            id={`${id}-description`}
            role="status"
            aria-live="polite"
            className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-xs tabular-nums text-muted-foreground peer-disabled:opacity-50"
          >
            {characterCount}/{maxLength}
          </div>
        </div>
      ) : (
        <>
          <Input
            id={id}
            aria-describedby={`${id}-description`}
            maxLength={maxLength}
            value={value}
            onChange={handleChange}
            disabled={disabled}
            placeholder={placeholder}
            {...props}
          />
          <p
            id={`${id}-description`}
            role="status"
            aria-live="polite"
            className="text-xs text-muted-foreground"
          >
            <span className="tabular-nums">{maxLength - characterCount}</span>{" "}
            characters left
          </p>
        </>
      )}
    </div>
  )
}

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className,
      )}
      {...props}
    />
  )
}

function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-2xl border bg-transparent px-3 py-1 text-sm shadow-xs transition-colors outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  )
}

export default InputCharacterLimit