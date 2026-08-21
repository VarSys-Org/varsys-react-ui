import type { HTMLAttributes } from "react"
import { forwardRef, useId } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/cn"

const segmentedControlRootVariants = cva(
  "inline-flex items-center gap-0.5 rounded-lg bg-muted p-0.5",
  {
    variants: {
      size: {
        default: "h-8",
        sm: "h-7",
        lg: "h-9",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
)

const segmentedControlItemVariants = cva(
  "relative inline-flex shrink-0 cursor-pointer select-none items-center justify-center whitespace-nowrap rounded-md px-2.5 text-sm font-medium text-muted-foreground transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      size: {
        default: "px-2.5 text-sm",
        sm: "px-2 text-xs",
        lg: "px-3 text-sm",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
)

export interface SegmentedControlProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof segmentedControlRootVariants> {
  /** Items to display. Each item may be a string, number, or an object with a label and value. */
  items: Array<string | { label: string; value: string | number }>
  /** The currently selected value (controlled). */
  value?: string | number
  /** The initially selected value (uncontrolled). */
  defaultValue?: string | number
  /** Called when the user selects a new value. */
  onValueChange?: (value: string | number) => void
}

export const SegmentedControl = forwardRef<HTMLDivElement, SegmentedControlProps>(
  (
    {
      className,
      size,
      items,
      value,
      defaultValue,
      onValueChange,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId()
    const controlled = value !== undefined

    const normalized = items.map((item) =>
      typeof item === "string" || typeof item === "number"
        ? { label: String(item), value: item }
        : { label: item.label, value: item.value },
    )

    const resolvedValue =
      controlled
        ? value
        : (defaultValue ?? normalized[0]?.value)

    return (
      <div
        ref={ref}
        role="radiogroup"
        className={cn(segmentedControlRootVariants({ size }), className)}
        {...props}
      >
        {normalized.map((item) => {
          const selected = resolvedValue === item.value
          const id = `${generatedId}-${String(item.value)}`
          return (
            <button
              key={String(item.value)}
              id={id}
              type="button"
              role="radio"
              aria-checked={selected}
              disabled={selected}
              onClick={() => onValueChange?.(item.value)}
              className={cn(
                segmentedControlItemVariants({ size }),
                selected &&
                  "bg-background text-foreground shadow-sm dark:bg-input",
              )}
            >
              {item.label}
            </button>
          )
        })}
      </div>
    )
  },
)

SegmentedControl.displayName = "SegmentedControl"

export default SegmentedControl
