"use client"

import * as React from "react"

import { cn } from "@/lib/cn"

type TabVariant = "line" | "solid"

interface TabContextValue {
  value: string
  setValue: (value: string) => void
  variant: TabVariant
}

const TabContext = React.createContext<TabContextValue | null>(null)

function useTabContext(consumerName: string) {
  const context = React.useContext(TabContext)
  if (!context) {
    throw new Error(`\`${consumerName}\` must be used within \`TabPanels\``)
  }
  return context
}

interface TabPanelsProps extends React.ComponentProps<"div"> {
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  variant?: TabVariant
}

function TabPanels({
  defaultValue = "",
  value,
  onValueChange,
  variant = "line",
  className,
  children,
  ...props
}: TabPanelsProps) {
  const isControlled = value !== undefined
  const [internal, setInternal] = React.useState(defaultValue)

  const current = isControlled ? value : internal

  const setValue = React.useCallback(
    (next: string) => {
      if (!isControlled) setInternal(next)
      onValueChange?.(next)
    },
    [isControlled, onValueChange],
  )

  const contextValue = React.useMemo<TabContextValue>(
    () => ({ value: current, setValue, variant }),
    [current, setValue, variant],
  )

  return (
    <TabContext.Provider value={contextValue}>
      <div
        data-slot="tab-panels"
        data-variant={variant}
        className={cn("w-full", className)}
        {...props}
      >
        {children}
      </div>
    </TabContext.Provider>
  )
}

interface TabPanelProps extends React.ComponentProps<"div"> {
  value: string
}

function TabPanel({ value, className, ...props }: TabPanelProps) {
  const context = useTabContext("TabPanel")

  if (context.value !== value) return null

  return (
    <div
      role="tabpanel"
      data-slot="tab-panel"
      data-state="active"
      className={cn(
        "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      )}
      {...props}
    />
  )
}

export { TabContext, TabPanel, TabPanels, useTabContext }
export type { TabPanelsProps, TabPanelProps, TabVariant }