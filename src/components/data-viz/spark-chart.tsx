"use client"

import React from "react"
import {
  Area,
  Bar,
  Line,
  AreaChart as RechartsAreaChart,
  BarChart as RechartsBarChart,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts"
import { cn } from "@/lib/cn"

const sparklineColors = [
  "var(--chart-1, #3b82f6)",
  "var(--chart-2, #8b5cf6)",
  "var(--chart-3, #10b981)",
  "var(--chart-4, #f59e0b)",
  "var(--chart-5, #ef4444)",
]

function useSparkColors(count: number) {
  const style =
    typeof window !== "undefined"
      ? getComputedStyle(document.documentElement)
      : null
  return Array.from({ length: count }, (_, i) => {
    const cssColor = style?.getPropertyValue(`--chart-${i + 1}`).trim()
    return cssColor || sparklineColors[i % sparklineColors.length]
  })
}

function getYAxisDomain(
  autoMinValue: boolean,
  minValue: number | undefined,
  maxValue: number | undefined,
) {
  const minDomain = autoMinValue ? "auto" : (minValue ?? 0)
  const maxDomain = maxValue ?? "auto"
  return [minDomain, maxDomain]
}

//#region SparkAreaChart

export interface SparkAreaChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: Record<string, any>[]
  categories: string[]
  index: string
  colors?: string[]
  autoMinValue?: boolean
  minValue?: number
  maxValue?: number
  connectNulls?: boolean
  type?: "default" | "stacked" | "percent"
  fill?: "gradient" | "solid" | "none"
}

export const SparkAreaChart = React.forwardRef<HTMLDivElement, SparkAreaChartProps>(
  (props, forwardedRef) => {
    const {
      data = [],
      categories = [],
      index,
      colors,
      autoMinValue = false,
      minValue,
      maxValue,
      connectNulls = false,
      type = "default",
      className,
      fill = "gradient",
      ...other
    } = props

    const palette = useSparkColors(categories.length)
    const resolvedColors = colors ?? palette
    const yAxisDomain = getYAxisDomain(autoMinValue, minValue, maxValue)
    const stacked = type === "stacked" || type === "percent"
    const areaId = React.useId()

    const getFillContent = (fillType: SparkAreaChartProps["fill"]) => {
      switch (fillType) {
        case "none":
          return <stop stopColor="currentColor" stopOpacity={0} />
        case "gradient":
          return (
            <>
              <stop offset="5%" stopColor="currentColor" stopOpacity={0.4} />
              <stop offset="95%" stopColor="currentColor" stopOpacity={0} />
            </>
          )
        case "solid":
          return <stop stopColor="currentColor" stopOpacity={0.3} />
        default:
          return <stop stopColor="currentColor" stopOpacity={0.3} />
      }
    }

    return (
      <div ref={forwardedRef} className={cn("h-12 w-28", className)} {...other}>
        <ResponsiveContainer>
          <RechartsAreaChart
            data={data}
            margin={{ bottom: 1, left: 1, right: 1, top: 1 }}
            stackOffset={type === "percent" ? "expand" : undefined}
          >
            <XAxis hide dataKey={index} />
            <YAxis hide domain={yAxisDomain as [number | string, number | string]} />

            {categories.map((category, idx) => {
              const categoryId = `${areaId}-${category.replace(/[^a-zA-Z0-9]/g, "")}`
              const color = resolvedColors[idx % resolvedColors.length]
              return (
                <React.Fragment key={category}>
                  <defs>
                    <linearGradient id={categoryId} x1="0" y1="0" x2="0" y2="1">
                      {getFillContent(fill)}
                    </linearGradient>
                  </defs>
                  <Area
                    dot={false}
                    strokeOpacity={1}
                    name={category}
                    type="linear"
                    dataKey={category}
                    stroke={color}
                    strokeWidth={2}
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    isAnimationActive={false}
                    connectNulls={connectNulls}
                    stackId={stacked ? "stack" : undefined}
                    fill={`url(#${categoryId})`}
                  />
                </React.Fragment>
              )
            })}
          </RechartsAreaChart>
        </ResponsiveContainer>
      </div>
    )
  },
)

SparkAreaChart.displayName = "SparkAreaChart"

//#region SparkLineChart

export interface SparkLineChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: Record<string, any>[]
  categories: string[]
  index: string
  colors?: string[]
  autoMinValue?: boolean
  minValue?: number
  maxValue?: number
  connectNulls?: boolean
}

export const SparkLineChart = React.forwardRef<HTMLDivElement, SparkLineChartProps>(
  (props, forwardedRef) => {
    const {
      data = [],
      categories = [],
      index,
      colors,
      autoMinValue = false,
      minValue,
      maxValue,
      connectNulls = false,
      className,
      ...other
    } = props

    const palette = useSparkColors(categories.length)
    const resolvedColors = colors ?? palette
    const yAxisDomain = getYAxisDomain(autoMinValue, minValue, maxValue)

    return (
      <div ref={forwardedRef} className={cn("h-12 w-28", className)} {...other}>
        <ResponsiveContainer>
          <RechartsLineChart
            data={data}
            margin={{ bottom: 1, left: 1, right: 1, top: 1 }}
          >
            <XAxis hide dataKey={index} />
            <YAxis hide domain={yAxisDomain as [number | string, number | string]} />
            {categories.map((category, idx) => (
              <Line
                dot={false}
                strokeOpacity={1}
                key={category}
                name={category}
                type="linear"
                dataKey={category}
                stroke={resolvedColors[idx % resolvedColors.length]}
                strokeWidth={2}
                strokeLinejoin="round"
                strokeLinecap="round"
                isAnimationActive={false}
                connectNulls={connectNulls}
              />
            ))}
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    )
  },
)

SparkLineChart.displayName = "SparkLineChart"

//#region SparkBarChart

export interface SparkBarChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: Record<string, any>[]
  index: string
  categories: string[]
  colors?: string[]
  autoMinValue?: boolean
  minValue?: number
  maxValue?: number
  barCategoryGap?: string | number
  type?: "default" | "stacked" | "percent"
}

export const SparkBarChart = React.forwardRef<HTMLDivElement, SparkBarChartProps>(
  (props, forwardedRef) => {
    const {
      data = [],
      categories = [],
      index,
      colors,
      autoMinValue = false,
      minValue,
      maxValue,
      barCategoryGap,
      type = "default",
      className,
      ...other
    } = props

    const palette = useSparkColors(categories.length)
    const resolvedColors = colors ?? palette
    const yAxisDomain = getYAxisDomain(autoMinValue, minValue, maxValue)
    const stacked = type === "stacked" || type === "percent"

    return (
      <div ref={forwardedRef} className={cn("h-12 w-28", className)} {...other}>
        <ResponsiveContainer>
          <RechartsBarChart
            data={data}
            margin={{ bottom: 1, left: 1, right: 1, top: 1 }}
            stackOffset={type === "percent" ? "expand" : undefined}
            barCategoryGap={barCategoryGap}
          >
            <XAxis hide dataKey={index} />
            <YAxis hide domain={yAxisDomain as [number | string, number | string]} />

            {categories.map((category, idx) => (
              <Bar
                key={category}
                name={category}
                type="linear"
                dataKey={category}
                stackId={stacked ? "stack" : undefined}
                isAnimationActive={false}
                fill={resolvedColors[idx % resolvedColors.length]}
              />
            ))}
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    )
  },
)

SparkBarChart.displayName = "SparkBarChart"
