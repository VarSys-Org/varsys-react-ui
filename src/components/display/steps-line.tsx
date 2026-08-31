import { cn } from "@/lib/cn"

export interface StepsLineProps {
  /** Ordered step titles. */
  steps: string[]
  /** 1-based index of the current step. Earlier segments render as completed. */
  current?: number
  className?: string
}

export function StepsLine({ steps, current = 1, className }: StepsLineProps) {
  return (
    <ul aria-label="Steps" className={cn("items-center text-muted-foreground md:flex", className)}>
      {steps.map((step, index) => {
        const stepNumber = index + 1
        const completed = current > stepNumber

        return (
          <li
            key={step}
            aria-current={current === stepNumber ? "step" : undefined}
            className="flex flex-1 md:items-center"
          >
            <div
              className={cn(
                "flex flex-1 items-center gap-x-3 md:block",
                index !== 0 && "md:space-x-10",
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "block h-24 w-1 md:h-1 md:w-full",
                  completed ? "bg-primary" : "bg-muted",
                )}
              />

              <div className="md:mt-2">
                <p className={cn("text-sm", completed && "text-primary")}>
                  Step {stepNumber}
                </p>
                <h3 className="mt-1 font-medium text-foreground">{step}</h3>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default StepsLine