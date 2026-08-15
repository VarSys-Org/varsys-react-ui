"use client"

import React from "react"
import { cn } from "@/lib/cn"

export interface TimelineEntry {
  id: string
  date: string
  title: string
  description?: React.ReactNode
  dot?: React.ReactNode
  side?: "auto" | "left" | "right"
}

export interface VerticalTimelineProps
  extends Omit<React.HTMLAttributes<HTMLOListElement>, "onSelect"> {
  entries: TimelineEntry[]
  alternating?: boolean
  lineClassName?: string
  onSelect?: (entry: TimelineEntry) => void
}

export function VerticalTimeline({
  entries,
  alternating = false,
  lineClassName,
  onSelect,
  className,
  ...props
}: VerticalTimelineProps) {
  const renderEntry = (entry: TimelineEntry, index: number) => {
    const content = (
      <>
        {entry.dot ? (
          <>{entry.dot}</>
        ) : (
          <span className="size-3 shrink-0 rounded-full bg-primary ring-4 ring-primary/20" />
        )}
        <div className="-mt-1">
          <time className="block text-xs font-medium text-muted-foreground">
            {entry.date}
          </time>
          <h3 className="mt-1 text-base font-semibold text-foreground">
            {entry.title}
          </h3>
          {entry.description && (
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {entry.description}
            </p>
          )}
        </div>
      </>
    )

    const isEven = index % 2 === 0

    if (alternating) {
      return (
        <li
          key={entry.id}
          className={cn(
            "relative grid grid-cols-2",
            isEven ? "odd:-me-3" : "even:-ms-3"
          )}
        >
          <div
            className={cn(
              "relative flex items-start gap-3",
              isEven ? "flex-row-reverse text-right" : "order-last"
            )}
          >
            <button
              type="button"
              onClick={() => onSelect?.(entry)}
              className={cn(
                "flex w-full items-start gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
                isEven && "flex-row-reverse text-right"
              )}
            >
              {content}
            </button>
          </div>
          <div aria-hidden="true" />
        </li>
      )
    }

    return (
      <li key={entry.id} className="relative -ms-1.5 flex items-start gap-4">
        <button
          type="button"
          onClick={() => onSelect?.(entry)}
          className="flex items-start gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
        >
          {content}
        </button>
      </li>
    )
  }

  return (
    <ol
      className={cn(
        "relative space-y-8 before:absolute before:-ms-px before:h-full before:w-0.5 before:rounded-full before:bg-border",
        alternating && "before:start-1/2 before:-ms-px",
        lineClassName
      )}
      {...props}
    >
      {entries.map(renderEntry)}
    </ol>
  )
}
