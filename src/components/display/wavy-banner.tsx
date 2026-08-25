"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "motion/react"

import { cn } from "@/lib/cn"

export interface WavyBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Tailwind gradient classes for each column, e.g. "from-red-500 to-orange-300". */
  data: string[]
  /** Width of each column in pixels. */
  dataWidth: number
  /** Word rendered inside every column. */
  text?: string
  /** Height of the banner. */
  height?: number | string
}

export function WavyBanner({
  data,
  dataWidth,
  text = "VARSYS",
  height = 500,
  className,
  ...props
}: WavyBannerProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref })

  return (
    <div
      ref={ref}
      data-slot="wavy-banner"
      className={cn("relative w-full overflow-hidden", className)}
      style={{ height }}
      {...props}
    >
      <div className="flex h-full" style={{ width: data.length * dataWidth }}>
        {data.map((item, index) => {
          const y = useTransform(scrollYProgress, [0, 1], [0, index % 2 === 0 ? 100 : -100])
          return (
            <div key={index} className="relative h-full shrink-0" style={{ width: dataWidth }}>
              <motion.div
                style={{ y }}
                className={cn(
                  "flex h-full items-center justify-center bg-gradient-to-b bg-clip-text text-transparent",
                  item,
                )}
              >
                <span className="text-[16vh] font-black uppercase leading-none tracking-tighter">
                  {text}
                </span>
              </motion.div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default WavyBanner
