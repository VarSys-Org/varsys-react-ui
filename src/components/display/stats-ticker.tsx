"use client"

import * as React from "react"
import { animate, useInView } from "motion/react"

import { cn } from "@/lib/cn"

export interface StatsTickerItem {
  /** Numeric value to count up to. */
  value: number
  /** Label shown under the value. */
  label: string
  /** Text rendered before the number, e.g. "$". */
  prefix?: string
  /** Text rendered after the number, e.g. "%" or "+". */
  suffix?: string
  /** Number of decimal places shown. */
  decimals?: number
}

export interface StatsTickerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  /** Stats to display. */
  items: StatsTickerItem[]
  /** Heading shown above the stats strip. */
  title?: React.ReactNode
  /** Supporting description shown under the heading. */
  description?: React.ReactNode
}

interface TickerNumberProps {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
}

function TickerNumber({
  value,
  prefix,
  suffix,
  decimals = 0,
}: TickerNumberProps) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [display, setDisplay] = React.useState(0)

  React.useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(latest),
    })
    return () => controls.stop()
  }, [inView, value])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {display.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  )
}

export function StatsTicker({
  items,
  title = "Trusted by thousands of teams",
  description = "Powering the workflows of modern industrial teams worldwide.",
  className,
  ...props
}: StatsTickerProps) {
  return (
    <section
      data-slot="stats-ticker"
      className={cn(
        "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24",
        className,
      )}
      {...props}
    >
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-lg text-muted-foreground">{description}</p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-8 rounded-2xl border border-border bg-card p-8 text-card-foreground sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="text-center">
            <p className="text-3xl font-bold text-foreground sm:text-4xl">
              <TickerNumber
                value={item.value}
                prefix={item.prefix}
                suffix={item.suffix}
                decimals={item.decimals}
              />
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsTicker