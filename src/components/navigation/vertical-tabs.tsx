"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/cn"

export interface VerticalTab {
  value: string
  content?: React.ReactNode
}

export interface VerticalTabsProps
  extends React.HTMLAttributes<HTMLDivElement> {
  tabs: VerticalTab[]
  defaultValue?: string
  variant?: "bordered" | "soft"
}

export function VerticalTabs({
  tabs,
  defaultValue,
  variant = "bordered",
  className,
}: VerticalTabsProps) {
  const [selectedTab, setSelectedTab] = React.useState(
    defaultValue ?? tabs[0]?.value ?? "",
  )

  return (
    <div className={cn("mx-auto max-w-screen-xl px-4 md:px-8", className)}>
      <div
        className="hidden flex-col items-start justify-start gap-y-3 text-sm sm:flex"
        role="tablist"
        aria-label="Manage your account"
      >
        {tabs.map((tab) => (
          <button
            key={tab.value}
            type="button"
            role="tab"
            aria-selected={selectedTab === tab.value}
            onClick={() => setSelectedTab(tab.value)}
            className={cn(
              "group outline-none",
              variant === "bordered" &&
                "border-l-2 border-transparent px-1.5 text-muted-foreground",
              variant === "bordered" &&
                selectedTab === tab.value &&
                "border-indigo-600 text-indigo-600",
              variant === "soft" &&
                cn(
                  "rounded-lg px-3 py-1.5 font-medium text-muted-foreground duration-150 hover:bg-muted hover:text-foreground",
                  selectedTab === tab.value &&
                    "bg-muted text-foreground shadow-sm",
                ),
            )}
          >
            {variant === "bordered" ? (
              <div
                className={cn(
                  "rounded-lg px-3 py-1.5 font-medium duration-150 group-hover:bg-muted group-hover:text-indigo-600",
                  selectedTab === tab.value && "text-indigo-600",
                )}
              >
                {tab.value}
              </div>
            ) : (
              tab.value
            )}
          </button>
        ))}
      </div>
      <div className="relative text-muted-foreground sm:hidden">
        <ChevronDown className="pointer-events-none absolute right-2 inset-y-0 my-auto h-5 w-5" />
        <select
          value={selectedTab}
          className={cn(
            "w-full appearance-none rounded-lg border bg-transparent px-3 py-2 text-sm shadow-sm outline-none",
            variant === "bordered" ? "focus:border-indigo-600" : "focus:border-foreground",
          )}
          onChange={(e) => setSelectedTab(e.target.value)}
        >
          {tabs.map((tab) => (
            <option key={tab.value} value={tab.value}>
              {tab.value}
            </option>
          ))}
        </select>
      </div>
      {tabs.map((tab) => (
        <div key={tab.value} hidden={selectedTab !== tab.value} className="py-6">
          {tab.content ?? (
            <p className="text-xs leading-normal text-muted-foreground">
              This is <b className="text-foreground">{tab.value}</b> Tab
            </p>
          )}
        </div>
      ))}
    </div>
  )
}

export default VerticalTabs
