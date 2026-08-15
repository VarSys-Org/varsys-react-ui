"use client"

import * as React from "react"
import { cn } from "@/lib/cn"
import { Check } from "lucide-react"

export interface CheckboxCardsProps
  extends React.HTMLAttributes<HTMLDivElement> {
  disabled?: boolean
  layout?: "stack" | "grid"
  orientation?: "horizontal" | "vertical"
  value?: string[]
  onValueChange?: (value: string[]) => void
}

const CheckboxCardsContext = React.createContext<{
  selected: Set<string>
  disabled?: boolean
  toggle: (value: string) => void
}>({ selected: new Set(), toggle: () => {} })

const layoutClasses = {
  stack: "flex",
  grid: "grid grid-cols-1 sm:grid-cols-2",
} as const

const orientationClasses = {
  horizontal: "flex-row",
  vertical: "flex-col",
} as const

export const CheckboxCards = React.forwardRef<
  HTMLDivElement,
  CheckboxCardsProps
>(
  (
    {
      disabled,
      layout = "grid",
      orientation = "vertical",
      value = [],
      onValueChange,
      className,
      children,
      ...props
    },
    forwardedRef,
  ) => {
    const selected = React.useMemo(() => new Set(value), [value])

    const toggle = React.useCallback(
      (itemValue: string) => {
        if (disabled) return
        const next = new Set(selected)
        if (next.has(itemValue)) {
          next.delete(itemValue)
        } else {
          next.add(itemValue)
        }
        onValueChange?.(Array.from(next))
      },
      [disabled, selected, onValueChange],
    )

    const contextValue = React.useMemo(
      () => ({ selected, disabled, toggle }),
      [selected, disabled, toggle],
    )

    return (
      <CheckboxCardsContext.Provider value={contextValue}>
        <div
          ref={forwardedRef}
          data-slot="checkbox-cards"
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
      </CheckboxCardsContext.Provider>
    )
  },
)

CheckboxCards.displayName = "CheckboxCards"

export interface CheckboxCardsItemProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  value: string
  disabled?: boolean
}

export const CheckboxCardsItem = React.forwardRef<
  HTMLButtonElement,
  CheckboxCardsItemProps
>(({ value, disabled, className, children, ...props }, forwardedRef) => {
  const { selected, disabled: groupDisabled, toggle } =
    React.useContext(CheckboxCardsContext)

  const isChecked = selected.has(value)
  const isDisabled = disabled || groupDisabled

  return (
    <button
      ref={forwardedRef}
      type="button"
      role="checkbox"
      aria-checked={isChecked}
      data-slot="checkbox-cards-item"
      data-checked={isChecked || undefined}
      data-disabled={isDisabled || undefined}
      disabled={isDisabled}
      onClick={() => toggle(value)}
      className={cn(
        "group relative flex w-full items-start gap-3 rounded-lg border p-4 text-left text-sm shadow-xs transition outline-none",
        "bg-card text-card-foreground",
        "border-border",
        isChecked && "border-primary",
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

CheckboxCardsItem.displayName = "CheckboxCardsItem"

export interface CheckboxCardsContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const CheckboxCardsContent = React.forwardRef<
  HTMLDivElement,
  CheckboxCardsContentProps
>(({ className, ...props }, forwardedRef) => {
  return (
    <div
      ref={forwardedRef}
      data-slot="checkbox-cards-content"
      className={cn("grid gap-1", className)}
      {...props}
    />
  )
})

CheckboxCardsContent.displayName = "CheckboxCardsContent"

export interface CheckboxCardsIndicatorProps
  extends React.HTMLAttributes<HTMLSpanElement> {}

export const CheckboxCardsIndicator = React.forwardRef<
  HTMLSpanElement,
  CheckboxCardsIndicatorProps
>(({ className, ...props }, forwardedRef) => {
  return (
    <span
      ref={forwardedRef}
      data-slot="checkbox-cards-indicator"
      className={cn(
        "flex size-5 shrink-0 items-center justify-center rounded-[4px] border transition-colors",
        "border-border",
        "group-data-checked:border-primary group-data-checked:bg-primary group-data-checked:text-primary-foreground",
        className,
      )}
      {...props}
    >
      <Check className="size-3.5 opacity-0 transition-opacity group-data-checked:opacity-100" />
    </span>
  )
})

CheckboxCardsIndicator.displayName = "CheckboxCardsIndicator"

export default CheckboxCards
