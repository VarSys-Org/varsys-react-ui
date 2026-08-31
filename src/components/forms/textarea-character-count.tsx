"use client"

import * as React from "react"
import { useId, useState } from "react"

import { cn } from "@/lib/cn"

export interface TextareaCharacterCountProps
  extends Omit<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    "onChange" | "maxLength" | "value" | "defaultValue"
  > {
  /** Maximum number of characters. Defaults to 180. */
  maxLength?: number
  /** Label text. */
  label?: string
  /** Initial value (uncontrolled). */
  defaultValue?: string
  /** Controlled value. */
  value?: string
  /** Called with the length-safe value on change. */
  onChange?: (value: string) => void
}

export function TextareaCharacterCount({
  maxLength = 180,
  label = "Textarea with characters left",
  defaultValue,
  value: controlledValue,
  onChange,
  className,
  id: idProp,
  disabled,
  placeholder,
  ...props
}: TextareaCharacterCountProps) {
  const autoId = useId()
  const id = idProp ?? autoId
  const isControlled = controlledValue !== undefined
  const [internalValue, setInternalValue] = useState(defaultValue ?? "")

  const value = isControlled ? controlledValue : internalValue
  const characterCount = value.length

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const next = e.target.value
    if (next.length > maxLength) return
    if (!isControlled) setInternalValue(next)
    onChange?.(next)
  }

  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={id}>{label}</Label>
      <Textarea
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
        className="text-right text-xs text-muted-foreground"
      >
        <span className="tabular-nums">{maxLength - characterCount}</span>{" "}
        characters left
      </p>
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

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "flex min-h-16 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80",
        className,
      )}
      {...props}
    />
  )
}

export default TextareaCharacterCount