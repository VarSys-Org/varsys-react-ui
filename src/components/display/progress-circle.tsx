"use client"

import React from "react"
import { cn } from "@/lib/utils"

export interface ProgressCircleProps {
  value: number
  size?: number
  strokeWidth?: number
  variant?: "default" | "neutral" | "success" | "warning" | "error"
  showAnimation?: boolean
  className?: string
  children?: React.ReactNode
}

const variantColors = {
  default: "stroke-primary",
  neutral: "stroke-gray-500",
  success: "stroke-emerald-500",
  warning: "stroke-amber-500",
  error: "stroke-red-500",
}

const variantTracks = {
  default: "stroke-primary/20",
  neutral: "stroke-gray-500/20",
  success: "stroke-emerald-500/20",
  warning: "stroke-amber-500/20",
  error: "stroke-red-500/20",
}

export const ProgressCircle = ({
  value,
  size = 64,
  strokeWidth = 6,
  variant = "default",
  showAnimation = true,
  className,
  children,
}: ProgressCircleProps) => {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const clampedValue = Math.min(100, Math.max(0, value))
  const offset = circumference - (clampedValue / 100) * circumference

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="-rotate-90"
        role="progressbar"
        aria-valuenow={clampedValue}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          className={cn(variantTracks[variant])}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          className={cn(variantColors[variant], showAnimation && "transition-all duration-500 ease-in-out")}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      {children && (
        <div className="absolute flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  )
}

ProgressCircle.displayName = "ProgressCircle"
