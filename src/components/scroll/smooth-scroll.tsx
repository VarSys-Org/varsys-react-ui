"use client"

import React, { useRef, useEffect } from "react"
import Lenis from "lenis"
import { cn } from "@/lib/utils"

export interface SmoothScrollProps {
  children: React.ReactNode
  duration?: number
  easing?: (t: number) => number
  smoothWheel?: boolean
  className?: string
}

export function SmoothScroll({
  children,
  duration = 1.2,
  easing,
  smoothWheel = true,
  className,
}: SmoothScrollProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return

    const lenis = new Lenis({
      wrapper,
      content: wrapper.firstElementChild as HTMLElement,
      duration,
      easing,
      smoothWheel,
      orientation,
    } as any)

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [duration, easing, smoothWheel])

  return (
    <div ref={wrapperRef} className={cn("h-full overflow-hidden", className)}>
      <div>{children}</div>
    </div>
  )
}

SmoothScroll.displayName = "SmoothScroll"

export interface ScrollSnapProps {
  children: React.ReactNode
  className?: string
}

export function ScrollSnap({ children, className }: ScrollSnapProps) {
  return (
    <div className={cn("h-screen snap-y snap-mandatory overflow-y-scroll", className)}>
      {React.Children.map(children, (child, i) => (
        <div key={i} className="snap-start h-screen">
          {child}
        </div>
      ))}
    </div>
  )
}

ScrollSnap.displayName = "ScrollSnap"
