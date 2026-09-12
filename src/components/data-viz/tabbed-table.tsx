"use client"

import * as React from "react"

import { cn } from "@/lib/cn"

export type TabbedTableStatusTone =
  | "success"
  | "info"
  | "warning"
  | "danger"
  | "neutral"

export interface TabbedTableItem {
  label: React.ReactNode
  value: React.ReactNode
  status?: React.ReactNode
  statusTone?: TabbedTableStatusTone
}

export interface TabbedTableTab {
  label: string
  heading: React.ReactNode
  items: TabbedTableItem[]
}

export interface TabbedTableProps
  extends React.HTMLAttributes<HTMLDivElement> {
  tabs: TabbedTableTab[]
  title?: string
  description?: React.ReactNode
  defaultValue?: number
  onTabChange?: (index: number) => void
  statusTones?: Record<string, TabbedTableStatusTone>
}

const DEFAULT_STATUS_TONES: Record<string, TabbedTableStatusTone> = {
  good: "success",
  great: "success",
  normal: "info",
  bad: "danger",
}

const TONE_STYLES: Record<TabbedTableStatusTone, string> = {
  success: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  info: "bg-primary/10 text-primary",
  warning: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  danger: "bg-destructive/10 text-destructive",
  neutral: "bg-muted text-muted-foreground",
}

export function TabbedTable({
  tabs,
  title,
  description,
  defaultValue = 0,
  onTabChange,
  statusTones = DEFAULT_STATUS_TONES,
  className,
  ...props
}: TabbedTableProps) {
  const [internalTab, setInternalTab] = React.useState(defaultValue)
  const activeTab = Math.min(Math.max(internalTab, 0), tabs.length - 1)
  const current = tabs[activeTab]
  const hasStatus = current.items.some((item) => item.status !== undefined)

  const selectTab = (index: number) => {
    if (index === activeTab) return
    setInternalTab(index)
    onTabChange?.(index)
  }

  const toneFor = (item: TabbedTableItem): TabbedTableStatusTone => {
    if (item.statusTone) return item.statusTone
    if (typeof item.status === "string") {
      const tone = statusTones[item.status.toLowerCase()]
      if (tone) return tone
    }
    return "neutral"
  }

  return (
    <div className={cn("mx-auto max-w-screen-xl px-4 md:px-8", className)} {...props}>
      {title ? (
        <div className="max-w-lg">
          <h3 className="text-xl font-bold text-foreground sm:text-2xl">{title}</h3>
          {description ? (
            <p className="mt-2 text-muted-foreground">{description}</p>
          ) : null}
        </div>
      ) : null}

      <div className="mt-12 overflow-x-auto text-sm">
        <div
          role="tablist"
          aria-label="Reports"
          className="flex w-full items-center gap-x-3 overflow-x-auto border-b border-border"
        >
          {tabs.map((tab, index) => {
            const isActive = index === activeTab
            return (
              <button
                key={tab.label}
                role="tab"
                type="button"
                aria-selected={isActive}
                aria-controls={`tabbed-table-panel-${index + 1}`}
                id={`tabbed-table-tab-${index + 1}`}
                onClick={() => selectTab(index)}
                className={cn(
                  "-mb-px border-b-2 py-2 transition-colors",
                  isActive
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                )}
              >
                <span
                  className={cn(
                    "block rounded-lg px-4 py-2.5 font-medium transition-colors",
                    !isActive && "hover:bg-muted"
                  )}
                >
                  {tab.label}
                </span>
              </button>
            )
          })}
        </div>

        <div
          id={`tabbed-table-panel-${activeTab + 1}`}
          role="tabpanel"
          aria-labelledby={`tabbed-table-tab-${activeTab + 1}`}
        >
          <table className="w-full table-auto text-left">
            <thead className="border-b border-border font-medium text-muted-foreground">
              <tr>
                <th className="w-9/12 py-4 pr-6">{current.heading}</th>
                <th className="py-4 pr-6">Value</th>
                {hasStatus ? (
                  <th className="py-4 pr-6">Status</th>
                ) : null}
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-muted-foreground">
              {current.items.map((item, index) => {
                const tone = toneFor(item)
                return (
                  <tr key={index}>
                    <td className="whitespace-nowrap py-4 pr-6 text-foreground">
                      {item.label}
                    </td>
                    <td className="whitespace-nowrap py-4 pr-6 font-medium text-primary">
                      {item.value}
                    </td>
                    {hasStatus ? (
                      <td className="whitespace-nowrap py-4 pr-6">
                        {item.status !== undefined ? (
                          <span
                            className={cn(
                              "inline-flex rounded-full px-3 py-1 text-xs font-semibold",
                              TONE_STYLES[tone]
                            )}
                          >
                            {item.status}
                          </span>
                        ) : null}
                      </td>
                    ) : null}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

TabbedTable.displayName = "TabbedTable"

export default TabbedTable