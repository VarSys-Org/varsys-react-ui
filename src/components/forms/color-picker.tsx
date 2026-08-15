import * as React from "react"
import { cn } from "@/lib/cn"

export interface ColorPickerProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "value" | "onChange"> {
  label?: string
  value?: string
  onChange?: (value: string) => void
  className?: string
  inputClassName?: string
}

export function ColorPicker({
  label,
  value = "#2563eb",
  onChange,
  className,
  inputClassName,
  id,
  ...other
}: ColorPickerProps) {
  const inputId = id ?? "hs-color-input"

  return (
    <div className={className}>
      {label ? (
        <label
          htmlFor={inputId}
          className="mb-2 block text-sm font-medium text-foreground"
        >
          {label}
        </label>
      ) : null}
      <input
        type="color"
        id={inputId}
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        title="Choose your color"
        className={cn(
          "block h-10 w-14 cursor-pointer rounded-lg border border-border bg-background p-1 disabled:pointer-events-none disabled:opacity-50",
          inputClassName
        )}
        {...other}
      />
    </div>
  )
}

export default ColorPicker
