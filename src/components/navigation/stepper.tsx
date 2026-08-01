"use client"

import React from "react"
import { cn } from "@/lib/utils"

export interface StepperItem {
  title: React.ReactNode
  description?: React.ReactNode
  icon?: React.ReactNode
}

export interface StepperProps
  extends Omit<React.HTMLAttributes<HTMLUListElement>, "onChange"> {
  items: StepperItem[]
  currentStep?: number
  defaultValue?: number
  onChange?: (step: number) => void
  orientation?: "horizontal" | "vertical"
  variant?: "default" | "white" | "solid"
  linear?: boolean
  className?: string
}

const circleVariant = {
  default: "bg-surface font-medium text-surface-foreground",
  white: "bg-background border border-border font-medium text-foreground",
  solid: "bg-secondary font-medium text-secondary-foreground",
}

const circleActive = {
  default: "bg-primary text-primary-foreground",
  white: "border-primary text-primary",
  solid: "bg-primary text-primary-foreground",
}

const circleCompleted = {
  default: "bg-emerald-500 text-white",
  white: "bg-emerald-500 text-white border-emerald-500",
  solid: "bg-emerald-500 text-white",
}

export const Stepper = React.forwardRef<HTMLUListElement, StepperProps>(
  (
    {
      items,
      currentStep,
      defaultValue = 0,
      onChange,
      orientation = "horizontal",
      variant = "default",
      linear = false,
      className,
      ...props
    },
    forwardedRef,
  ) => {
    const [internalStep, setInternalStep] = React.useState(defaultValue)
    const activeStep = currentStep ?? internalStep
    const isVertical = orientation === "vertical"

    const goTo = (step: number) => {
      if (linear && step > activeStep + 1) return
      const clamped = Math.min(Math.max(step, 0), items.length - 1)
      if (currentStep === undefined) setInternalStep(clamped)
      onChange?.(clamped)
    }

    return (
      <ul
        ref={forwardedRef}
        className={cn(
          "relative flex",
          isVertical ? "flex-col gap-y-2" : "flex-row gap-x-2",
          className,
        )}
        {...props}
      >
        {items.map((item, index) => {
          const isActive = index === activeStep
          const isCompleted = index < activeStep

          const circleClass = isCompleted
            ? cn(circleVariant[variant], circleCompleted[variant])
            : isActive
              ? cn(circleVariant[variant], circleActive[variant])
              : circleVariant[variant]

          const circle = (
            <span
              className={cn(
                "flex size-7 shrink-0 items-center justify-center rounded-full text-xs transition-colors",
                circleClass,
              )}
            >
              {isCompleted ? (
                <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : item.icon ? (
                item.icon
              ) : (
                index + 1
              )}
            </span>
          )

          const connector = (
            <div
              className={cn(
                "bg-border",
                isVertical ? "mt-2 w-px flex-1" : "ms-2 h-px w-full flex-1",
                "group-last:hidden",
              )}
            />
          )

          if (isVertical) {
            return (
              <li key={index} className="group flex gap-x-4">
                <div className="flex flex-col items-center">
                  {circle}
                  {index < items.length - 1 && connector}
                </div>
                <div className={cn("grow pb-6 group-last:pb-0")}>
                  <button
                    type="button"
                    disabled={linear && index > activeStep + 1}
                    className={cn(
                      "block text-left text-sm font-medium text-foreground disabled:cursor-not-allowed",
                      isActive && "text-primary",
                      !isActive && !isCompleted && "text-muted-foreground",
                    )}
                    onClick={() => goTo(index)}
                  >
                    {item.title}
                  </button>
                  {item.description && (
                    <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                  )}
                </div>
              </li>
            )
          }

          return (
            <li
              key={index}
              className={cn(
                "group flex shrink basis-0 flex-1 items-center gap-x-2",
              )}
            >
              <div className="flex items-center gap-x-2">
                <button
                  type="button"
                  disabled={linear && index > activeStep + 1}
                  className={cn(
                    "flex items-center gap-x-2 disabled:cursor-not-allowed",
                  )}
                  onClick={() => goTo(index)}
                >
                  {circle}
                  <span
                    className={cn(
                      "text-sm font-medium",
                      isActive && "text-primary",
                      !isActive && !isCompleted && "text-muted-foreground",
                      isCompleted && "text-foreground",
                    )}
                  >
                    {item.title}
                  </span>
                </button>
              </div>
              {index < items.length - 1 && connector}
            </li>
          )
        })}
      </ul>
    )
  },
)

Stepper.displayName = "Stepper"
