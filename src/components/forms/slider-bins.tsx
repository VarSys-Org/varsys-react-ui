"use client"

import * as React from "react"

import { cn } from "@/lib/cn"

export interface SliderBin {
  /** Bin label. */
  label?: string
  /** Bin start value. */
  start: number
  /** Bin end value. */
  end: number
  /** Bin height (0-100) used for the histogram bar. */
  count: number
}

export interface SliderBinsProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue"> {
  /** List of histogram bins rendered behind the track. */
  bins: SliderBin[]
  /** Minimum selectable value. */
  min?: number
  /** Maximum selectable value. */
  max?: number
  /** Step between selectable values. */
  step?: number
  /** Controlled value. */
  value?: number
  /** Initial value (uncontrolled). */
  defaultValue?: number
  /** Called when the value changes. */
  onChange?: (value: number) => void
  /** Optional label rendered above the track. */
  label?: string
  /** Formatter applied to the displayed value. */
  formatValue?: (value: number) => string
  /** Show the current value next to the label. */
  showValue?: boolean
  /** Disable the slider. */
  disabled?: boolean
}

export function SliderBins({
  bins,
  min = 0,
  max = 100,
  step = 1,
  value,
  defaultValue,
  onChange,
  label,
  formatValue,
  showValue = false,
  disabled = false,
  className,
  ...props
}: SliderBinsProps) {
  const [internal, setInternal] = React.useState<number>(() =>
    typeof value === "number" ? value : (defaultValue ?? Math.round((min + max) / 2)),
  )

  const current = typeof value === "number" ? value : internal
  const fmt = formatValue ?? ((v: number) => String(v))
  const percent = ((current - min) / (max - min)) * 100

  const maxCount = Math.max(1, ...bins.map((bin) => bin.count))

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const next = Number(event.target.value)
    setInternal(next)
    onChange?.(next)
  }

  return (
    <div data-slot="slider-bins" className={cn("w-full", className)} {...props}>
      {(label || showValue) && (
        <div className="mb-3 flex items-center justify-between gap-2">
          {label && <span className="text-sm font-medium text-foreground">{label}</span>}
          {showValue && (
            <span className="text-sm font-medium text-muted-foreground">{fmt(current)}</span>
          )}
        </div>
      )}

      <div className="relative h-16">
        <div className="absolute inset-x-0 bottom-3 flex h-10 items-end gap-px">
          {bins.map((bin, index) => {
            const binStart = ((bin.start - min) / (max - min)) * 100
            const binEnd = ((bin.end - min) / (max - min)) * 100
            const height = (bin.count / maxCount) * 100
            return (
              <div
                key={index}
                title={bin.label}
                className="flex-1 rounded-sm transition-colors"
                style={{
                  height: `${height}%`,
                  background:
                    percent >= binStart && percent <= binEnd
                      ? "var(--primary)"
                      : "var(--muted)",
                }}
              />
            )
          })}
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={current}
          disabled={disabled}
          onChange={handleChange}
          aria-label={label}
          className={cn(
            "absolute inset-x-0 bottom-0 h-2 w-full appearance-none rounded-full bg-muted",
            "accent-primary",
            "[&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-primary [&::-webkit-slider-thumb]:bg-background",
            "[&::-moz-range-thumb]:size-4 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:border-primary [&::-moz-range-thumb]:bg-background",
            disabled && "cursor-not-allowed opacity-50",
          )}
          style={{
            background: `linear-gradient(to right, var(--primary) 0%, var(--primary) ${percent}%, var(--muted) ${percent}%, var(--muted) 100%)`,
          }}
        />
      </div>
    </div>
  )
}

export default SliderBins
