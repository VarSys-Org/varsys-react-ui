"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/cn"

export interface CollapseProps {
  /** Text shown on the toggle trigger. */
  title?: React.ReactNode
  /** Content revealed when expanded. */
  children?: React.ReactNode
  /** Whether the panel starts expanded. */
  defaultOpen?: boolean
  /** Controlled open state. */
  open?: boolean
  /** Callback fired when open state changes. */
  onOpenChange?: (open: boolean) => void
  /** Render an arbitrary trigger node instead of the default button. */
  renderTrigger?: (props: {
    open: boolean
    toggle: () => void
    "aria-expanded": boolean
    "aria-controls": string
  }) => React.ReactNode
  className?: string
  contentClassName?: string
  triggerClassName?: string
}

export function Collapse({
  title = "Collapse",
  children,
  defaultOpen = false,
  open: openProp,
  onOpenChange,
  renderTrigger,
  className,
  contentClassName,
  triggerClassName,
}: CollapseProps) {
  const isControlled = openProp !== undefined
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen)

  const open = isControlled ? openProp : uncontrolledOpen

  const setOpen = (next: boolean) => {
    if (!isControlled) setUncontrolledOpen(next)
    onOpenChange?.(next)
  }

  const toggle = () => setOpen(!open)

  const contentId = React.useId()

  const triggerProps = {
    open,
    toggle,
    "aria-expanded": open,
    "aria-controls": contentId,
  }

  return (
    <div className={cn("w-full", className)}>
      {renderTrigger ? (
        renderTrigger(triggerProps)
      ) : (
        <button
          type="button"
          onClick={toggle}
          aria-expanded={open}
          aria-controls={contentId}
          className={cn(
            "py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring/30 disabled:opacity-50 disabled:pointer-events-none",
            triggerClassName
          )}
        >
          {title}
          <ChevronDownIcon
            className={cn(
              "shrink-0 size-4 transition-transform duration-300",
              open && "rotate-180"
            )}
          />
        </button>
      )}
      <div
        id={contentId}
        role="region"
        aria-labelledby={undefined}
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-in-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          contentClassName
        )}
      >
        <div className="overflow-hidden">
          <div className="pt-5">{children}</div>
        </div>
      </div>
    </div>
  )
}

Collapse.displayName = "Collapse"

export default Collapse