import { Minus, Plus } from "lucide-react"
import { cn } from "@/lib/utils"

export interface QuantityInputProps {
  value?: number
  defaultValue?: number
  min?: number
  max?: number
  step?: number
  onChange?: (value: number) => void
  className?: string
  disabled?: boolean
  label?: string
}

export function QuantityInput({
  value,
  defaultValue = 1,
  min = 0,
  max = 99,
  step = 1,
  onChange,
  className,
  disabled = false,
  label,
}: QuantityInputProps) {
  const clamp = (next: number) =>
    Math.min(max, Math.max(min, Number.isNaN(next) ? defaultValue : next))

  const internalValue = value ?? defaultValue
  const handleChange = (next: number) => {
    const clamped = clamp(next)
    onChange?.(clamped)
  }

  return (
    <div
      className={cn(
        "flex items-center rounded-md border border-input bg-background",
        disabled && "pointer-events-none opacity-50",
        className
      )}
    >
      <label className="sr-only" htmlFor="quantity-input">
        {label ?? "Quantity"}
      </label>
      <button
        aria-label="Decrease quantity"
        className="flex size-10 items-center justify-center text-muted-foreground transition hover:opacity-75 disabled:pointer-events-none disabled:opacity-40"
        disabled={disabled || internalValue <= min}
        onClick={() => handleChange(internalValue - step)}
        type="button"
      >
        <Minus className="size-4" />
      </button>
      <input
        aria-label="Quantity"
        className="h-10 w-16 border-transparent text-center text-sm outline-none [-moz-appearance:textfield] focus:ring-0 [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
        disabled={disabled}
        id="quantity-input"
        max={max}
        min={min}
        onChange={(e) => handleChange(Number(e.target.value))}
        type="number"
        value={internalValue}
      />
      <button
        aria-label="Increase quantity"
        className="flex size-10 items-center justify-center text-muted-foreground transition hover:opacity-75 disabled:pointer-events-none disabled:opacity-40"
        disabled={disabled || internalValue >= max}
        onClick={() => handleChange(internalValue + step)}
        type="button"
      >
        <Plus className="size-4" />
      </button>
    </div>
  )
}
