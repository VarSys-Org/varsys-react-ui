"use client"

import * as React from "react"
import { useEffect, useRef, useState } from "react"
import { motion } from "motion/react"
import { Check, LoaderCircle } from "lucide-react"

import { cn } from "@/lib/cn"

export interface DynamicIslandState {
  label: string
  icon?: React.ReactNode
  /** How long (ms) this state stays visible before advancing. */
  duration?: number
}

export interface DynamicIslandProps {
  states?: DynamicIslandState[]
  /** Fallback duration (ms) per state when the state does not specify one. */
  interval?: number
  className?: string
  labelClassName?: string
}

const DEFAULT_STATES: DynamicIslandState[] = [
  { label: "Idle" },
  { label: "Processing…", icon: <LoaderCircle className="size-4 animate-spin" /> },
  { label: "Done", icon: <Check className="size-4" /> },
]

export function DynamicIsland({
  states = DEFAULT_STATES,
  interval = 2000,
  className,
  labelClassName,
}: DynamicIslandProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (states.length <= 1) return

    const activeState = states[activeIndex]
    const activeDuration = activeState?.duration ?? interval

    timerRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % states.length)
    }, activeDuration)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [activeIndex, interval, states])

  const activeState = states[activeIndex] ?? DEFAULT_STATES[0]

  return (
    <div className={cn("flex w-full justify-center", className)}>
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="flex min-w-16 items-center justify-center gap-2 rounded-full bg-foreground px-4 py-2 text-background shadow-lg"
      >
        {activeState.icon ? <span className="flex shrink-0">{activeState.icon}</span> : null}
        <motion.span
          key={activeIndex}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className={cn("whitespace-nowrap text-sm font-medium", labelClassName)}
        >
          {activeState.label}
        </motion.span>
      </motion.div>
    </div>
  )
}

DynamicIsland.displayName = "DynamicIsland"

export default DynamicIsland