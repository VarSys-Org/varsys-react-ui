"use client"

import * as React from "react"
import { useId } from "react"
import { cn } from "@/lib/cn"

export interface FeatureGridGradientItem {
  title: string
  description: string
}

export interface FeatureGridGradientProps
  extends React.HTMLAttributes<HTMLDivElement> {
  features: FeatureGridGradientItem[]
  gridSize?: number
}

export function FeatureGridGradient({
  features,
  gridSize = 20,
  className,
}: FeatureGridGradientProps) {
  return (
    <div className={cn("py-20 lg:py-40", className)}>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 md:gap-2 md:grid-cols-3 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-neutral-100 to-white p-6 dark:from-neutral-900 dark:to-neutral-950"
          >
            <GridPatternBackground size={gridSize} />
            <p className="relative z-20 text-base font-bold text-neutral-800 dark:text-white">
              {feature.title}
            </p>
            <p className="relative z-20 mt-4 text-base font-normal text-neutral-600 dark:text-neutral-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

function GridPatternBackground({ size = 20 }: { size?: number }) {
  const p: [number, number][] = [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ]
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r to-zinc-300/30 from-zinc-100/30 opacity-100 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 dark:to-zinc-900/30">
        <GridPattern
          width={size}
          height={size}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full fill-black/10 stroke-black/10 mix-blend-overlay dark:fill-white/10 dark:stroke-white/10"
        />
      </div>
    </div>
  )
}

export function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  ...props
}: {
  width?: number
  height?: number
  x?: string
  y?: string
  squares?: [number, number][]
} & React.SVGProps<SVGSVGElement>) {
  const patternId = useId()

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([sx, sy]) => (
            <rect
              strokeWidth="0"
              key={`${sx}-${sy}`}
              width={(width ?? 20) + 1}
              height={(height ?? 20) + 1}
              x={sx * (width ?? 20)}
              y={sy * (height ?? 20)}
            />
          ))}
        </svg>
      )}
    </svg>
  )
}

export default FeatureGridGradient
