"use client"

import React from "react"
import { cn } from "@/lib/utils"

export interface TabNavigationItem {
  label: React.ReactNode
  value?: string
  href?: string
  disabled?: boolean
  onClick?: () => void
}

export interface TabNavigationProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  items: TabNavigationItem[]
  defaultValue?: string
  value?: string
  onChange?: (value: string) => void
  className?: string
}

export const TabNavigation = React.forwardRef<HTMLDivElement, TabNavigationProps>(
  (
    { items, defaultValue, value, onChange, className, ...props },
    forwardedRef,
  ) => {
    const [internalValue, setInternalValue] = React.useState(
      defaultValue ?? items[0]?.value ?? "0",
    )
    const activeValue = value ?? internalValue

    const handleSelect = (item: TabNavigationItem, index: number) => {
      if (item.disabled) return
      const next = item.value ?? String(index)
      if (value === undefined) setInternalValue(next)
      item.onClick?.()
      onChange?.(next)
    }

    return (
      <div
        ref={forwardedRef}
        className={cn(
          "flex items-center justify-start overflow-x-auto whitespace-nowrap border-b [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          "border-border",
          className,
        )}
        {...props}
      >
        {items.map((item, index) => {
          const itemValue = item.value ?? String(index)
          const isActive = activeValue === itemValue
          const content = (
            <span
              className={cn(
                "-mb-px flex items-center justify-center whitespace-nowrap border-b-2 border-transparent px-3 pb-2 text-sm font-medium transition-all",
                "text-muted-foreground",
                "hover:text-foreground hover:border-border",
                isActive && "border-primary text-primary",
                item.disabled &&
                  "pointer-events-none text-muted-foreground/40",
              )}
            >
              {item.label}
            </span>
          )

          return (
            <div key={itemValue} className="flex shrink-0 select-none">
              {item.href ? (
                <a
                  href={item.href}
                  aria-disabled={item.disabled}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "group relative flex shrink-0 select-none items-center justify-center",
                    item.disabled && "pointer-events-none",
                  )}
                  onClick={(e) => {
                    e.preventDefault()
                    handleSelect(item, index)
                  }}
                >
                  {content}
                </a>
              ) : (
                <button
                  type="button"
                  disabled={item.disabled}
                  aria-current={isActive ? "page" : undefined}
                  className="group relative flex shrink-0 select-none items-center justify-center"
                  onClick={() => handleSelect(item, index)}
                >
                  {content}
                </button>
              )}
            </div>
          )
        })}
      </div>
    )
  },
)

TabNavigation.displayName = "TabNavigation"
