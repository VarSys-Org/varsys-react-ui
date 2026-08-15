"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface MarqueeStripProps
  extends React.HTMLAttributes<HTMLDivElement> {
  items: React.ReactNode[]
  duration?: number
  pauseOnHover?: boolean
  edgeFade?: boolean
  className?: string
  itemClassName?: string
}

export function MarqueeStrip({
  items,
  duration = 40,
  pauseOnHover = true,
  edgeFade = true,
  className,
  itemClassName,
}: MarqueeStripProps) {
  if (items.length === 0) return null

  return (
    <div
      className={cn(
        "relative overflow-hidden border-y border-border bg-background",
        edgeFade &&
          "before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-16 before:bg-[linear-gradient(to_right,var(--background),transparent)] after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-16 after:bg-[linear-gradient(to_left,var(--background),transparent)]",
        className,
      )}
    >
      <div className="flex overflow-hidden">
        <div
          className={cn(
            "flex w-max gap-4 py-2.5 animate-scroll [animation-timing-function:linear]",
            pauseOnHover && "hover:[animation-play-state:paused]",
          )}
          style={{ animationDuration: `${duration}s` }}
        >
          <div
            className={cn(
              "flex items-center gap-10 ps-4 text-sm text-foreground",
              itemClassName,
            )}
          >
            {items.map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 whitespace-nowrap"
              >
                {item}
              </span>
            ))}
          </div>
          <div
            className={cn(
              "flex items-center gap-10 pe-4 text-sm text-foreground",
              itemClassName,
            )}
            aria-hidden="true"
          >
            {items.map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 whitespace-nowrap"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarqueeStrip
