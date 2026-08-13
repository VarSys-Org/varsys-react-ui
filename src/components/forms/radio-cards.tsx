"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Circle } from "lucide-react"

export interface RadioCardsProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  disabled?: boolean
  layout?: "stack" | "grid"
  orientation?: "horizontal" | "vertical"
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
}

const RadioCardsContext = React.createContext<{
  value: string | null
  disabled?: boolean
  select: (value: string) => void
}>({ value: null, select: () => {} })

const layoutClasses = {
  stack: "flex",
  grid: "grid grid-cols-1 sm:grid-cols-2",
} as const

const orientationClasses = {
  horizontal: "flex-row",
  vertical: "flex-col",
} as const

export const RadioCards = React.forwardRef<HTMLDivElement, RadioCardsProps>(
  (
    {
      disabled,
      layout = "grid",
      orientation = "vertical",
      value: controlledValue,
      defaultValue,
      onValueChange,
      className,
      children,
      ...props
    },
    forwardedRef,
  ) => {
    const isControlled = controlledValue !== undefined
    const [uncontrolled, setUncontrolled] = React.useState<string | null>(
      defaultValue ?? null,
    )

    const value = isControlled ? controlledValue : uncontrolled

    const select = React.useCallback(
      (itemValue: string) => {
        if (disabled) return
        if (isControlled) {
          onValueChange?.(itemValue)
        } else {
          setUncontrolled(itemValue)
          onValueChange?.(itemValue)
        }
      },
      [disabled, isControlled, onValueChange],
    )

    const contextValue = React.useMemo(
      () => ({ value: value ?? null, disabled, select }),
      [value, disabled, select],
    )

    return (
      <RadioCardsContext.Provider value={contextValue}>
        <div
          ref={forwardedRef}
          data-slot="radio-cards"
          className={cn(
            layoutClasses[layout],
            orientationClasses[orientation],
            layout === "stack" && "flex-col",
            "gap-2",
            className,
          )}
          {...props}
        >
          {children}
        </div>
      </RadioCardsContext.Provider>
    )
  },
)

RadioCards.displayName = "RadioCards"

export interface RadioCardsItemProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  value: string
  disabled?: boolean
}

export const RadioCardsItem = React.forwardRef<
  HTMLButtonElement,
  RadioCardsItemProps
>(({ value, disabled, className, children, ...props }, forwardedRef) => {
  const { value: selectedValue, disabled: groupDisabled, select } =
    React.useContext(RadioCardsContext)

  const isChecked = selectedValue === value
  const isDisabled = disabled || groupDisabled

  return (
    <button
      ref={forwardedRef}
      type="button"
      role="radio"
      aria-checked={isChecked}
      data-slot="radio-cards-item"
      data-checked={isChecked || undefined}
      data-disabled={isDisabled || undefined}
      disabled={isDisabled}
      onClick={() => select(value)}
      className={cn(
        "group relative flex w-full items-start gap-3 rounded-lg border p-4 text-left text-sm shadow-xs transition outline-none",
        "bg-card text-card-foreground",
        "border-border",
        "data-checked:border-primary",
        "hover:bg-accent hover:text-accent-foreground",
        "focus-visible:ring-3 focus-visible:ring-ring/50",
        isDisabled &&
          "cursor-not-allowed opacity-50 hover:bg-card hover:text-card-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
})

RadioCardsItem.displayName = "RadioCardsItem"

export interface RadioCardsContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const RadioCardsContent = React.forwardRef<
  HTMLDivElement,
  RadioCardsContentProps
>(({ className, ...props }, forwardedRef) => {
  return (
    <div
      ref={forwardedRef}
      data-slot="radio-cards-content"
      className={cn("grid gap-1", className)}
      {...props}
    />
  )
})

RadioCardsContent.displayName = "RadioCardsContent"

export interface RadioCardsIndicatorProps
  extends React.HTMLAttributes<HTMLSpanElement> {}

export const RadioCardsIndicator = React.forwardRef<
  HTMLSpanElement,
  RadioCardsIndicatorProps
>(({ className, ...props }, forwardedRef) => {
  return (
    <span
      ref={forwardedRef}
      data-slot="radio-cards-indicator"
      className={cn(
        "flex size-5 shrink-0 items-center justify-center rounded-full border transition-colors",
        "border-border",
        "group-data-checked:border-primary",
        className,
      )}
      {...props}
    >
      <Circle className="size-2.5 fill-current text-primary opacity-0 transition-opacity group-data-checked:opacity-100" />
    </span>
  )
})

RadioCardsIndicator.displayName = "RadioCardsIndicator"

export default RadioCards
