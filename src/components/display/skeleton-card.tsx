"use client"

import * as React from "react"

import { cn } from "@/lib/cn"

export interface SkeletonCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Number of content lines to render. */
  lines?: number
  /** Show the action/button row. */
  showAction?: boolean
  /** Show an avatar-style block. */
  showAvatar?: boolean
  /** Line height percentage of each skeleton row. */
  lineHeight?: number
}

export function SkeletonCard({
  lines = 3,
  showAction = true,
  showAvatar = false,
  lineHeight = 0.6,
  className,
  ...props
}: SkeletonCardProps) {
  return (
    <div
      data-slot="skeleton-card"
      className={cn(
        "w-full rounded-2xl border border-border bg-card p-6 shadow-sm",
        className,
      )}
      {...props}
    >
      <div className="flex items-start gap-4">
        {showAvatar && (
          <div className="size-10 shrink-0 animate-pulse rounded-full bg-muted" />
        )}
        <div className="w-full space-y-3">
          <div className="h-3.5 w-2/3 animate-pulse rounded-full bg-muted" />
          {Array.from({ length: Math.max(0, lines) }).map((_, index) => (
            <div
              key={index}
              className="animate-pulse rounded-full bg-muted"
              style={{
                width: `${Math.max(35, 100 - index * 12)}%`,
                height: lineHeight * 16,
              }}
            />
          ))}
        </div>
      </div>

      {showAction && (
        <div className="mt-6 flex items-center justify-between gap-4 border-t border-border pt-4">
          <div className="h-3 w-24 animate-pulse rounded-full bg-muted" />
          <div className="h-8 w-24 animate-pulse rounded-lg bg-muted" />
        </div>
      )}
    </div>
  )
}

export default SkeletonCard
