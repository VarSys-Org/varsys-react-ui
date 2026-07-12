"use client"

import React from "react"
import { ResponsiveCalendar, type CalendarTooltipProps } from "@nivo/calendar"
import { ResponsiveRadar } from "@nivo/radar"
import { ResponsiveSankey, type SankeyLinkDatum } from "@nivo/sankey"
import { ResponsiveTreeMap } from "@nivo/treemap"
import { ResponsiveHeatMap } from "@nivo/heatmap"
import { ResponsiveFunnel } from "@nivo/funnel"
import { cn } from "@/lib/utils"

function useChartTheme() {
  const style = typeof window !== "undefined" ? getComputedStyle(document.documentElement) : null
  return {
    text: { fontSize: 11, fill: style?.getPropertyValue("--muted-foreground").trim() || "#71717a" },
    tooltip: {
      container: {
        background: style?.getPropertyValue("--popover").trim() || "#ffffff",
        color: style?.getPropertyValue("--popover-foreground").trim() || "#09090b",
        fontSize: 12,
      },
    },
  }
}

function chartColors(): string[] {
  const style = typeof window !== "undefined" ? getComputedStyle(document.documentElement) : null
  return Array.from({ length: 5 }, (_, i) =>
    style?.getPropertyValue(`--chart-${i + 1}`).trim() || `hsl(${i * 72}, 70%, 50%)`,
  )
}

// ── Calendar Heatmap ──

export interface CalendarHeatmapProps {
  data: { day: string; value: number }[]
  from: string
  to: string
  height?: number
  className?: string
}

export function CalendarHeatmap({ data, from, to, height = 200, className }: CalendarHeatmapProps) {
  const theme = useChartTheme()

  return (
    <div className={cn("h-[200px]", className)} style={{ height }}>
      <ResponsiveCalendar
        data={data}
        from={from}
        to={to}
        emptyColor="#eeeeee"
        colors={["#d6e685", "#8cc665", "#44a340", "#1e6823"]}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        yearSpacing={40}
        monthBorderColor="#ffffff"
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        theme={theme}
        legends={[
          {
            anchor: "bottom-right",
            direction: "row",
            translateY: 36,
            itemCount: 4,
            itemWidth: 42,
            itemHeight: 36,
            itemsSpacing: 14,
            itemDirection: "right-to-left",
          },
        ]}
      />
    </div>
  )
}

CalendarHeatmap.displayName = "CalendarHeatmap"

// ── Radar Chart ──

export interface RadarChartProps {
  data: { key: string; [metric: string]: number | string }[]
  keys: string[]
  indexBy?: string
  height?: number
  className?: string
}

export function RadarChart({
  data,
  keys,
  indexBy = "key",
  height = 300,
  className,
}: RadarChartProps) {
  const theme = useChartTheme()
  const colors = chartColors()

  return (
    <div className={cn("h-[300px]", className)} style={{ height }}>
      <ResponsiveRadar
        data={data}
        keys={keys}
        indexBy={indexBy}
        maxValue="auto"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        curve="linearClosed"
        borderWidth={2}
        borderColor={{ from: "color" }}
        gridLevels={5}
        gridShape="circular"
        gridLabelOffset={12}
        enableDots={true}
        dotSize={6}
        dotColor={{ theme: "background" }}
        dotBorderWidth={2}
        dotBorderColor={{ from: "color" }}
        enableDotLabel={false}
        colors={colors}
        fillOpacity={0.15}
        blendMode="multiply"
        animate={true}
        theme={theme}
        legends={[
          {
            anchor: "top-left",
            direction: "column",
            translateX: -50,
            translateY: -40,
            itemWidth: 80,
            itemHeight: 20,
            itemTextColor: "#999",
            symbolSize: 12,
            symbolShape: "circle",
          },
        ]}
      />
    </div>
  )
}

RadarChart.displayName = "RadarChart"

// ── Sankey Diagram ──

export interface SankeyDiagramProps {
  data: { nodes: { id: string }[]; links: { source: string; target: string; value: number }[] }
  height?: number
  className?: string
}

export function SankeyDiagram({ data, height = 400, className }: SankeyDiagramProps) {
  const theme = useChartTheme()

  return (
    <div className={cn("h-[400px]", className)} style={{ height }}>
      <ResponsiveSankey
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        align="justify"
        colors={{ scheme: "category10" }}
        nodeOpacity={1}
        nodeThickness={18}
        nodeInnerPadding={3}
        nodeSpacing={24}
        nodeBorderWidth={0}
        nodeBorderColor={{ from: "color", modifiers: [["darker", 0.8]] }}
        linkOpacity={0.5}
        linkHoverOthersOpacity={0.1}
        enableLinkGradient={true}
        labelPosition="outside"
        labelOrientation="horizontal"
        labelPadding={16}
        labelTextColor={{ from: "color", modifiers: [["darker", 1]] }}
        animate={true}
        theme={theme}
      />
    </div>
  )
}

SankeyDiagram.displayName = "SankeyDiagram"

// ── Treemap Chart ──

export interface TreemapChartProps {
  data: { name: string; children?: { name: string; loc: number }[] }
  height?: number
  className?: string
}

export function TreemapChart({ data, height = 400, className }: TreemapChartProps) {
  const theme = useChartTheme()
  const colors = chartColors()

  return (
    <div className={cn("h-[400px]", className)} style={{ height }}>
      <ResponsiveTreeMap
        data={data}
        identity="name"
        value="loc"
        valueFormat=".02s"
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        labelSkipSize={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.2]] }}
        parentLabelTextColor={{ from: "color", modifiers: [["darker", 2]] }}
        borderColor={{ from: "color", modifiers: [["darker", 0.1]] }}
        colors={colors}
        theme={theme}
      />
    </div>
  )
}

TreemapChart.displayName = "TreemapChart"

// ── Heatmap ──

export interface HeatmapChartProps {
  data: { x: string; y: string; value: number }[]
  xKeys: string[]
  yKeys: string[]
  height?: number
  className?: string
}

export function HeatmapChart({ data, xKeys, yKeys, height = 400, className }: HeatmapChartProps) {
  const theme = useChartTheme()

  const heatmapData = yKeys.map((y) => ({
    id: y,
    data: xKeys.map((x) => ({
      x,
      y: data.find((d) => d.x === x && d.y === y)?.value ?? 0,
    })),
  }))

  return (
    <div className={cn("h-[400px]", className)} style={{ height }}>
      <ResponsiveHeatMap
        data={heatmapData}
        margin={{ top: 60, right: 20, bottom: 20, left: 80 }}
        forceSquare
        axisTop={{ tickSize: 5, tickPadding: 5, tickRotation: -45 }}
        axisRight={null}
        axisBottom={null}
        colors={{ type: "sequential", scheme: "blues" }}
        emptyColor="#eeeeee"
        borderWidth={1}
        borderColor="#ffffff"
        enableLabels
        labelTextColor={{ from: "color", modifiers: [["darker", 2]] }}
        theme={theme}
      />
    </div>
  )
}

HeatmapChart.displayName = "HeatmapChart"

// ── Funnel Chart ──

export interface FunnelChartProps {
  data: { id: string; value: number; label?: string }[]
  height?: number
  className?: string
}

export function FunnelChart({ data, height = 400, className }: FunnelChartProps) {
  const theme = useChartTheme()
  const colors = chartColors()

  return (
    <div className={cn("h-[400px]", className)} style={{ height }}>
      <ResponsiveFunnel
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 120 }}
        valueFormat=" >-.2s"
        colors={colors}
        borderWidth={20}
        labelColor={{ from: "color", modifiers: [["darker", 3]] }}
        beforeSeparatorLength={100}
        beforeSeparatorOffset={20}
        afterSeparatorLength={100}
        afterSeparatorOffset={20}
        currentPartSizeExtension={10}
        currentBorderWidth={40}
        motionConfig="gentle"
        theme={theme}
      />
    </div>
  )
}

FunnelChart.displayName = "FunnelChart"
