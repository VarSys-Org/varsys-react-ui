"use client"

import * as React from "react"

import { cn } from "@/lib/cn"

export interface CustomScrollbarProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Scrollbar thumb width in pixels. */
  width?: number
  /** Height cap of the scrollable area. */
  maxHeight?: number | string
}

export function CustomScrollbar({
  width = 8,
  maxHeight = 400,
  className,
  style,
  children,
  ...props
}: CustomScrollbarProps) {
  const scrollbarCss = React.useMemo(() => {
    return `
.vs-custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: var(--scrollbar-thumb) var(--scrollbar-track);
}

.vs-custom-scrollbar::-webkit-scrollbar {
  width: ${width}px;
  height: ${width}px;
}

.vs-custom-scrollbar::-webkit-scrollbar-track {
  background: var(--scrollbar-track);
  border-radius: 6px;
}

.vs-custom-scrollbar::-webkit-scrollbar-thumb {
  background: var(--scrollbar-thumb);
  border-radius: 6px;
}

.vs-custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: var(--scrollbar-thumb-hover);
}
`
  }, [width])

  return (
    <>
      <style>{scrollbarCss}</style>
      <div
        className={cn("vs-custom-scrollbar overflow-y-auto", className)}
        style={{
          maxHeight,
          ["--scrollbar-track" as string]:
            "color-mix(in oklab, hsl(var(--muted)) 60%, transparent)",
          ["--scrollbar-thumb" as string]:
            "color-mix(in oklab, hsl(var(--muted-foreground)) 40%, transparent)",
          ["--scrollbar-thumb-hover" as string]:
            "color-mix(in oklab, hsl(var(--muted-foreground)) 60%, transparent)",
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    </>
  )
}

CustomScrollbar.displayName = "CustomScrollbar"

export default CustomScrollbar