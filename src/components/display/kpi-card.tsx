"use client"

import * as React from "react"
import { cn } from "@/lib/cn"

export interface KpiCardProps extends React.HTMLAttributes<HTMLElement> {
  /** Uppercase micro label describing the metric. */
  label: string
  /** The metric value, e.g. "72,540". */
  value: string
  /** Percentage change to display next to the value. */
  change?: number
  /** Optional trend direction override. */
  trend?: "up" | "down"
  /** Optional icon element shown inside a soft tile. */
  icon?: React.ReactNode
  /** Optional tooltip content rendered via the title attribute. */
  hint?: string
  /** Optional link target for the whole card. */
  href?: string
}

export function KpiCard({
  label,
  value,
  change,
  trend,
  icon,
  hint,
  href,
  className,
  ...props
}: KpiCardProps) {
  const positive = trend ? trend === "up" : (change ?? 0) >= 0

  const body = (
    <article
      className={cn(
        "flex flex-col rounded-xl border border-border bg-card shadow-sm",
        className
      )}
      {...props}
    >
      <div className="flex flex-1 flex-col p-4 md:p-5">
        <div className="flex items-center gap-x-2">
          <p className="text-xs uppercase text-muted-foreground">{label}</p>
          {hint && (
            <span
              className="inline-flex size-4 shrink-0 items-center justify-center text-muted-foreground"
              title={hint}
              aria-label={hint}
            >
              <svg
                className="size-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
            </span>
          )}
        </div>
        <div className="mt-1 flex flex-wrap items-center gap-2">
          <h3 className="text-xl font-medium text-foreground sm:text-2xl">
            {value}
          </h3>
          {change !== undefined && (
            <span
              className={cn(
                "inline-flex items-center gap-x-1 text-sm font-medium",
                positive ? "text-emerald-600" : "text-red-600"
              )}
            >
              <svg
                className="size-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {positive ? (
                  <path d="M13 7h8m0 0v8m0-8-8 8-4-4-6 6" />
                ) : (
                  <path d="M13 17h8m0 0v-8m0 8-8-8-4 4-6-6" />
                )}
              </svg>
              {Math.abs(change)}%
            </span>
          )}
        </div>
        {icon && (
          <div className="mt-3 inline-flex w-fit items-center gap-x-1 text-muted-foreground">
            {icon}
          </div>
        )}
      </div>
    </article>
  )

  if (href) {
    return (
      <a href={href} className="block">
        {body}
      </a>
    )
  }

  return body
}
