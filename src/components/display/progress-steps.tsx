import type { HTMLAttributes } from "react"
import { forwardRef } from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/cn"

export interface ProgressStep {
  /** Unique identifier for the step. */
  value: string | number
  /** Label rendered below / beside the step. */
  label: string
  /** Optional description rendered for the active step. */
  description?: string
}

export interface ProgressStepsProps
  extends HTMLAttributes<HTMLOListElement> {
  steps: ProgressStep[]
  /** Index (0-based) of the current step. */
  current?: number
  /** Render the tracker vertically instead of horizontally. */
  orientation?: "horizontal" | "vertical"
  /** Whether to show the step labels. */
  showLabels?: boolean
}

export const ProgressSteps = forwardRef<HTMLOListElement, ProgressStepsProps>(
  (
    {
      className,
      steps,
      current = 0,
      orientation = "horizontal",
      showLabels = true,
      ...props
    },
    ref,
  ) => {
    return (
      <ol
        ref={ref}
        className={cn(
          "flex w-full",
          orientation === "horizontal"
            ? "items-start"
            : "flex-col items-start gap-4",
          className,
        )}
        {...props}
      >
        {steps.map((step, index) => {
          const completed = index < current
          const active = index === current

          return (
            <li
              key={String(step.value)}
              className={cn(
                "flex items-start",
                orientation === "horizontal" &&
                  "flex-1 last:flex-none",
                orientation === "vertical" && "w-full",
              )}
            >
              <div className="flex items-center">
                <span
                  className={cn(
                    "flex size-8 shrink-0 items-center justify-center rounded-full border text-sm font-medium transition-colors",
                    completed &&
                      "border-primary bg-primary text-primary-foreground",
                    active &&
                      "border-primary text-primary",
                    !completed && !active &&
                      "border-border bg-muted text-muted-foreground",
                  )}
                >
                  {completed ? (
                    <Check className="size-4" aria-hidden="true" />
                  ) : (
                    index + 1
                  )}
                </span>
                {orientation === "horizontal" ? (
                  <span
                    className={cn(
                      "mx-2 h-px w-full",
                      index < steps.length - 1 &&
                        (completed ? "bg-primary" : "bg-border"),
                      index === steps.length - 1 && "w-0",
                    )}
                  />
                ) : (
                  index < steps.length - 1 && (
                    <span
                      className={cn(
                        "ml-4 h-full w-px",
                        completed ? "bg-primary" : "bg-border",
                      )}
                    />
                  )
                )}
              </div>
              {showLabels && (
                <div
                  className={cn(
                    "flex flex-col",
                    orientation === "horizontal" && "ml-2",
                    orientation === "vertical" && "ml-3",
                  )}
                >
                  <span
                    className={cn(
                      "text-sm font-medium",
                      active
                        ? "text-foreground"
                        : completed
                          ? "text-foreground"
                          : "text-muted-foreground",
                    )}
                  >
                    {step.label}
                  </span>
                  {step.description && (
                    <span className="mt-0.5 text-xs text-muted-foreground">
                      {step.description}
                    </span>
                  )}
                </div>
              )}
            </li>
          )
        })}
      </ol>
    )
  },
)

ProgressSteps.displayName = "ProgressSteps"

export default ProgressSteps
