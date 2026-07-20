import * as React from "react"

import { cn } from "@/lib/utils"

function Frame({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="frame"
      className={cn(
        "relative flex flex-col rounded-2xl bg-muted/72 p-1",
        "*:[[data-slot=frame-panel]+[data-slot=frame-panel]]:mt-1",
        className
      )}
      {...props}
    />
  )
}

function FramePanel({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="frame-panel"
      className={cn(
        "relative rounded-xl border bg-background bg-clip-padding p-5 shadow-xs/5",
        className
      )}
      {...props}
    />
  )
}

function FrameHeader({
  className,
  ...props
}: React.ComponentProps<"header">) {
  return (
    <header
      data-slot="frame-header"
      className={cn("flex flex-col px-5 py-4", className)}
      {...props}
    />
  )
}

function FrameTitle({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="frame-title"
      className={cn("font-semibold text-sm", className)}
      {...props}
    />
  )
}

function FrameDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="frame-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function FrameFooter({
  className,
  ...props
}: React.ComponentProps<"footer">) {
  return (
    <footer
      data-slot="frame-footer"
      className={cn("px-5 py-4", className)}
      {...props}
    />
  )
}

export { Frame, FramePanel, FrameHeader, FrameTitle, FrameDescription, FrameFooter }
