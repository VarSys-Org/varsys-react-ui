"use client"

import * as React from "react"
import { motion } from "motion/react"

import { cn } from "@/lib/cn"

export interface TabNavItem {
  /** Unique value identifying the tab. */
  value: string
  /** Tab label. */
  label: string
  /** Optional icon rendered before the label. */
  icon?: React.ReactNode
  /** Optional numeric badge rendered after the label. */
  badge?: number
  /** Whether the tab is disabled. */
  disabled?: boolean
}

export interface TabNavProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Tab definitions. */
  items: TabNavItem[]
  /** Controlled active tab value. */
  value?: string
  /** Uncontrolled initial active tab value. */
  defaultValue?: string
  /** Called when the active tab changes. */
  onValueChange?: (value: string) => void
}

export function TabNav({
  items,
  value: controlledValue,
  defaultValue,
  onValueChange,
  className,
  ...props
}: TabNavProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue ?? items[0]?.value)
  const activeValue = controlledValue ?? internalValue

  const select = (item: TabNavItem) => {
    if (item.disabled || activeValue === item.value) return
    if (controlledValue === undefined) setInternalValue(item.value)
    onValueChange?.(item.value)
  }

  return (
    <div
      data-slot="tab-nav"
      role="tablist"
      aria-orientation="horizontal"
      className={cn("inline-flex items-center gap-1 rounded-full bg-muted p-1", className)}
      {...props}
    >
      {items.map((item) => {
        const isActive = activeValue === item.value
        return (
          <button
            key={item.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            disabled={item.disabled}
            onClick={() => select(item)}
            className={cn(
              "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
              isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground",
              item.disabled && "pointer-events-none opacity-50",
            )}
          >
            {isActive && (
              <motion.span
                layoutId="tab-nav-active"
                className="absolute inset-0 rounded-full bg-primary shadow-sm"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10 inline-flex items-center gap-2">
              {item.icon && <span aria-hidden="true">{item.icon}</span>}
              {item.label}
              {typeof item.badge === "number" && (
                <span
                  className={cn(
                    "min-w-5 rounded-full px-1.5 py-0.5 text-center text-xs font-semibold",
                    isActive ? "bg-primary-foreground/20 text-primary-foreground" : "bg-muted-foreground/15 text-muted-foreground",
                  )}
                >
                  {item.badge}
                </span>
              )}
            </span>
          </button>
        )
      })}
    </div>
  )
}

export default TabNav
