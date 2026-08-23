"use client"

import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react"
import React, { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/cn"

export interface StickyTimelineEntry {
  /** Sticky title shown next to the entry marker. */
  title: string
  /** Body content rendered next to the entry. */
  content: React.ReactNode
}

export interface StickyTimelineProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  /** Timeline entries to render. */
  data: StickyTimelineEntry[]
  /** Heading shown above the timeline. */
  title?: React.ReactNode
  /** Supporting description shown under the heading. */
  description?: React.ReactNode
}

export function StickyTimeline({
  data,
  title = "Changelog from my journey",
  description = "Here's a timeline of my journey.",
  className,
  ...props
}: StickyTimelineProps) {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      setHeight(rect.height)
    }
  }, [ref])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <div
      data-slot="sticky-timeline"
      ref={containerRef}
      className={cn("w-full bg-background md:px-10", className)}
      {...props}
    >
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10">
        <h2 className="max-w-4xl text-lg text-foreground md:text-4xl">
          {title}
        </h2>
        <p className="mt-4 max-w-sm text-sm text-muted-foreground md:text-base">
          {description}
        </p>
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:gap-10 md:pt-40"
          >
            <div className="sticky top-40 z-40 flex w-full max-w-xs flex-col items-center self-start md:flex-row md:w-full lg:max-w-sm">
              <div className="absolute left-3 flex size-10 items-center justify-center rounded-full bg-card md:left-3">
                <div className="size-4 rounded-full border border-border bg-muted p-2" />
              </div>
              <h3 className="hidden text-xl font-bold text-muted-foreground md:block md:pl-20 md:text-5xl">
                {item.title}
              </h3>
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <h3 className="mb-4 block text-left text-2xl font-bold text-muted-foreground md:hidden">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{ height: height + "px" }}
          className="absolute top-0 left-8 w-[2px] overflow-hidden bg-gradient-to-b from-transparent from-[0%] via-border via-[50%] to-transparent to-[99%] md:left-8 [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-primary via-primary/50 to-transparent from-[0%] via-[10%]"
          />
        </div>
      </div>
    </div>
  )
}

export default StickyTimeline