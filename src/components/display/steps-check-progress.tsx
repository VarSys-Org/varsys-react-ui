import { Check, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/cn"

export interface StepsCheckProgressStep {
  label: string
  icon?: LucideIcon
}

export interface StepsCheckProgressProps {
  /** Ordered list of steps. */
  steps: StepsCheckProgressStep[]
  /** Index (0-based) of the current step. Steps up to and including it render as done. */
  current?: number
  /** Optional explicit progress percentage (0-100). Defaults to `current + 1` of total steps. */
  progress?: number
  className?: string
}

export function StepsCheckProgress({
  steps,
  current = 0,
  progress,
  className,
}: StepsCheckProgressProps) {
  const count = steps.length
  const fill = progress ?? Math.min(Math.round(((current + 1) / count) * 100), 100)

  return (
    <div className={cn("w-full", className)}>
      <h2 className="sr-only">Steps</h2>

      <ol
        className="grid pb-3 text-sm font-medium"
        style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}
      >
        {steps.map((step, index) => {
          const Icon = step.icon
          const done = index <= current
          const align =
            index === 0
              ? "justify-start"
              : index === count - 1
                ? "justify-end"
                : "justify-center"

          return (
            <li key={step.label} className={cn("relative flex", align)}>
              <span
                className={cn(
                  "absolute -bottom-4 left-1/2 flex size-5 -translate-x-1/2 items-center justify-center rounded-full",
                  done ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground",
                )}
                aria-hidden="true"
              >
                <Check className="size-3" strokeWidth={3} />
              </span>

              {Icon ? (
                <Icon
                  aria-hidden="true"
                  className={cn("size-6 sm:hidden", done ? "text-primary" : "text-muted-foreground")}
                />
              ) : null}

              <span
                className={cn(
                  "truncate",
                  Icon ? "hidden sm:inline-block" : "inline-block",
                  done ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {step.label}
              </span>
            </li>
          )
        })}
      </ol>

      <div
        role="progressbar"
        aria-label="Steps progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(fill)}
        className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted"
      >
        <div
          className="h-full rounded-full bg-primary transition-all duration-500"
          style={{ width: `${fill}%` }}
        />
      </div>
    </div>
  )
}

export default StepsCheckProgress