import * as React from "react"

import { cn } from "@/lib/utils"

export interface NeoAccordionItem {
  /** Unique identifier for the item. */
  value: string
  /** Heading shown in the item trigger. */
  title: React.ReactNode
  /** Content revealed when the item is open. */
  content: React.ReactNode
}

export interface NeoAccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items: NeoAccordionItem[]
  /** Accordion mode: allow a single open item or multiple. */
  type?: "single" | "multiple"
  /** Default open values (uncontrolled). */
  defaultValue?: string[]
  /** Controlled open values. */
  value?: string[]
  /** Callback fired when the open values change. */
  onValueChange?: (values: string[]) => void
}

function NeoAccordion({
  className,
  items,
  type = "single",
  defaultValue,
  value: controlledValue,
  onValueChange,
  ...props
}: NeoAccordionProps) {
  const [internalValue, setInternalValue] = React.useState<string[]>(
    () => defaultValue ?? []
  )
  const isControlled = controlledValue !== undefined
  const openValues = isControlled ? controlledValue : internalValue

  const toggle = (itemValue: string) => {
    const isOpen = openValues.includes(itemValue)
    let next: string[]
    if (type === "single") {
      next = isOpen ? [] : [itemValue]
    } else {
      next = isOpen
        ? openValues.filter((v) => v !== itemValue)
        : [...openValues, itemValue]
    }
    if (isControlled) {
      onValueChange?.(next)
    } else {
      setInternalValue(next)
    }
  }

  return (
    <div className={cn("space-y-3", className)} {...props}>
      {items.map((item) => {
        const isOpen = openValues.includes(item.value)
        return (
          <details
            key={item.value}
            open={isOpen}
            className="group [&_summary::-webkit-details-marker]:hidden"
          >
            <summary
              onClick={(event) => {
                event.preventDefault()
                toggle(item.value)
              }}
              className="flex cursor-pointer items-center justify-between gap-4 border-2 border-foreground bg-background px-4 py-3 text-foreground shadow-[4px_4px_0_0_var(--foreground)] transition-all hover:bg-yellow-200 focus:bg-yellow-200 focus:outline-none"
            >
              <span className="font-semibold">{item.title}</span>
              <svg
                aria-hidden="true"
                className={cn(
                  "size-5 shrink-0 transition-transform duration-150",
                  isOpen && "-rotate-180"
                )}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <div className="p-4">
              <p className="text-foreground">{item.content}</p>
            </div>
          </details>
        )
      })}
    </div>
  )
}

export { NeoAccordion }
