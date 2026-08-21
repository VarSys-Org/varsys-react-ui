import type { HTMLAttributes } from "react"
import { forwardRef } from "react"
import { LayoutGrid, Rows3 } from "lucide-react"
import { cn } from "@/lib/cn"

export type Density = "list" | "grid"

export interface DensityControlProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  value?: Density
  defaultValue?: Density
  onChange?: (value: Density) => void
}

export const DensityControl = forwardRef<HTMLDivElement, DensityControlProps>(
  ({ className, value, defaultValue = "grid", onChange, ...props }, ref) => {
    const controlled = value !== undefined
    const resolved = controlled ? value! : defaultValue

    const options: Array<{ value: Density; label: string; Icon: typeof Rows3 }> = [
      { value: "list", label: "List view", Icon: Rows3 },
      { value: "grid", label: "Grid view", Icon: LayoutGrid },
    ]

    return (
      <div
        ref={ref}
        role="radiogroup"
        aria-label="Density"
        className={cn(
          "inline-flex items-center gap-0.5 rounded-lg bg-muted p-0.5",
          className,
        )}
        {...props}
      >
        {options.map(({ value: option, label, Icon }) => {
          const selected = resolved === option
          return (
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={selected}
              aria-label={label}
              title={label}
              disabled={selected}
              onClick={() => onChange?.(option)}
              className={cn(
                "flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring",
                selected &&
                  "bg-background text-foreground shadow-sm dark:bg-input",
              )}
            >
              <Icon className="size-4" aria-hidden="true" />
            </button>
          )
        })}
      </div>
    )
  },
)

DensityControl.displayName = "DensityControl"

export default DensityControl
