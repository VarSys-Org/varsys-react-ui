"use client"

import React from "react"
import { cn } from "@/lib/utils"

export interface StatsProps {
  children: React.ReactNode
  direction?: "horizontal" | "vertical"
  className?: string
}

export const Stats = React.forwardRef<HTMLDivElement, StatsProps>(
  ({ children, direction = "horizontal", className }, ref) => (
    <div
      ref={ref}
      className={cn(
        "grid divide-x divide-border overflow-hidden rounded-xl border shadow-sm",
        direction === "horizontal" ? "grid-flow-col auto-cols-fr" : "grid-flow-row divide-x-0 divide-y",
        className,
      )}
    >
      {children}
    </div>
  ),
)

Stats.displayName = "Stats"

export interface StatProps {
  children: React.ReactNode
  className?: string
}

export const Stat = React.forwardRef<HTMLDivElement, StatProps>(
  ({ children, className }, ref) => (
    <div ref={ref} className={cn("flex flex-col gap-1 p-4", className)}>
      {children}
    </div>
  ),
)

Stat.displayName = "Stat"

export interface StatFigureProps {
  children: React.ReactNode
  className?: string
}

export const StatFigure = React.forwardRef<HTMLDivElement, StatFigureProps>(
  ({ children, className }, ref) => (
    <div ref={ref} className={cn("text-muted-foreground", className)}>
      {children}
    </div>
  ),
)

StatFigure.displayName = "StatFigure"

export interface StatTitleProps {
  children: React.ReactNode
  className?: string
}

export const StatTitle = React.forwardRef<HTMLDivElement, StatTitleProps>(
  ({ children, className }, ref) => (
    <div ref={ref} className={cn("text-xs font-medium text-muted-foreground", className)}>
      {children}
    </div>
  ),
)

StatTitle.displayName = "StatTitle"

export interface StatValueProps {
  children: React.ReactNode
  className?: string
}

export const StatValue = React.forwardRef<HTMLDivElement, StatValueProps>(
  ({ children, className }, ref) => (
    <div ref={ref} className={cn("text-2xl font-bold tabular-nums", className)}>
      {children}
    </div>
  ),
)

StatValue.displayName = "StatValue"

export interface StatDescProps {
  children: React.ReactNode
  className?: string
}

export const StatDesc = React.forwardRef<HTMLDivElement, StatDescProps>(
  ({ children, className }, ref) => (
    <div ref={ref} className={cn("text-xs text-muted-foreground", className)}>
      {children}
    </div>
  ),
)

StatDesc.displayName = "StatDesc"
