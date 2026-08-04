"use client"

import * as React from "react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart as RechartsRadarChart } from "recharts"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "./chart"

export interface PolarRadarChartDatum {
  [key: string]: string | number
}

export interface PolarRadarChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: PolarRadarChartDatum[]
  indexKey: string
  dataKey: string
  label?: string
  color?: string
  fillOpacity?: number
  polarGrid?: boolean
  showTooltip?: boolean
}

export function PolarRadarChart({
  data,
  indexKey,
  dataKey,
  label,
  color = "var(--chart-1)",
  fillOpacity = 0.6,
  polarGrid = true,
  showTooltip = true,
  className,
}: PolarRadarChartProps) {
  const config = React.useMemo<ChartConfig>(
    () => ({
      [dataKey]: {
        label: label ?? dataKey,
        color,
      },
    }),
    [dataKey, label, color]
  )

  return (
    <ChartContainer
      config={config}
      className={className ?? "mx-auto aspect-square max-h-[250px]"}
    >
      <RechartsRadarChart data={data}>
        {showTooltip ? (
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        ) : null}
        <PolarAngleAxis dataKey={indexKey} />
        {polarGrid ? <PolarGrid /> : null}
        <Radar
          dataKey={dataKey}
          fill="var(--color-desktop)"
          fillOpacity={fillOpacity}
        />
      </RechartsRadarChart>
    </ChartContainer>
  )
}

export default PolarRadarChart
