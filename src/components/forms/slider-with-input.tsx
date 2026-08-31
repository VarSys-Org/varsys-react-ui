"use client"

import * as React from "react"
import { useCallback, useState } from "react"
import { RotateCcw } from "lucide-react"

import { cn } from "@/lib/cn"

export interface SliderWithInputProps {
  /** Label above the row. Defaults to "Temperature". */
  label?: string
  minValue?: number
  maxValue?: number
  /** Value the reset button restores. Defaults to minValue. */
  defaultValue?: number
  /** Initial value. Defaults to defaultValue. */
  initialValue?: number
  /** Slider step. Defaults to 0.01. */
  step?: number
  /** Called whenever the committed value changes. */
  onValueChange?: (value: number) => void
  className?: string
}

export function SliderWithInput({
  label = "Temperature",
  minValue = 0,
  maxValue = 100,
  defaultValue = minValue,
  initialValue = defaultValue,
  step = 0.01,
  onValueChange,
  className,
}: SliderWithInputProps) {
  const {
    sliderValue,
    inputValues,
    validateAndUpdateValue,
    handleInputChange,
    handleSliderChange,
    resetToDefault,
    showReset,
  } = useSliderWithInput({
    minValue,
    maxValue,
    defaultValue: [defaultValue],
    initialValue: [initialValue],
  })

  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex items-center justify-between gap-2">
        <Label>{label}</Label>
        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label="Reset"
            title="Reset to default"
            onClick={resetToDefault}
            className={cn(
              "inline-flex size-7 shrink-0 items-center justify-center rounded-lg transition-opacity outline-none select-none hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
              showReset ? "opacity-100" : "opacity-0",
            )}
          >
            <RotateCcw aria-hidden="true" className="size-4" />
          </button>
          <Input
            aria-label="Enter value"
            className="h-7 w-12 px-2 py-0"
            inputMode="decimal"
            onBlur={() => validateAndUpdateValue(inputValues[0] ?? "", 0)}
            onChange={(e) => handleInputChange(e, 0)}
            onKeyDown={(e) => {
              if (e.key === "Enter") validateAndUpdateValue(inputValues[0] ?? "", 0)
            }}
            type="text"
            value={inputValues[0]}
          />
        </div>
      </div>
      <Slider
        aria-label={label}
        min={minValue}
        max={maxValue}
        step={step}
        value={sliderValue[0] ?? minValue}
        onValueChange={(value) => {
          handleSliderChange([value])
          onValueChange?.(value)
        }}
      />
    </div>
  )
}

function useSliderWithInput({
  minValue = 0,
  maxValue = 100,
  initialValue = [minValue],
  defaultValue = [minValue],
}: {
  minValue?: number
  maxValue?: number
  initialValue?: number[]
  defaultValue?: number[]
}) {
  const [sliderValue, setSliderValue] = useState(initialValue)
  const [inputValues, setInputValues] = useState(initialValue.map(String))

  const showReset =
    sliderValue.length === defaultValue.length &&
    !sliderValue.every((value, index) => value === defaultValue[index])

  const validateAndUpdateValue = useCallback(
    (rawValue: string, index: number) => {
      if (rawValue === "" || rawValue === "-") {
        const newInputValues = [...inputValues]
        newInputValues[index] = "0"
        setInputValues(newInputValues)
        const newSliderValues = [...sliderValue]
        newSliderValues[index] = 0
        setSliderValue(newSliderValues)
        return
      }
      const numValue = Number.parseFloat(rawValue)
      if (Number.isNaN(numValue)) {
        const newInputValues = [...inputValues]
        newInputValues[index] = sliderValue[index]?.toString()
        setInputValues(newInputValues)
        return
      }
      let clampedValue = Math.min(maxValue, Math.max(minValue, numValue))
      if (sliderValue.length > 1) {
        clampedValue =
          index === 0
            ? Math.min(clampedValue, sliderValue[1])
            : Math.max(clampedValue, sliderValue[0])
      }
      const newSliderValues = [...sliderValue]
      newSliderValues[index] = clampedValue
      setSliderValue(newSliderValues)
      const newInputValues = [...inputValues]
      newInputValues[index] = clampedValue.toString()
      setInputValues(newInputValues)
    },
    [sliderValue, inputValues, minValue, maxValue],
  )

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const newValue = e.target.value
      if (newValue === "" || /^-?\d*\.?\d*$/.test(newValue)) {
        const newInputValues = [...inputValues]
        newInputValues[index] = newValue
        setInputValues(newInputValues)
      }
    },
    [inputValues],
  )

  const handleSliderChange = useCallback((newValue: number[]) => {
    setSliderValue(newValue)
    setInputValues(newValue.map(String))
  }, [])

  const resetToDefault = useCallback(() => {
    setSliderValue(defaultValue)
    setInputValues(defaultValue.map(String))
  }, [defaultValue])

  return {
    handleInputChange,
    handleSliderChange,
    inputValues,
    resetToDefault,
    showReset,
    sliderValue,
    validateAndUpdateValue,
  }
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
        "placeholder:text-muted-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-2xl border bg-transparent px-3 py-1 text-sm shadow-xs transition-colors outline-none disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      {...props}
    />
  )
}

function Slider({
  value,
  min = 0,
  max = 100,
  step = 1,
  onValueChange,
  "aria-label": ariaLabel,
  className,
}: {
  value: number
  min?: number
  max?: number
  step?: number
  onValueChange?: (value: number) => void
  "aria-label"?: string
  className?: string
}) {
  const pct = max !== min ? ((value - min) / (max - min)) * 100 : 0
  return (
    <input
      type="range"
      aria-label={ariaLabel}
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onValueChange?.(Number(e.target.value))}
      className={cn(
        "h-1.5 w-full cursor-pointer appearance-none rounded-full outline-none",
        "[&::-webkit-slider-thumb]:size-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-ring [&::-webkit-slider-thumb]:bg-background [&::-webkit-slider-thumb]:shadow-sm [&::-webkit-slider-thumb]:hover:ring-3 [&::-webkit-slider-thumb]:hover:ring-ring/50 [&::-webkit-slider-thumb]:focus-visible:ring-3 [&::-webkit-slider-thumb]:focus-visible:ring-ring/50",
        "[&::-moz-range-thumb]:size-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-ring [&::-moz-range-thumb]:bg-background",
        "[&::-moz-range-track]:bg-transparent",
        className,
      )}
      style={{
        background: `linear-gradient(to right, var(--primary) 0%, var(--primary) ${pct}%, var(--muted) ${pct}%, var(--muted) 100%)`,
      }}
    />
  )
}

export default SliderWithInput