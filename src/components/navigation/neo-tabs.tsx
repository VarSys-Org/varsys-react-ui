import * as React from "react"

import { cn } from "@/lib/utils"

export interface NeoTab {
  /** Unique identifier for the tab. */
  value: string
  /** Label shown in the tab trigger. */
  label: React.ReactNode
  /** Content rendered when the tab is active. */
  content: React.ReactNode
}

export interface NeoTabsProps extends React.HTMLAttributes<HTMLDivElement> {
  tabs: NeoTab[]
  /** Controlled active tab value. */
  value?: string
  /** Default active tab value. */
  defaultValue?: string
  /** Callback fired when the active tab changes. */
  onValueChange?: (value: string) => void
}

function NeoTabs({
  className,
  tabs,
  value: controlledValue,
  defaultValue,
  onValueChange,
  ...props
}: NeoTabsProps) {
  const [internalValue, setInternalValue] = React.useState(
    () => defaultValue ?? tabs[0]?.value ?? ""
  )
  const active = controlledValue ?? internalValue
  const activeTab = tabs.find((tab) => tab.value === active)

  const select = (tabValue: string) => {
    if (controlledValue !== undefined) {
      onValueChange?.(tabValue)
    } else {
      setInternalValue(tabValue)
    }
  }

  return (
    <div className={className} {...props}>
      <div className="border-b-2 border-foreground px-2">
        <div role="tablist" className="-mb-0.5 flex">
          {tabs.map((tab) => {
            const isActive = tab.value === active
            return (
              <button
                key={tab.value}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => select(tab.value)}
                className={cn(
                  "px-6 py-2 font-semibold text-foreground transition-colors focus:ring-2 focus:ring-yellow-300 focus:outline-none",
                  isActive
                    ? "border-2 border-foreground bg-yellow-200"
                    : "border-2 border-transparent hover:bg-foreground hover:text-background"
                )}
              >
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>
      <div role="tabpanel" className="mt-4">
        <p className="text-foreground">{activeTab?.content}</p>
      </div>
    </div>
  )
}

export { NeoTabs }
