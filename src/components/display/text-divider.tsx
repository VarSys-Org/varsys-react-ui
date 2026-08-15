"use client"

import * as React from "react"
import { cn } from "@/lib/cn"

export interface TextDividerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  /** Alignment of the label relative to the rule lines. */
  align?: "center" | "left" | "right"
  /** Use a gradient fade on the rule lines instead of a solid line. */
  gradient?: boolean
  /** Space between the label and the rule lines. */
  spacing?: "sm" | "md" | "lg"
}

export function TextDivider({
  children,
  align = "center",
  gradient = false,
  spacing = "md",
  className,
  ...props
}: TextDividerProps) {
  const pad =
    spacing === "lg" ? "px-8" : spacing === "sm" ? "px-3" : "px-4"

  const lineBase = gradient ? "bg-linear-to-r from-transparent to-border" : "bg-border"
  const lineBaseR = gradient ? "bg-linear-to-l from-transparent to-border" : "bg-border"

  return (
    <div
      className={cn("flex w-full items-center", className)}
      {...props}
    >
      {align !== "left" && <span className={cn("h-px flex-1", lineBase)} />}
      {children != null && (
        <span className={cn("shrink-0 text-muted-foreground", pad)}>
          {children}
        </span>
      )}
      {align !== "right" && <span className={cn("h-px flex-1", lineBaseR)} />}
    </div>
  )
}
