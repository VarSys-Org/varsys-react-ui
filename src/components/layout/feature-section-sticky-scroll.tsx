"use client"

import * as React from "react"
import { useRef, useState } from "react"
import { motion, useMotionValueEvent, useScroll } from "motion/react"

import { cn } from "@/lib/cn"

export interface FeatureSectionStickyScrollItem {
  title?: string
  description?: string
  icon?: React.ReactNode
  content?: React.ReactNode
}

export interface FeatureSectionStickyScrollProps {
  title?: string
  description?: string
  features?: FeatureSectionStickyScrollItem[]
  backgroundColors?: string[]
  className?: string
  contentClassName?: string
}

const DEFAULT_BACKGROUND_COLORS = [
  "hsl(var(--muted) / 0.4)",
  "hsl(var(--card))",
  "hsl(var(--accent) / 0.22)",
  "hsl(var(--muted) / 0.4)",
]

export function FeatureSectionStickyScroll({
  title = "Built for the way you work",
  description = "Scroll through the highlights — the content pins while you explore.",
  features = [],
  backgroundColors = DEFAULT_BACKGROUND_COLORS,
  className,
  contentClassName,
}: FeatureSectionStickyScrollProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [activeBackground, setActiveBackground] = useState<string>(backgroundColors[0] ?? DEFAULT_BACKGROUND_COLORS[0])
  const [activeIndex, setActiveIndex] = useState(0)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const colors = backgroundColors.length > 0 ? backgroundColors : DEFAULT_BACKGROUND_COLORS
    const nextIndex = Math.min(
      Math.max(features.length - 1, 0),
      Math.floor(latest * Math.max(features.length, 1))
    )
    setActiveIndex(nextIndex)
    const nextColor = colors[Math.min(colors.length - 1, nextIndex)]
    if (nextColor) setActiveBackground(nextColor)
  })

  const activeFeature = features[activeIndex]

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full overflow-hidden transition-colors duration-500 ease-out",
        className
      )}
      style={{ backgroundColor: activeBackground }}
    >
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10">
        {title ? (
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            {title}
          </h2>
        ) : null}
        {description ? (
          <p className="mt-4 max-w-sm text-base text-muted-foreground md:text-lg">
            {description}
          </p>
        ) : null}

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-14">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col gap-3">
                {feature.icon ? (
                  <div className="flex size-11 items-center justify-center rounded-lg border border-border bg-background/60 text-foreground">
                    {feature.icon}
                  </div>
                ) : null}
                {feature.title ? (
                  <h3 className="text-xl font-semibold text-foreground md:text-2xl">
                    {feature.title}
                  </h3>
                ) : null}
                {feature.description ? (
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                ) : null}
              </div>
            ))}
          </div>

          <div className="lg:sticky lg:top-24 lg:h-fit">
            {activeFeature?.content ? (
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className={cn("w-full", contentClassName)}
              >
                {activeFeature.content}
              </motion.div>
            ) : (
              <div className="flex min-h-64 w-full items-center justify-center rounded-2xl border border-border bg-background/60 p-10 text-center text-sm text-muted-foreground">
                Sticky content area — pass <span className="font-mono text-foreground">content</span> per feature.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

FeatureSectionStickyScroll.displayName = "FeatureSectionStickyScroll"

export default FeatureSectionStickyScroll