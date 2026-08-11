"use client"

import React from "react"
import { cn } from "@/lib/utils"

export type DeltaType =
  | "increase"
  | "moderateIncrease"
  | "decrease"
  | "moderateDecrease"
  | "unchanged"

export type BadgeDeltaSize = "xs" | "sm" | "md" | "lg" | "xl"

const deltaColors: Record<DeltaType, string> = {
  increase: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400",
  moderateIncrease: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400",
  decrease: "bg-red-500/15 text-red-700 dark:text-red-400",
  moderateDecrease: "bg-red-500/15 text-red-700 dark:text-red-400",
  unchanged: "bg-amber-500/15 text-amber-700 dark:text-amber-400",
}

const sizeClasses: Record<BadgeDeltaSize, string> = {
  xs: "px-2 py-0.5 text-xs",
  sm: "px-2.5 py-1 text-sm",
  md: "px-3 py-1.5 text-sm",
  lg: "px-3.5 py-1.5 text-lg",
  xl: "px-4 py-2 text-xl",
}

const iconSizeClasses: Record<BadgeDeltaSize, string> = {
  xs: "size-3",
  sm: "size-3",
  md: "size-3",
  lg: "size-4",
  xl: "size-5",
}

export interface BadgeDeltaProps extends React.HTMLAttributes<HTMLSpanElement> {
  deltaType?: DeltaType
  isIncreasePositive?: boolean
  size?: BadgeDeltaSize
  tooltip?: string
  iconOnly?: boolean
}

export const BadgeDelta = React.forwardRef<HTMLSpanElement, BadgeDeltaProps>(
  (
    {
      deltaType = "increase",
      isIncreasePositive = true,
      size = "sm",
      tooltip,
      iconOnly = false,
      className,
      children,
      ...props
    },
    forwardedRef,
  ) => {
    let effectiveDelta = deltaType
    if (deltaType === "increase" && !isIncreasePositive) effectiveDelta = "decrease"
    if (deltaType === "decrease" && !isIncreasePositive) effectiveDelta = "increase"
    if (deltaType === "moderateIncrease" && !isIncreasePositive)
      effectiveDelta = "moderateDecrease"
    if (deltaType === "moderateDecrease" && !isIncreasePositive)
      effectiveDelta = "moderateIncrease"

    const arrow =
      effectiveDelta === "increase" || effectiveDelta === "moderateIncrease"
        ? "M13 7h8m0 0v8m0-8-8 8-4-4-6 6"
        : effectiveDelta === "decrease" || effectiveDelta === "moderateDecrease"
          ? "M13 17h8m0 0v-8m0 8-8-8-4 4-6-6"
          : "M13 17h8m0 0v-8m0 8-8-8-4 4-6-6"

    return (
      <span
        ref={forwardedRef}
        title={tooltip}
        className={cn(
          "inline-flex w-fit shrink-0 items-center gap-1 rounded-full font-medium whitespace-nowrap",
          deltaColors[effectiveDelta],
          iconOnly ? "justify-center" : sizeClasses[size],
          className,
        )}
        {...props}
      >
        <svg
          className={cn("shrink-0", iconSizeClasses[size])}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d={arrow} />
        </svg>
        {!iconOnly && children !== undefined ? children : null}
      </span>
    )
  },
)

BadgeDelta.displayName = "BadgeDelta"
