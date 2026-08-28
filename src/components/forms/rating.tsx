"use client"

import * as React from "react"
import { Star } from "lucide-react"

import { cn } from "@/lib/cn"

const SIZES = {
  sm: "size-4",
  md: "size-5",
  lg: "size-7",
} as const

export interface RatingProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  value: number
  /** Pass it to get an interactive input; leave it out for a read-only display (fractions such as 3.7 are fine). */
  onChange?: (value: number) => void
  max?: number
  /** Allows half-star steps while interactive. */
  allowHalf?: boolean
  size?: keyof typeof SIZES
  /** Accessible name of the radiogroup. */
  label?: string
}

function StarGlyph({
  fraction,
  sizeClass,
}: {
  fraction: number
  sizeClass: string
}) {
  return (
    <span className={cn("relative inline-block", sizeClass)}>
      <Star aria-hidden="true" className={cn("text-muted-foreground/40", sizeClass)} />
      <span
        aria-hidden="true"
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${fraction * 100}%` }}
      >
        <Star className={cn("fill-primary text-primary", sizeClass)} />
      </span>
    </span>
  )
}

export const Rating = React.forwardRef<HTMLDivElement, RatingProps>(
  (
    {
      value,
      onChange,
      max = 5,
      allowHalf = false,
      size = "md",
      label = "Rating",
      className,
      ...props
    },
    ref,
  ) => {
    const [hover, setHover] = React.useState<number | null>(null)
    const buttonRefs = React.useRef<(HTMLButtonElement | null)[]>([])
    const sizeClass = SIZES[size]
    const interactive = onChange !== undefined
    const step = allowHalf ? 0.5 : 1
    const display = hover ?? value

    if (!interactive) {
      return (
        <div
          aria-label={`${value} out of ${max}`}
          className={cn("inline-flex items-center gap-0.5", className)}
          ref={ref}
          role="img"
          {...props}
        >
          {Array.from({ length: max }, (_, i) => (
            <StarGlyph
              fraction={Math.min(Math.max(value - i, 0), 1)}
              key={i}
              sizeClass={sizeClass}
            />
          ))}
        </div>
      )
    }

    const starValue = (i: number, e: React.MouseEvent<HTMLButtonElement>) => {
      if (!allowHalf) return i + 1
      const rect = e.currentTarget.getBoundingClientRect()
      return e.clientX - rect.left < rect.width / 2 ? i + 0.5 : i + 1
    }

    const setValue = (next: number) => {
      const clamped = Math.min(Math.max(next, step), max)
      onChange(clamped)
      buttonRefs.current[Math.ceil(clamped) - 1]?.focus()
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowRight" || e.key === "ArrowUp") {
        e.preventDefault()
        setValue(value + step)
      } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
        e.preventDefault()
        setValue(value - step)
      } else if (e.key === "Home") {
        e.preventDefault()
        setValue(step)
      } else if (e.key === "End") {
        e.preventDefault()
        setValue(max)
      }
    }

    const focusIndex = value > 0 ? Math.ceil(value) - 1 : 0

    return (
      <div
        aria-label={label}
        className={cn("inline-flex items-center gap-0.5", className)}
        onKeyDown={handleKeyDown}
        onMouseLeave={() => setHover(null)}
        ref={ref}
        role="radiogroup"
        {...props}
      >
        {Array.from({ length: max }, (_, i) => {
          const checked = Math.ceil(value) === i + 1
          return (
            <button
              aria-checked={checked}
              aria-label={
                checked && value % 1 !== 0
                  ? `${value} of ${max}`
                  : `${i + 1} of ${max}`
              }
              className={cn(
                "cursor-pointer rounded-sm transition-transform hover:scale-110 motion-reduce:transition-none",
                "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:outline-none",
              )}
              key={i}
              onClick={(e) => onChange(starValue(i, e))}
              onMouseMove={(e) => setHover(starValue(i, e))}
              ref={(el) => {
                buttonRefs.current[i] = el
              }}
              role="radio"
              tabIndex={i === focusIndex ? 0 : -1}
              type="button"
            >
              <StarGlyph
                fraction={Math.min(Math.max(display - i, 0), 1)}
                sizeClass={sizeClass}
              />
            </button>
          )
        })}
      </div>
    )
  },
)

Rating.displayName = "Rating"

export default Rating