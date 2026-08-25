"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring, useTransform } from "motion/react"

import { cn } from "@/lib/cn"

export interface CircularGalleryItem {
  /** Image source of the item. */
  image: string
  /** Accessible label for the image. */
  alt?: string
}

export interface CircularGalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Items rendered around the circular wave. */
  items: CircularGalleryItem[]
  /** Horizontal spacing between items in pixels. */
  gap?: number
  /** Vertical amplitude of the wave in pixels. */
  amplitude?: number
  /** Maximum tilt in degrees applied while waving. */
  maxRotate?: number
  /** Height of the viewport. */
  height?: number | string
  /** Height of each rendered image. */
  imageHeight?: number | string
  /** Width of each rendered image. */
  imageWidth?: number | string
}

export function CircularGallery({
  items,
  gap = 220,
  amplitude = 180,
  maxRotate = 24,
  height = 420,
  imageHeight = "300px",
  imageWidth = "200px",
  className,
  ...props
}: CircularGalleryProps) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 60, damping: 16, mass: 0.6 })
  const itemCount = items.length
  const centerOffset = ((itemCount - 1) * gap) / 2

  React.useEffect(() => {
    const element = containerRef.current
    if (!element) return
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault()
      x.set(x.get() - event.deltaY * 0.6)
    }
    element.addEventListener("wheel", handleWheel, { passive: false })
    return () => element.removeEventListener("wheel", handleWheel)
  }, [x])

  return (
    <div
      ref={containerRef}
      data-slot="circular-gallery"
      className={cn(
        "relative w-full cursor-grab touch-pan-y select-none overflow-hidden active:cursor-grabbing",
        className,
      )}
      style={{ height }}
      {...props}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-32 bg-gradient-to-l from-background to-transparent" />

      <motion.div style={{ x: springX }} className="absolute inset-0" drag="x">
        {items.map((item, index) => {
          const y = useTransform(springX, (value) => Math.sin((value + index * gap) / 120) * amplitude)
          const rotate = useTransform(springX, (value) => Math.sin((value + index * gap) / 120) * maxRotate)
          const scale = useTransform(springX, (value) => 0.85 + (Math.sin((value + index * gap) / 120) + 1) * 0.1)

          return (
            <motion.div
              key={index}
              className="absolute left-1/2 top-1/2"
              style={{ x: index * gap - centerOffset, y, rotate, scale }}
            >
              <div className="-translate-x-1/2 -translate-y-1/2">
                <img
                  src={item.image}
                  alt={item.alt ?? ""}
                  draggable={false}
                  className="rounded-xl object-cover shadow-lg ring-1 ring-border"
                  style={{ height: imageHeight, width: imageWidth }}
                />
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default CircularGallery
