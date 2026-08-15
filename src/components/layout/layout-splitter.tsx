"use client"

import * as React from "react"
import {
  PanelGroup as ResizablePanelGroup,
  Panel as ResizablePanel,
  PanelResizeHandle,
} from "react-resizable-panels"
import { cn } from "@/lib/cn"

export interface LayoutSplitterProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  direction?: "horizontal" | "vertical"
  autoSaveId?: string
  panels?: React.ReactNode[]
  handleClassName?: string
  withHandle?: boolean
}

export function LayoutSplitter({
  direction = "horizontal",
  autoSaveId,
  panels = [],
  handleClassName,
  withHandle = true,
  className,
  ...props
}: LayoutSplitterProps) {
  return (
    <div
      data-slot="layout-splitter"
      className={cn(
        "flex h-full w-full overflow-hidden",
        direction === "vertical" ? "flex-col" : "flex-row",
        className
      )}
      {...props}
    >
      <ResizablePanelGroup
        direction={direction}
        autoSaveId={autoSaveId}
        className={cn(
          "flex h-full w-full items-stretch",
          direction === "vertical" ? "flex-col" : "flex-row"
        )}
      >
        {panels.map((panel, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <PanelResizeHandle
                data-slot="layout-splitter-handle"
                className={cn(
                  "group relative z-10 flex items-center justify-center bg-border transition-colors",
                  "after:absolute after:bg-transparent hover:after:bg-primary/30",
                  direction === "horizontal"
                    ? "w-px shrink-0 after:inset-y-0 after:left-1/2 after:w-1.5 after:-translate-x-1/2 cursor-col-resize"
                    : "h-px shrink-0 after:inset-x-0 after:top-1/2 after:h-1.5 after:-translate-y-1/2 cursor-row-resize",
                  "focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring",
                  handleClassName
                )}
              >
                {withHandle && (
                  <span
                    className={cn(
                      "z-10 rounded-full border border-border bg-background shadow-sm",
                      direction === "horizontal"
                        ? "h-8 w-1.5"
                        : "h-1.5 w-8"
                    )}
                  />
                )}
              </PanelResizeHandle>
            )}
            <ResizablePanel data-slot="layout-splitter-panel" className="min-h-0 min-w-0 overflow-auto">
              {panel}
            </ResizablePanel>
          </React.Fragment>
        ))}
      </ResizablePanelGroup>
    </div>
  )
}
