"use client"

import * as React from "react"
import { Check, ChevronDown, ChevronRight } from "lucide-react"

import { cn } from "@/lib/cn"

export interface ChevronStep {
  label: React.ReactNode
  description?: React.ReactNode
}

export interface ChevronStepsProps
  extends React.HTMLAttributes<HTMLOListElement> {
  steps: ChevronStep[]
  currentStep?: number
  defaultValue?: number
  onStepChange?: (index: number) => void
  direction?: "horizontal" | "vertical"
  clickable?: boolean
}

export function ChevronSteps({
  steps,
  currentStep,
  defaultValue = 0,
  onStepChange,
  direction = "horizontal",
  clickable = false,
  className,
  ...props
}: ChevronStepsProps) {
  const [internalStep, setInternalStep] = React.useState(defaultValue)
  const activeStep =
    currentStep ?? Math.min(Math.max(internalStep, 0), steps.length - 1)

  const goTo = (index: number) => {
    if (currentStep === undefined) setInternalStep(index)
    onStepChange?.(index)
  }

  const isVertical = direction === "vertical"

  return (
    <ol
      aria-label="Steps"
      className={cn(
        "flex",
        isVertical
          ? "flex-col"
          : "flex-col gap-2 md:flex-row md:items-center md:gap-0",
        className
      )}
      {...props}
    >
      {steps.map((step, index) => {
        const isCompleted = index < activeStep
        const isActive = index === activeStep
        const isLast = index === steps.length - 1

        const circle = (
          <span
            className={cn(
              "flex size-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-medium transition-colors",
              isCompleted
                ? "border-primary bg-primary text-primary-foreground"
                : isActive
                  ? "border-primary text-primary"
                  : "border-border bg-background text-muted-foreground"
            )}
            aria-hidden="true"
          >
            {isCompleted ? (
              <Check className="size-4" strokeWidth={3} />
            ) : (
              index + 1
            )}
          </span>
        )

        const content = (
          <span className="flex items-center gap-3">
            {circle}
            <span className="flex flex-col text-left">
              <span
                className={cn(
                  "text-sm font-medium",
                  isActive
                    ? "text-primary"
                    : isCompleted
                      ? "text-foreground"
                      : "text-muted-foreground"
                )}
              >
                {step.label}
              </span>
              {step.description ? (
                <span className="text-xs text-muted-foreground">
                  {step.description}
                </span>
              ) : null}
            </span>
          </span>
        )

        const connector = !isLast ? (
          <span
            className={cn(
              "shrink-0 text-muted-foreground/60",
              isVertical
                ? "ml-4 mt-2 mb-2"
                : "my-2 ml-12 md:mx-4 md:my-0 md:flex-1 md:text-center"
            )}
            aria-hidden="true"
          >
            <ChevronDown className="size-5 md:hidden" />
            <ChevronRight className="hidden size-5 md:inline-block" />
          </span>
        ) : null

        return (
          <li
            key={index}
            aria-current={isActive ? "step" : undefined}
            className={cn(
              "flex",
              isVertical ? "flex-col" : "flex-col md:flex-1 md:flex-row md:items-center",
              !isVertical && isLast && "md:flex-none"
            )}
          >
            {clickable ? (
              <button
                type="button"
                onClick={() => goTo(index)}
                className="rounded-lg transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
              >
                {content}
              </button>
            ) : (
              content
            )}
            {connector}
          </li>
        )
      })}
    </ol>
  )
}

ChevronSteps.displayName = "ChevronSteps"

export default ChevronSteps