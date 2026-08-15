import { Heart, Star } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/cn"

export interface RatingsProps {
  defaultValue?: number
  value?: number
  onChange?: (value: number) => void
  count?: number
  readOnly?: boolean
  symbol?: "star" | "heart"
  size?: "sm" | "md" | "lg"
  className?: string
}

const symbolSizes = {
  sm: "size-4",
  md: "size-5",
  lg: "size-6",
}

export function Ratings({
  defaultValue = 0,
  value,
  onChange,
  count = 5,
  readOnly = false,
  symbol = "star",
  size = "md",
  className,
}: RatingsProps) {
  const [internalValue, setInternalValue] = useState(defaultValue)
  const currentValue = value ?? internalValue
  const [hoverValue, setHoverValue] = useState<number | null>(null)
  const displayedValue = hoverValue ?? currentValue
  const Icon = symbol === "heart" ? Heart : Star

  const handleSelect = (index: number) => {
    if (readOnly) return
    setInternalValue(index)
    onChange?.(index)
  }

  return (
    <div
      className={cn("flex items-center gap-1", className)}
      onMouseLeave={() => setHoverValue(null)}
      role={readOnly ? "img" : "radiogroup"}
      aria-label={`Rating: ${currentValue} out of ${count}`}
    >
      {Array.from({ length: count }, (_, i) => {
        const index = i + 1
        const filled = index <= displayedValue
        return (
          <button
            key={index}
            aria-label={`Rate ${index} out of ${count}`}
            aria-checked={currentValue === index}
            className={cn(
              symbolSizes[size],
              "rounded-full transition-colors",
              readOnly && "pointer-events-none",
              !readOnly && "hover:scale-110 active:scale-95",
              filled
                ? "text-yellow-400 dark:text-yellow-600"
                : "text-muted-foreground/40 hover:text-yellow-400",
              symbol === "heart" && filled && "text-red-500 dark:text-red-500"
            )}
            disabled={readOnly}
            onClick={() => handleSelect(index)}
            onMouseEnter={() => !readOnly && setHoverValue(index)}
            role={readOnly ? undefined : "radio"}
            type="button"
          >
            <Icon className={cn("size-full")} fill={filled ? "currentColor" : "none"} />
          </button>
        )
      })}
      {!readOnly && <span className="ml-1 text-xs text-muted-foreground">{currentValue}/{count}</span>}
    </div>
  )
}
