"use client"

import React from "react"
import { cn } from "@/lib/utils"

export interface StepsProps {
  children: React.ReactNode
  vertical?: boolean
  className?: string
}

export function Steps({ children, vertical, className }: StepsProps) {
  return (
    <ul
      className={cn(
        "flex w-full",
        vertical ? "flex-col gap-4" : "flex-row",
        className,
      )}
      role="group"
      aria-label="Steps"
    >
      {children}
    </ul>
  )
}

Steps.displayName = "Steps"

export interface StepProps {
  children: React.ReactNode
  active?: boolean
  completed?: boolean
  color?: "primary" | "secondary" | "success" | "warning" | "error" | "neutral"
  className?: string
}

const stepColorMap = {
  primary: "border-primary bg-primary text-primary-foreground",
  secondary: "border-secondary bg-secondary text-secondary-foreground",
  success: "border-emerald-500 bg-emerald-500 text-white",
  warning: "border-amber-500 bg-amber-500 text-white",
  error: "border-red-500 bg-red-500 text-white",
  neutral: "border-gray-400 bg-gray-400 text-white",
}

const stepLineColorMap = {
  primary: "bg-primary/30",
  secondary: "bg-secondary/30",
  success: "bg-emerald-500/30",
  warning: "bg-amber-500/30",
  error: "bg-red-500/30",
  neutral: "bg-gray-400/30",
}

export function Step({ children, active, completed, color = "primary", className }: StepProps) {
  return (
    <li
      className={cn("flex-1", className)}
      role="listitem"
    >
      <div className="flex items-center gap-2">
        <span
          className={cn(
            "flex size-7 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold transition-colors",
            (active || completed)
              ? cn(stepColorMap[color], "border-current")
              : "border-muted-foreground/30 text-muted-foreground",
          )}
        >
          {completed ? (
            <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            children
          )}
        </span>
      </div>
    </li>
  )
}

Step.displayName = "Step"

export interface StepsConnectorProps {
  color?: "primary" | "secondary" | "success" | "warning" | "error" | "neutral"
  active?: boolean
}

export function StepsConnector({ color = "primary", active }: StepsConnectorProps) {
  return (
    <div className="mx-2 mt-3.5 h-0.5 flex-1">
      <div
        className={cn(
          "h-full rounded-full transition-all duration-500",
          active ? cn(stepLineColorMap[color], "w-full") : "w-0 bg-muted",
        )}
      />
    </div>
  )
}

StepsConnector.displayName = "StepsConnector"
