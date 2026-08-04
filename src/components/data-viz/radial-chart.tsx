"use client"

import * as React from "react"
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart as RechartsRadialBarChart,
} from "recharts"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "./chart"

export interface PolarRadialChartDatum {
  [key: string]: string | number | undefined
}

export interface PolarRadialChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: PolarRadialChartDatum[]
  dataKey: string
  nameKey?: string
  innerRadius?: number
  outerRadius?: number
  showTooltip?: boolean
  tooltipHideLabel?: boolean
  config?: ChartConfig
  centerLabel?: string
}

export function PolarRadialChart({
  data,
  dataKey,
  nameKey,
  innerRadius = 30,
  outerRadius = 110,
  showTooltip = true,
  tooltipHideLabel = false,
  config,
  centerLabel,
  className,
}: PolarRadialChartProps) {
  const chartConfig = React.useMemo<ChartConfig>(() => {
    if (config) return config
    const auto: ChartConfig = {}
    data.forEach((datum, index) => {
      const key = String(nameKey ? datum[nameKey] : index)
      auto[key] = {
        label: key,
        color: `var(--chart-${(index % 5) + 1})`,
      }
    })
    return auto
  }, [config, data, nameKey])

  return (
    <ChartContainer
      config={chartConfig}
      className={className ?? "mx-auto aspect-square max-h-[250px]"}
    >
      <RechartsRadialBarChart
        data={data}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
      >
        {showTooltip ? (
          <ChartTooltip
            cursor={false}
            content={
              <ChartTooltipContent
                hideLabel={tooltipHideLabel}
                nameKey={nameKey}
              />
            }
          />
        ) : null}
        {centerLabel ? (
          <PolarGrid gridType="circle" radialLines={false} stroke="none" />
        ) : null}
        <RadialBar dataKey={dataKey} background />
        {centerLabel ? (
          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-4xl font-bold"
                      >
                        {centerLabel}
                      </tspan>
                    </text>
                  )
                }
                return null
              }}
            />
          </PolarRadiusAxis>
        ) : null}
      </RechartsRadialBarChart>
    </ChartContainer>
  )
}

export default PolarRadialChart
