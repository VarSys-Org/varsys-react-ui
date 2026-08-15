"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface ScrollFadeProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "vertical" | "horizontal"
  edges?: "both" | "start" | "end"
  fadeSize?: number
  className?: string
  contentClassName?: string
}

export function ScrollFade({
  direction = "vertical",
  edges = "both",
  fadeSize = 32,
  className,
  contentClassName,
  children,
  ...props
}: ScrollFadeProps) {
  const viewportRef = React.useRef<HTMLDivElement>(null)
  const [mask, setMask] = React.useState("")

  React.useLayoutEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    const update = () => {
      const scrollable = direction === "vertical"
      const hasOverflow = scrollable
        ? viewport.scrollHeight - viewport.clientHeight > 0
        : viewport.scrollWidth - viewport.clientWidth > 0

      if (!hasOverflow) {
        setMask("")
        return
      }

      const axis = scrollable ? "to bottom" : "to right"
      const topSize = edges === "both" || edges === "start" ? fadeSize : 0
      const bottomSize = edges === "both" || edges === "end" ? fadeSize : 0

      if (topSize === 0 && bottomSize === 0) {
        setMask("")
        return
      }

      const stops = [
        topSize > 0 ? `transparent 0, black ${topSize}px` : `black 0`,
        `black calc(100% - ${bottomSize}px)`,
        bottomSize > 0 ? `transparent 100%` : `black 100%`,
      ].join(", ")

      setMask(`linear-gradient(${axis}, ${stops})`)
    }

    update()
    viewport.addEventListener("scroll", update, { passive: true })
    const observer = new ResizeObserver(update)
    observer.observe(viewport)
    return () => {
      viewport.removeEventListener("scroll", update)
      observer.disconnect()
    }
  }, [direction, edges, fadeSize])

  return (
    <div
      ref={viewportRef}
      className={cn(
        "relative",
        direction === "vertical" ? "overflow-y-auto" : "overflow-x-auto",
        className,
      )}
      style={{ maskImage: mask, WebkitMaskImage: mask }}
      {...props}
    >
      <div className={cn("contents", contentClassName)}>{children}</div>
    </div>
  )
}

export default ScrollFade
