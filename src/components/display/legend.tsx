"use client"

import React, { useEffect, useCallback, useState, useRef } from "react"
import { cn } from "@/lib/cn"

export interface LegendItemProps {
  name: string
  color: string
  onClick?: (name: string, color: string) => void
  activeLegend?: string
}

const LegendItem = ({ name, color, onClick, activeLegend }: LegendItemProps) => {
  const hasOnValueChange = !!onClick
  return (
    <li
      className={cn(
        "group inline-flex items-center px-2 py-0.5 text-sm whitespace-nowrap transition",
        hasOnValueChange ? "cursor-pointer" : "cursor-default",
        hasOnValueChange ? "hover:bg-muted" : "",
        activeLegend !== undefined && activeLegend !== name && "opacity-40",
      )}
      onClick={(e) => {
        e.stopPropagation()
        onClick?.(name, color)
      }}
    >
      <span
        aria-hidden="true"
        className={cn("mr-1.5 inline-block size-2.5 shrink-0 rounded-full")}
        style={{ backgroundColor: color }}
      />
      <span className="truncate text-foreground">{name}</span>
    </li>
  )
}

export interface LegendProps extends React.HTMLAttributes<HTMLDivElement> {
  categories: string[]
  colors?: string[]
  onClickLegendItem?: (category: string, color: string) => void
  activeLegend?: string
  enableLegendSlider?: boolean
}

export const Legend = ({
  categories,
  colors = [],
  onClickLegendItem,
  activeLegend,
  enableLegendSlider = false,
  className,
}: LegendProps) => {
  const scrollableRef = useRef<HTMLDivElement>(null)
  const [hasScroll, setHasScroll] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  const itemColors = categories.map((_, idx) => colors[idx] || `hsl(${(idx * 37) % 360}, 70%, 50%)`)

  const checkScroll = useCallback(() => {
    const el = scrollableRef.current
    if (!el) return
    setHasScroll(el.scrollWidth > el.clientWidth)
  }, [])

  useEffect(() => {
    checkScroll()
    window.addEventListener("resize", checkScroll)
    return () => window.removeEventListener("resize", checkScroll)
  }, [categories, checkScroll])

  const scrollBy = (amount: number) => {
    const el = scrollableRef.current
    if (!el) return
    el.scrollBy({ left: amount, behavior: "smooth" })
  }

  const handleScroll = () => {
    const el = scrollableRef.current
    if (!el) return
    setScrollPosition(el.scrollLeft)
  }

  return (
    <div
      className={cn(
        "flex w-full items-center justify-between overflow-hidden",
        className,
      )}
    >
      <div
        ref={scrollableRef}
        onScroll={handleScroll}
        className="no-scrollbar flex w-full gap-1 overflow-x-auto"
      >
        {categories.map((category, idx) => (
          <LegendItem
            key={`item-${idx}`}
            name={category}
            color={itemColors[idx]}
            onClick={onClickLegendItem}
            activeLegend={activeLegend}
          />
        ))}
      </div>
      {enableLegendSlider && hasScroll && (
        <div className="ml-2 flex shrink-0 items-center gap-1">
          <button
            type="button"
            aria-label="Scroll legend left"
            disabled={scrollPosition === 0}
            onClick={() => scrollBy(-100)}
            className="inline-flex size-5 items-center justify-center rounded text-muted-foreground hover:bg-muted hover:text-foreground disabled:opacity-40"
          >
            <svg
              className="size-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Scroll legend right"
            onClick={() => scrollBy(100)}
            className="inline-flex size-5 items-center justify-center rounded text-muted-foreground hover:bg-muted hover:text-foreground disabled:opacity-40"
          >
            <svg
              className="size-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}
