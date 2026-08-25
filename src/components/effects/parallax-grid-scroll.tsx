"use client"

import * as React from "react"
import { motion, useScroll, useTransform, type MotionValue } from "motion/react"

import { cn } from "@/lib/cn"

export interface ParallaxGridItem {
  /** Card heading. */
  title: string
  /** Short supporting description. */
  description: string
  /** Optional image rendered at the top of the card. */
  image?: string
  /** Optional destination URL. */
  link?: string
  /** Optional badge text rendered on the image. */
  badge?: string
}

export interface ParallaxGridScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Cards distributed across the three columns. */
  items: ParallaxGridItem[]
  /** Reverse the middle column scroll direction. */
  reverse?: boolean
  /** Tailwind gap classes between columns. */
  gap?: string
  /** Extra translate percentage applied on full scroll. */
  travel?: string
}

function GridCard({ item }: { item: ParallaxGridItem }) {
  const Wrapper = item.link ? "a" : "div"
  return (
    <Wrapper
      href={item.link}
      className="group block overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-colors duration-300 hover:border-primary/40"
    >
      {item.image && (
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={item.image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {item.badge && (
            <span className="absolute left-3 top-3 rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
              {item.badge}
            </span>
          )}
        </div>
      )}
      <div className="p-5">
        <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
        <p className="mt-1.5 line-clamp-3 text-sm text-muted-foreground">{item.description}</p>
      </div>
    </Wrapper>
  )
}

export function ParallaxGridScroll({
  items,
  reverse = false,
  gap = "gap-6",
  travel = "50%",
  className,
  ...props
}: ParallaxGridScrollProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] })

  const middleY = useTransform(scrollYProgress, [0, 1], ["0%", travel])
  const sideY: MotionValue<string> = useTransform(scrollYProgress, [0, 1], ["0%", `-${travel}`])

  const columns = [0, 1, 2].map((col) => items.filter((_, index) => index % 3 === col))

  return (
    <div ref={ref} className={cn("grid grid-cols-1 md:grid-cols-3", gap, className)} {...props}>
      <motion.div style={{ y: reverse ? middleY : sideY }} className="space-y-6">
        {columns[0].map((item, index) => (
          <GridCard key={index} item={item} />
        ))}
      </motion.div>
      <motion.div style={{ y: reverse ? sideY : middleY }} className="space-y-6">
        {columns[1].map((item, index) => (
          <GridCard key={index} item={item} />
        ))}
      </motion.div>
      <motion.div style={{ y: reverse ? middleY : sideY }} className="space-y-6">
        {columns[2].map((item, index) => (
          <GridCard key={index} item={item} />
        ))}
      </motion.div>
    </div>
  )
}

export default ParallaxGridScroll
