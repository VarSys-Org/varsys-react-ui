import * as React from "react"

import { cn } from "@/lib/utils"

function InputGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-group"
      className={cn(
        "relative inline-flex w-full min-w-0 items-center rounded-lg border border-input bg-background text-sm shadow-xs transition-colors has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/50 has-[textarea:focus-visible]:border-ring has-[textarea:focus-visible]:ring-3 has-[textarea:focus-visible]:ring-ring/50 has-[input[aria-invalid]]:border-destructive has-[input[aria-invalid]]:ring-3 has-[input[aria-invalid]]:ring-destructive/20 has-[textarea[aria-invalid]]:border-destructive has-[textarea[aria-invalid]]:ring-3 has-[textarea[aria-invalid]]:ring-destructive/20 has-[input:disabled]:opacity-50 has-[textarea:disabled]:opacity-50 dark:bg-input/30",
        className
      )}
      role="group"
      {...props}
    />
  )
}

function InputGroupAddon({
  className,
  align = "start",
  ...props
}: React.ComponentProps<"div"> & { align?: "start" | "end" | "top" | "bottom" }) {
  return (
    <div
      data-slot="input-group-addon"
      data-align={align}
      className={cn(
        "flex h-auto cursor-text select-none items-center justify-center gap-2 leading-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 [&_svg]:pointer-events-none",
        align === "end" && "order-last pe-2",
        align === "start" && "order-first ps-2",
        align === "top" && "order-first w-full justify-start px-3 pt-2 pb-1",
        align === "bottom" && "order-last w-full justify-start px-3 pb-2 pt-1",
        className
      )}
      onMouseDown={(e) => {
        const target = e.target as HTMLElement
        const isInteractive = target.closest(
          "button, a, input, select, textarea, [role='button']"
        )
        if (isInteractive) return
        e.preventDefault()
        const parent = e.currentTarget.parentElement
        const input = parent?.querySelector<HTMLInputElement | HTMLTextAreaElement>("input, textarea")
        if (input) input.focus()
      }}
      {...props}
    />
  )
}

function InputGroupText({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="input-group-text"
      className={cn(
        "line-clamp-1 flex items-center gap-2 whitespace-nowrap text-muted-foreground leading-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
        className
      )}
      {...props}
    />
  )
}

export { InputGroup, InputGroupAddon, InputGroupText }
