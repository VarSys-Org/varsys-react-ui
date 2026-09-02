"use client"

import { cva } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/cn"
import { useTabContext, type TabVariant } from "./tab-panels"

const tabListVariants = cva("", {
  variants: {
    variant: {
      line: "flex items-center justify-start gap-4 border-b border-border",
      solid:
        "inline-flex items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "line",
  },
})

interface TabListProps extends React.ComponentProps<"div"> {}

function TabList({ className, ...props }: TabListProps) {
  const context = useTabContext("TabList")
  const variant: TabVariant = context.variant

  return (
    <div
      role="tablist"
      data-slot="tab-list"
      data-variant={variant}
      className={cn(tabListVariants({ variant }), className)}
      {...props}
    />
  )
}

const tabVariants = cva(
  "items-center justify-center whitespace-nowrap text-sm font-medium transition-all data-disabled:pointer-events-none data-disabled:opacity-50",
  {
    variants: {
      variant: {
        line: "-mb-px inline-flex border-b-2 border-transparent px-3 pb-2 text-muted-foreground hover:text-foreground data-[state=active]:border-primary data-[state=active]:text-foreground",
        solid:
          "inline-flex rounded-sm px-3 py-1 text-muted-foreground ring-1 ring-inset ring-transparent hover:text-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      },
    },
    defaultVariants: {
      variant: "line",
    },
  },
)

interface TabProps extends React.ComponentProps<"button"> {
  value: string
}

function Tab({ value, className, ...props }: TabProps) {
  const context = useTabContext("Tab")
  const isActive = context.value === value

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      data-slot="tab"
      data-state={isActive ? "active" : "inactive"}
      onClick={() => context.setValue(value)}
      className={cn(tabVariants({ variant: context.variant }), className)}
      {...props}
    />
  )
}

export { Tab, TabList }
export type { TabListProps, TabProps }