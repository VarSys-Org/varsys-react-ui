"use client"

import React from "react"
import { cn } from "@/lib/cn"

const progressBarVariants = {
  default: {
    background: "bg-primary/20",
    bar: "bg-primary",
  },
  neutral: {
    background: "bg-gray-200 dark:bg-gray-500/40",
    bar: "bg-gray-500 dark:bg-gray-500",
  },
  warning: {
    background: "bg-amber-200 dark:bg-amber-500/30",
    bar: "bg-amber-500 dark:bg-amber-500",
  },
  error: {
    background: "bg-red-200 dark:bg-red-500/30",
    bar: "bg-red-500 dark:bg-red-500",
  },
  success: {
    background: "bg-emerald-200 dark:bg-emerald-500/30",
    bar: "bg-emerald-500 dark:bg-emerald-500",
  },
} as const

export type ProgressBarVariant = keyof typeof progressBarVariants

export interface ProgressBarProps extends React.HTMLProps<HTMLDivElement> {
  value?: number
  max?: number
  showAnimation?: boolean
  label?: string
  variant?: ProgressBarVariant
}

export const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    {
      value = 0,
      max = 100,
      label,
      showAnimation = false,
      variant = "default",
      className,
      ...props
    },
    forwardedRef,
  ) => {
    const safeValue = Math.min(max, Math.max(value, 0))
    const { background, bar } = progressBarVariants[variant]
    return (
      <div
        ref={forwardedRef}
        className={cn("flex w-full items-center", className)}
        role="progressbar"
        aria-label="Progress bar"
        aria-valuenow={value}
        aria-valuemax={max}
        {...props}
      >
        <div className={cn("relative flex h-2 w-full items-center rounded-full", background)}>
          <div
            className={cn(
              "h-full flex-col rounded-full",
              bar,
              showAnimation && "transform-gpu transition-all duration-300 ease-in-out",
            )}
            style={{
              width: max ? `${(safeValue / max) * 100}%` : `${safeValue}%`,
            }}
          />
        </div>
        {label ? (
          <span className="ml-2 whitespace-nowrap text-sm font-medium leading-none text-foreground">
            {label}
          </span>
        ) : null}
      </div>
    )
  },
)

ProgressBar.displayName = "ProgressBar"
