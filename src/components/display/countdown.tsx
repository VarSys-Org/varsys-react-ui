"use client"

import React from "react"
import { cn } from "@/lib/utils"

export interface CountdownProps {
  value: number
  className?: string
}

export const Countdown = ({ value, className }: CountdownProps) => {
  const clampedValue = Math.min(99, Math.max(0, Math.floor(value)))

  return (
    <span
      role="timer"
      className={cn(
        "inline-flex items-center gap-0.5 font-mono text-4xl font-bold tabular-nums",
        className,
      )}
      style={{ fontVariantNumeric: "tabular-nums" }}
    >
      <span className="relative inline-flex items-center justify-center rounded-md bg-muted px-1.5 py-0.5">
        {Math.floor(clampedValue / 10)}
      </span>
      <span className="relative inline-flex items-center justify-center rounded-md bg-muted px-1.5 py-0.5">
        {clampedValue % 10}
      </span>
    </span>
  )
}

Countdown.displayName = "Countdown"
