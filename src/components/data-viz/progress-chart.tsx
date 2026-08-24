"use client"

import * as React from "react"

import { cn } from "@/lib/cn"

export type ProgressChartVariant = "default" | "neutral" | "success" | "warning" | "error"

export interface ProgressChartSeries {
  /** Name of the series. */
  name: string
  /** Current value. */
  value: number
  /** Optional target value for the series. */
  target?: number
  /** Optional color override (CSS color). */
  color?: string
}

export interface ProgressChartProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Data series to render. */
  data: ProgressChartSeries[]
  /** Size of the donut in pixels. */
  size?: number
  /** Stroke width of the donut segments. */
  strokeWidth?: number
  /** Color variant applied when no per-series color is set. */
  variant?: ProgressChartVariant
  /** Show the percentage labels in the center. */
  showLabels?: boolean
  /** Show legend rows below the donut. */
  showLegend?: boolean
}

const variantColors: Record<ProgressChartVariant, string> = {
  default: "stroke-primary",
  neutral: "stroke-gray-500",
  success: "stroke-emerald-500",
  warning: "stroke-amber-500",
  error: "stroke-red-500",
}

const variantTracks: Record<ProgressChartVariant, string> = {
  default: "stroke-primary/20",
  neutral: "stroke-gray-500/20",
  success: "stroke-emerald-500/20",
  warning: "stroke-amber-500/20",
  error: "stroke-red-500/20",
}

export function ProgressChart({
  data,
  size = 200,
  strokeWidth = 18,
  variant = "default",
  showLabels = true,
  showLegend = true,
  className,
  ...props
}: ProgressChartProps) {
  const total = Math.max(1, data.reduce((sum, item) => sum + item.value, 0))
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const gap = 2

  let cumulative = 0

  return (
    <div
      data-slot="progress-chart"
      className={cn("flex flex-col items-center gap-6", className)}
      {...props}
    >
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="-rotate-90"
          role="img"
          aria-label="Progress chart"
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            strokeWidth={strokeWidth}
            className={cn(variantTracks[variant])}
          />
          {data.map((item, index) => {
            const fraction = item.value / total
            const dashLength = Math.max(0, fraction * circumference - gap)
            const offset = -cumulative * circumference + circumference * 0.25
            cumulative += fraction
            const color = item.color ?? variantColors[variant]
            return (
              <circle
                key={`${item.name}-${index}`}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                stroke={color}
                strokeDasharray={`${dashLength} ${circumference - dashLength}`}
                strokeDashoffset={offset}
                className="transition-all duration-500 ease-in-out"
              />
            )
          })}
        </svg>
        {showLabels && (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-foreground">
              {Math.round((data.reduce((sum, item) => sum + item.value, 0) / total) * 100)}%
            </span>
            <span className="text-xs text-muted-foreground">of total</span>
          </div>
        )}
      </div>

      {showLegend && (
        <ul className="w-full space-y-2">
          {data.map((item, index) => {
            const isCssColor = typeof item.color === "string" && /^(#|rgb|hsl|var)/.test(item.color)
            return (
              <li key={`${item.name}-${index}`} className="flex items-center justify-between gap-4">
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span
                    className={cn("size-2.5 shrink-0 rounded-full", isCssColor ? "" : variantColors[variant])}
                    style={isCssColor ? { background: item.color } : undefined}
                  />
                  {item.name}
                </span>
                <span className="flex items-center gap-2 text-sm">
                  <span className="font-medium text-foreground">{item.value}</span>
                  {typeof item.target === "number" && (
                    <span className="text-muted-foreground">/ {item.target}</span>
                  )}
                </span>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default ProgressChart
