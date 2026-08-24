"use client"

import * as React from "react"

import { cn } from "@/lib/cn"

export interface RangeSliderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue"> {
  /** Minimum selectable value. */
  min?: number
  /** Maximum selectable value. */
  max?: number
  /** Step between selectable values. */
  step?: number
  /** Controlled minimum value. */
  minValue?: number
  /** Controlled maximum value. */
  maxValue?: number
  /** Initial minimum value (uncontrolled). */
  defaultMinValue?: number
  /** Initial maximum value (uncontrolled). */
  defaultMaxValue?: number
  /** Called when either handle changes. */
  onChange?: (values: { min: number; max: number }) => void
  /** Optional label rendered above the track. */
  label?: string
  /** Show formatted values beside the label. */
  showValues?: boolean
  /** Formatter applied to displayed values. */
  formatValue?: (value: number) => string
  /** Disable the slider. */
  disabled?: boolean
  /** Data-testid friendly slot name. */
  "data-slot"?: string
}

export function RangeSlider({
  min = 0,
  max = 100,
  step = 1,
  minValue,
  maxValue,
  defaultMinValue,
  defaultMaxValue,
  onChange,
  label,
  showValues = false,
  formatValue,
  disabled = false,
  className,
  ...props
}: RangeSliderProps) {
  const [internalMin, setInternalMin] = React.useState<number>(() =>
    typeof minValue === "number" ? minValue : (defaultMinValue ?? Math.round((min + max) * 0.25)),
  )
  const [internalMax, setInternalMax] = React.useState<number>(() =>
    typeof maxValue === "number" ? maxValue : (defaultMaxValue ?? Math.round((min + max) * 0.75)),
  )

  const currentMin = typeof minValue === "number" ? minValue : internalMin
  const currentMax = typeof maxValue === "number" ? maxValue : internalMax

  const trackRef = React.useRef<HTMLDivElement>(null)
  const draggingRef = React.useRef<"min" | "max" | null>(null)

  const clamp = (value: number) => Math.min(max, Math.max(min, value))
  const stepValue = (value: number) => {
    const steps = Math.round((value - min) / step)
    return clamp(min + steps * step)
  }

  const percent = (value: number) => ((value - min) / (max - min)) * 100

  const emit = React.useCallback(
    (nextMin: number, nextMax: number) => {
      onChange?.({ min: nextMin, max: nextMax })
    },
    [onChange],
  )

  const handlePointer = React.useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (disabled) return
      const rect = event.currentTarget.getBoundingClientRect()
      const ratio = (event.clientX - rect.left) / rect.width
      const raw = min + ratio * (max - min)
      const value = stepValue(raw)
      if (draggingRef.current === "min") {
        const nextMin = Math.min(value, currentMax - step)
        setInternalMin(nextMin)
        emit(nextMin, currentMax)
      } else if (draggingRef.current === "max") {
        const nextMax = Math.max(value, currentMin + step)
        setInternalMax(nextMax)
        emit(currentMin, nextMax)
      }
    },
    [disabled, min, max, step, stepValue, currentMin, currentMax, emit],
  )

  const stopDragging = React.useCallback(() => {
    draggingRef.current = null
  }, [])

  React.useEffect(() => {
    window.addEventListener("pointerup", stopDragging)
    return () => window.removeEventListener("pointerup", stopDragging)
  }, [stopDragging])

  const leftPercent = percent(currentMin)
  const rightPercent = percent(currentMax)
  const fmt = formatValue ?? ((value: number) => String(value))

  return (
    <div data-slot={props["data-slot"] ?? "range-slider"} className={cn("w-full", className)}>
      {(label || showValues) && (
        <div className="mb-3 flex items-center justify-between gap-2">
          {label && (
            <span className="text-sm font-medium text-foreground">{label}</span>
          )}
          {showValues && (
            <span className="text-sm font-medium text-muted-foreground">
              {fmt(currentMin)} – {fmt(currentMax)}
            </span>
          )}
        </div>
      )}
      <div
        ref={trackRef}
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={currentMin}
        aria-valuetext={`${fmt(currentMin)} to ${fmt(currentMax)}`}
        onPointerDown={(event) => {
          const rect = event.currentTarget.getBoundingClientRect()
          const ratio = (event.clientX - rect.left) / rect.width
          const raw = min + ratio * (max - min)
          const value = stepValue(raw)
          if (Math.abs(value - currentMin) <= Math.abs(value - currentMax)) {
            draggingRef.current = "min"
          } else {
            draggingRef.current = "max"
          }
          handlePointer(event)
        }}
        onPointerMove={(event) => {
          if (draggingRef.current) handlePointer(event)
        }}
        className={cn(
          "relative h-2 w-full cursor-pointer touch-none select-none rounded-full bg-muted",
          disabled && "cursor-not-allowed opacity-50",
        )}
      >
        <div
          className="absolute inset-y-0 rounded-full bg-primary"
          style={{ left: `${leftPercent}%`, width: `${rightPercent - leftPercent}%` }}
        />
        <div
          role="button"
          tabIndex={disabled ? -1 : 0}
          aria-label="Minimum value"
          onPointerDown={(event) => {
            if (disabled) return
            event.stopPropagation()
            draggingRef.current = "min"
            handlePointer(event)
          }}
          onKeyDown={(event) => {
            if (disabled) return
            if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
              const next = Math.max(min, currentMin - step)
              setInternalMin(next)
              emit(next, currentMax)
            } else if (event.key === "ArrowRight" || event.key === "ArrowUp") {
              const next = Math.min(currentMax - step, currentMin + step)
              setInternalMin(next)
              emit(next, currentMax)
            }
          }}
          className={cn(
            "absolute top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 cursor-grab rounded-full border-4 border-primary bg-background shadow-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/50 active:cursor-grabbing",
          )}
          style={{ left: `${leftPercent}%` }}
        />
        <div
          role="button"
          tabIndex={disabled ? -1 : 0}
          aria-label="Maximum value"
          onPointerDown={(event) => {
            if (disabled) return
            event.stopPropagation()
            draggingRef.current = "max"
            handlePointer(event)
          }}
          onKeyDown={(event) => {
            if (disabled) return
            if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
              const next = Math.max(currentMin + step, currentMax - step)
              setInternalMax(next)
              emit(currentMin, next)
            } else if (event.key === "ArrowRight" || event.key === "ArrowUp") {
              const next = Math.min(max, currentMax + step)
              setInternalMax(next)
              emit(currentMin, next)
            }
          }}
          className={cn(
            "absolute top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 cursor-grab rounded-full border-4 border-primary bg-background shadow-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/50 active:cursor-grabbing",
          )}
          style={{ left: `${rightPercent}%` }}
        />
      </div>
    </div>
  )
}

export default RangeSlider
