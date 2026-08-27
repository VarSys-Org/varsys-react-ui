"use client"

import * as React from "react"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/cn"

export interface OffcanvasProps {
  /** Whether the panel is open. */
  open: boolean
  /** Callback fired to change the open state. */
  onOpenChange: (open: boolean) => void
  /** Panel title shown in the header. */
  title?: React.ReactNode
  /** Panel content. */
  children?: React.ReactNode
  /** Which edge the panel slides in from. */
  side?: "left" | "right" | "top" | "bottom"
  /** Show a backdrop behind the panel. */
  withBackdrop?: boolean
  /** Close the panel when the backdrop is clicked. */
  closeOnBackdrop?: boolean
  /** Close the panel when Escape is pressed. */
  closeOnEscape?: boolean
  /** Panel width when anchored to the left/right. */
  width?: string
  /** Panel height when anchored to the top/bottom. */
  height?: string
  /** Custom class for the header. */
  headerClassName?: string
  /** Custom class for the body. */
  bodyClassName?: string
}

export function Offcanvas({
  open,
  onOpenChange,
  title,
  children,
  side = "right",
  withBackdrop = true,
  closeOnBackdrop = true,
  closeOnEscape = true,
  width = "max-w-xs w-full",
  height = "max-h-80 w-full",
  headerClassName,
  bodyClassName,
}: OffcanvasProps) {
  const panelRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!open || !closeOnEscape) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false)
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [open, closeOnEscape, onOpenChange])

  React.useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  const transform = React.useMemo(() => {
    switch (side) {
      case "left":
        return open ? "translate-x-0" : "-translate-x-full"
      case "right":
        return open ? "translate-x-0" : "translate-x-full"
      case "top":
        return open ? "translate-y-0" : "-translate-y-full"
      case "bottom":
        return open ? "translate-y-0" : "translate-y-full"
    }
  }, [open, side])

  const positioning = React.useMemo(() => {
    switch (side) {
      case "left":
        return "top-0 inset-y-0 start-0 border-e"
      case "right":
        return "top-0 inset-y-0 end-0 border-s"
      case "top":
        return "top-0 inset-x-0 border-b"
      case "bottom":
        return "bottom-0 inset-x-0 border-t"
    }
  }, [side])

  return (
    <>
      {withBackdrop && (
        <div
          aria-hidden="true"
          onClick={() => closeOnBackdrop && onOpenChange(false)}
          className={cn(
            "fixed inset-0 z-50 bg-black/50 transition-opacity duration-300",
            open ? "opacity-100" : "pointer-events-none opacity-0"
          )}
        />
      )}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={typeof title === "string" ? title : undefined}
        tabIndex={-1}
        className={cn(
          "fixed z-[60] bg-card text-card-foreground shadow-lg transition-transform duration-300 transform",
          positioning,
          transform,
          side === "left" || side === "right" ? width : height
        )}
      >
        <div
          className={cn(
            "flex justify-between items-center py-3 px-4 border-b border-border",
            headerClassName
          )}
        >
          <h3 className="font-semibold text-foreground">{title}</h3>
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            aria-label="Close"
            className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 disabled:opacity-50 disabled:pointer-events-none"
          >
            <XIcon className="shrink-0 size-4" />
          </button>
        </div>
        <div className={cn("p-4", bodyClassName)}>{children}</div>
      </div>
    </>
  )
}

Offcanvas.displayName = "Offcanvas"

export default Offcanvas