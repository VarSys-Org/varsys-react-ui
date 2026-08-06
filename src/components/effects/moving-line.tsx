"use client"

import * as React from "react"
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type Transition,
} from "motion/react"

import { cn } from "@/lib/utils"

export interface MovingLineItem {
  title?: string
  description?: string
  children?: React.ReactNode
}

export interface MovingLineProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: MovingLineItem[]
  pathLength?: number
  duration?: number
  accentColor?: string
}

function MovingLineContent({ title, description, children }: MovingLineItem) {
  return (
    <div className="content w-full mb-10">
      <p className="text-2xl font-bold text-foreground">{title}</p>
      <p className="text-base font-normal text-muted-foreground">{description}</p>
      {children}
    </div>
  )
}

export function MovingLine({
  items = [],
  pathLength = 1,
  duration = 14,
  accentColor = "hsl(var(--primary))",
  className,
  children,
}: MovingLineProps) {
  const transition: Transition = {
    duration,
    ease: "easeInOut",
  }

  const ref = React.useRef<HTMLDivElement | null>(null)
  const gradientId = React.useId()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  })

  const pathLengthValue = useTransform(scrollYProgress, [0, 1], [pathLength, 0])
  const height = 1567

  const content =
    items.length > 0 ? (
      items.map((item, index) => <MovingLineContent key={index} {...item} />)
    ) : (
      <MovingLineContent
        title="The path follows the scroll"
        description="If you look closely, you can see the path is being animated."
      >
        <div className="flex space-x-4 w-full">
          <div className="w-full h-40 md:h-96 rounded-md bg-gradient-to-tr from-muted to-muted-foreground/20 mt-4" />
          <div className="w-full h-40 md:h-96 rounded-md bg-gradient-to-tr from-muted to-muted-foreground/20 mt-4" />
        </div>
      </MovingLineContent>
    )

  return (
    <div
      className={cn(
        "max-w-4xl mx-auto flex flex-row space-x-10 items-start w-full",
        className
      )}
      ref={ref}
    >
      <svg
        width="1"
        height={height}
        viewBox={`0 0 1 ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path d="M0.5 0.980671L0.5 1566.02" stroke={`url(#${gradientId})`} />
        <defs>
          <linearGradient
            id={gradientId}
            x1="1"
            y1="-102.823"
            x2="1"
            y2="1566.02"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={accentColor} stopOpacity="0" />
            <stop offset="1" stopColor={accentColor} />
          </linearGradient>
        </defs>
        <motion.path
          style={{
            pathLength: useSpring(pathLengthValue, {
              stiffness: 500,
              damping: 100,
            }),
          }}
          transition={transition}
          d="M0.5 0.980671L0.5 1566.02"
          stroke={accentColor}
          strokeOpacity="1"
          strokeLinecap="round"
          strokeWidth="3"
        />
      </svg>
      <div className="flex flex-col w-full">
        {content}
        {children}
      </div>
    </div>
  )
}

export default MovingLine
