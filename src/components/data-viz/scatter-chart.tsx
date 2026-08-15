"use client"

/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react"
import {
  CartesianGrid,
  Dot,
  Label,
  Legend as RechartsLegend,
  ResponsiveContainer,
  Scatter,
  ScatterChart as RechartsScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts"
import type { AxisDomain } from "recharts/types/util/types"

import { cn } from "@/lib/cn"
import {
  AvailableChartColors,
  type AvailableChartColorsKeys,
  constructCategoryColors,
  getYAxisDomain,
  onlyOneValueForKey,
  useOnWindowResize,
} from "./chart-utils"

interface ScatterChartTooltipContentProps {
  active?: boolean
  payload?: any
  label?: string
  category?: string
  valueFormatter: {
    x?: (value: number) => string
    y?: (value: number) => string
    size?: (value: number) => string
  }
  axis: {
    x?: string
    y?: string
    size?: string
  }
}

const ScatterChartTooltipContent = ({
  active,
  payload,
  label,
  category,
  valueFormatter,
  axis,
}: ScatterChartTooltipContentProps) => {
  const rows = payload ?? []
  const dataPoint = rows[0]?.payload
  if (!active || !dataPoint) return null

  const rowLabel = category ? dataPoint[category] : label

  return (
    <div className="rounded-lg border border-border bg-background px-3 py-2 text-sm shadow-lg">
      {rowLabel !== undefined && (
        <p className="mb-1 font-medium text-foreground">{String(rowLabel)}</p>
      )}
      <div className="flex flex-col gap-0.5">
        {axis.x && (
          <div className="flex items-center justify-between gap-4">
            <span className="text-muted-foreground">{axis.x}</span>
            <span className="font-medium tabular-nums text-foreground">
              {valueFormatter.x?.(dataPoint[axis.x]) ?? dataPoint[axis.x]}
            </span>
          </div>
        )}
        {axis.y && (
          <div className="flex items-center justify-between gap-4">
            <span className="text-muted-foreground">{axis.y}</span>
            <span className="font-medium tabular-nums text-foreground">
              {valueFormatter.y?.(dataPoint[axis.y]) ?? dataPoint[axis.y]}
            </span>
          </div>
        )}
        {axis.size && dataPoint[axis.size] !== undefined && (
          <div className="flex items-center justify-between gap-4">
            <span className="text-muted-foreground">{axis.size}</span>
            <span className="font-medium tabular-nums text-foreground">
              {valueFormatter.size?.(dataPoint[axis.size]) ?? dataPoint[axis.size]}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export type ScatterChartValueFormatter = {
  x?: (value: number) => string
  y?: (value: number) => string
  size?: (value: number) => string
}

export interface ScatterChartEventProps {
  eventType: "category" | "bubble"
  categoryClicked: string
  [key: string]: any
}

export interface ScatterChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: any[]
  x: string
  y: string
  size?: string
  category?: string
  colors?: AvailableChartColorsKeys[]
  showOpacity?: boolean
  sizeRange?: [number, number]
  valueFormatter?: ScatterChartValueFormatter
  startEndOnly?: boolean
  showXAxis?: boolean
  showYAxis?: boolean
  yAxisWidth?: number
  intervalType?: "preserveStartEnd" | "equidistantPreserveStart"
  showAnimation?: boolean
  showTooltip?: boolean
  showLegend?: boolean
  showGridLines?: boolean
  autoMinXValue?: boolean
  minXValue?: number
  maxXValue?: number
  autoMinYValue?: boolean
  minYValue?: number
  maxYValue?: number
  allowDecimals?: boolean
  noDataText?: string
  onValueChange?: (value: ScatterChartEventProps | null) => void
  rotateLabelX?: {
    angle: number
    verticalShift?: number
    xAxisHeight?: number
  }
  enableLegendSlider?: boolean
  tickGap?: number
  xAxisLabel?: string
  yAxisLabel?: string
  height?: number
}

export const ScatterChart = React.forwardRef<HTMLDivElement, ScatterChartProps>(
  (
    {
      data = [],
      x,
      y,
      size,
      category,
      colors = AvailableChartColors,
      showOpacity = false,
      sizeRange = [1, 1000],
      valueFormatter,
      startEndOnly = false,
      showXAxis = true,
      showYAxis = true,
      yAxisWidth = 56,
      intervalType = "equidistantPreserveStart",
      showAnimation = false,
      showTooltip = true,
      showLegend = true,
      showGridLines = true,
      autoMinXValue = false,
      minXValue,
      maxXValue,
      autoMinYValue = false,
      minYValue,
      maxYValue,
      allowDecimals = true,
      noDataText,
      onValueChange,
      rotateLabelX,
      enableLegendSlider = false,
      tickGap = 5,
      xAxisLabel,
      yAxisLabel,
      height = 320,
      className,
      ...props
    },
    forwardedRef,
  ) => {
    const [legendHeight, setLegendHeight] = React.useState(60)
    const [activeLegend, setActiveLegend] = React.useState<string | undefined>(undefined)
    const [activeItem, setActiveItem] = React.useState<any>(undefined)
    const hasOnValueChange = !!onValueChange

    const categories = category ? Array.from(new Set(data.map((d) => d[category]))) : []
    const categoryColors = constructCategoryColors(
      categories,
      colors as AvailableChartColorsKeys[],
    )
    const xAxisDomain = getYAxisDomain(autoMinXValue, minXValue, maxXValue) as AxisDomain
    const yAxisDomain = getYAxisDomain(autoMinYValue, minYValue, maxYValue) as AxisDomain

    const handleBubbleClick = (dataPoint: any, event: any, clickedCategory: string) => {
      event.stopPropagation()
      if (!hasOnValueChange) return
      if (activeItem && JSON.stringify(activeItem) === JSON.stringify(dataPoint)) {
        setActiveLegend(undefined)
        setActiveItem(undefined)
        onValueChange?.(null)
      } else {
        setActiveItem(dataPoint)
        setActiveLegend(clickedCategory)
        onValueChange?.({
          eventType: "bubble",
          categoryClicked: clickedCategory,
          ...dataPoint,
        })
      }
    }

    const handleCategoryClick = (categoryName: string, color: string) => {
      if (!hasOnValueChange) return
      if (activeLegend !== categoryName) {
        setActiveLegend(categoryName)
        onValueChange?.({
          eventType: "category",
          categoryClicked: categoryName,
        })
      } else {
        setActiveLegend(undefined)
        onValueChange?.(null)
      }
    }

    const defaultFormatter: Required<ScatterChartValueFormatter> = {
      x: (v) => String(v),
      y: (v) => String(v),
      size: (v) => String(v),
    }
    const formatter = { ...defaultFormatter, ...valueFormatter }

    const legendPayload = categories.map((categoryName) => ({
      value: categoryName,
      type: "circle",
      color: categoryColors.get(categoryName)
        ? chartColorToHex(categoryColors.get(categoryName)!)
        : "#6b7280",
    }))

    useOnWindowResize(() => {
      setLegendHeight(60)
    })

    const xAxisInterval = startEndOnly ? "preserveStartEnd" : intervalType

    return (
      <div
        ref={forwardedRef}
        className={cn("w-full", className)}
        {...props}
      >
        {showLegend && categories.length > 0 && (
          <div
            className="mb-3 flex w-full items-center justify-between overflow-hidden"
            style={{ height: legendHeight }}
          >
            <div className="flex w-full flex-wrap gap-1">
              {categories.map((categoryName) => {
                const color = categoryColors.get(categoryName)!
                return (
                  <button
                    key={categoryName}
                    type="button"
                    onClick={() => handleCategoryClick(categoryName, color)}
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded px-2 py-0.5 text-sm text-foreground transition",
                      hasOnValueChange ? "cursor-pointer hover:bg-muted" : "cursor-default",
                      activeLegend !== undefined &&
                        activeLegend !== categoryName &&
                        "opacity-40",
                    )}
                  >
                    <span
                      className="inline-block size-2.5 shrink-0 rounded-full"
                      style={{ backgroundColor: chartColorToHex(color) }}
                      aria-hidden="true"
                    />
                    <span className="truncate">{categoryName}</span>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        <div style={{ height }} className="w-full">
          {data.length === 0 ? (
            <div className="flex h-full w-full items-center justify-center rounded-md border border-dashed border-border text-sm text-muted-foreground">
              {noDataText ?? "No data to display"}
            </div>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <RechartsScatterChart
                margin={{ bottom: xAxisLabel ? 20 : undefined, left: 20, right: 20, top: 5 }}
              >
                {showGridLines && (
                  <CartesianGrid
                    className="stroke-border"
                    horizontal={true}
                    vertical={true}
                  />
                )}
                {x && (
                  <XAxis
                    hide={!showXAxis}
                    dataKey={x}
                    interval={xAxisInterval}
                    tick={{ transform: "translate(0, 6)" }}
                    ticks={
                      startEndOnly
                        ? [data[0]?.[x], data[data.length - 1]?.[x]]
                        : undefined
                    }
                    type="number"
                    name={x}
                    domain={xAxisDomain}
                    allowDataOverflow={true}
                    fill=""
                    stroke=""
                    className="text-xs text-muted-foreground"
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={formatter.x}
                    minTickGap={tickGap}
                    angle={rotateLabelX?.angle}
                    dy={rotateLabelX?.verticalShift}
                    height={rotateLabelX?.xAxisHeight}
                  >
                    {xAxisLabel && (
                      <Label
                        position="insideBottom"
                        offset={-20}
                        className="fill-foreground text-sm font-medium"
                      >
                        {xAxisLabel}
                      </Label>
                    )}
                  </XAxis>
                )}
                {y && (
                  <YAxis
                    width={yAxisWidth}
                    hide={!showYAxis}
                    axisLine={false}
                    tickLine={false}
                    dataKey={y}
                    type="number"
                    name={y}
                    domain={yAxisDomain}
                    tick={{ transform: "translate(-3, 0)" }}
                    tickFormatter={formatter.y}
                    fill=""
                    stroke=""
                    className="text-xs text-muted-foreground"
                    allowDecimals={allowDecimals}
                    allowDataOverflow={true}
                  >
                    {yAxisLabel && (
                      <Label
                        position="insideLeft"
                        style={{ textAnchor: "middle" }}
                        angle={-90}
                        offset={-15}
                        className="fill-foreground text-sm font-medium"
                      >
                        {yAxisLabel}
                      </Label>
                    )}
                  </YAxis>
                )}
                <Tooltip
                  wrapperStyle={{ outline: "none" }}
                  isAnimationActive={false}
                  cursor={{ stroke: "#d1d5db", strokeWidth: 1 }}
                  content={({ active, payload, label }) =>
                    showTooltip ? (
                      <ScatterChartTooltipContent
                        active={active}
                        payload={payload}
                        label={label}
                        category={category}
                        valueFormatter={formatter}
                        axis={{ x, y, size }}
                      />
                    ) : (
                      <></>
                    )
                  }
                />
                {size && (
                  <ZAxis dataKey={size} type="number" range={sizeRange} name={size} />
                )}
                {categories.length === 0 ? (
                  <Scatter
                    className={cn(
                      "fill-blue-500",
                      showOpacity && "fill-opacity-70",
                      hasOnValueChange && "cursor-pointer",
                    )}
                    fill={`url(#${categoryColors.get("") ?? "blue"})`}
                    data={data}
                    isAnimationActive={showAnimation}
                    onClick={(point: any, event: any) =>
                      handleBubbleClick(point.payload, event, "")
                    }
                  />
                ) : (
                  categories.map((categoryName) => {
                    const color = categoryColors.get(categoryName)!
                    return (
                      <Scatter
                        key={categoryName}
                        className={cn(
                          chartColorToHexClass(color),
                          showOpacity && "fill-opacity-70",
                          hasOnValueChange && "cursor-pointer",
                          activeLegend !== undefined &&
                            activeLegend !== categoryName &&
                            "opacity-30",
                        )}
                        fill={`url(#${color})`}
                        name={categoryName}
                        data={data.filter((d) => d[category as string] === categoryName)}
                        isAnimationActive={showAnimation}
                        onClick={(point: any, event: any) =>
                          handleBubbleClick(point.payload, event, categoryName)
                        }
                        shape={(dotProps: any) => {
                          const { cx, cy, r, fillOpacity, name: dotName } = dotProps
                          return (
                            <Dot
                              cx={cx}
                              cy={cy}
                              r={r / 2}
                              opacity={
                                activeLegend === undefined ||
                                activeLegend === dotName
                                  ? fillOpacity
                                  : 0.3
                              }
                            />
                          )
                        }}
                      />
                    )
                  })
                )}
                {showLegend && (
                  <RechartsLegend
                    verticalAlign="top"
                    height={legendHeight}
                    content={() => <></>}
                  />
                )}
              </RechartsScatterChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    )
  },
)

ScatterChart.displayName = "ScatterChart"

// Internal helpers — map chart color keys to CSS hex / tailwind fill classes.
const hexPalette: Record<string, string> = {
  blue: "#3b82f6",
  emerald: "#10b981",
  violet: "#8b5cf6",
  amber: "#f59e0b",
  gray: "#6b7280",
  cyan: "#06b6d4",
  pink: "#ec4899",
  lime: "#84cc16",
  fuchsia: "#d946ef",
}

function chartColorToHex(color: AvailableChartColorsKeys): string {
  return hexPalette[color] ?? "#6b7280"
}

function chartColorToHexClass(color: AvailableChartColorsKeys): string {
  const fillClass = {
    blue: "fill-blue-500",
    emerald: "fill-emerald-500",
    violet: "fill-violet-500",
    amber: "fill-amber-500",
    gray: "fill-gray-500",
    cyan: "fill-cyan-500",
    pink: "fill-pink-500",
    lime: "fill-lime-500",
    fuchsia: "fill-fuchsia-500",
  } as Record<string, string>
  return fillClass[color] ?? "fill-gray-500"
}
