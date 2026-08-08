"use client"

import React from "react"
import { cn } from "@/lib/utils"

export interface RangeInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  min?: number
  max?: number
  step?: number
  value?: number
  showValue?: boolean
  label?: string
  filled?: boolean
  underline?: boolean
}

export function RangeInput({
  min = 0,
  max = 100,
  step = 1,
  value,
  defaultValue,
  showValue = false,
  label,
  filled = false,
  underline = false,
  className,
  onChange,
  ...props
}: RangeInputProps) {
  const [internal, setInternal] = React.useState<number>(() => {
    if (typeof value === "number") return value
    if (typeof defaultValue === "number") return defaultValue
    return Math.round((min + max) / 2)
  })

  const current = typeof value === "number" ? value : internal

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInternal(Number(event.target.value))
    onChange?.(event)
  }

  const backgroundStyle = filled
    ? {
        background: `linear-gradient(to right, var(--primary) 0%, var(--primary) ${
          ((current - min) / (max - min)) * 100
        }%, var(--muted) ${
          ((current - min) / (max - min)) * 100
        }%, var(--muted) 100%)`,
      }
    : undefined

  return (
    <label className={cn("block w-full", className)}>
      {(label || showValue) && (
        <span className="flex items-center justify-between gap-2">
          {label && (
            <span className="block text-sm font-medium text-foreground">
              {label}
            </span>
          )}
          {showValue && (
            <span className="text-sm font-medium text-muted-foreground">
              {current}
            </span>
          )}
        </span>
      )}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={current}
        onChange={handleChange}
        className={cn(
          "mt-3 h-2 w-full appearance-none rounded-full bg-muted",
          "accent-primary",
          "[&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-primary [&::-webkit-slider-thumb]:bg-background",
          "[&::-moz-range-thumb]:size-4 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:border-primary [&::-moz-range-thumb]:bg-background",
          underline &&
            "rounded-none border-b border-border bg-transparent [&::-webkit-slider-thumb]:border-0 [&::-webkit-slider-thumb]:rounded-none [&::-webkit-slider-thumb]:bg-primary",
          className
        )}
        style={backgroundStyle}
        {...props}
      />
    </label>
  )
}
