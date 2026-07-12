"use client"

import React from "react"
import { cn } from "@/lib/utils"

export interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right" | "none"
  delay?: number
  duration?: number
  once?: boolean
}

export function ScrollReveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 600,
  once = true,
}: ScrollRevealProps) {
  const animations: Record<string, string> = {
    up: "animate-slide-up",
    down: "animate-slide-down",
    left: "animate-slide-left",
    right: "animate-slide-right",
    none: "animate-fade-in",
  }

  return (
    <div
      className={cn(
        "animate-fade-in",
        direction !== "none" && animations[direction],
        className,
      )}
      style={{
        animationDuration: `${duration}ms`,
        animationDelay: `${delay}ms`,
        animationFillMode: "both",
        animationTimeline: once ? "view()" : undefined,
      }}
    >
      {children}
    </div>
  )
}

ScrollReveal.displayName = "ScrollReveal"

export interface ParallaxScrollProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export function ParallaxScroll({ children, speed = 0.5, className }: ParallaxScrollProps) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <div
        style={{
          animation: `parallax linear both`,
          animationTimeline: "scroll()",
          animationRange: "contain 0% contain 100%",
          transform: `translateY(calc(var(--parallax-speed) * 100px))`,
          ["--parallax-speed" as string]: String(speed),
        }}
      >
        {children}
      </div>
    </div>
  )
}

ParallaxScroll.displayName = "ParallaxScroll"

export interface ScrollProgressBarProps {
  className?: string
  color?: string
}

export function ScrollProgressBar({ className, color }: ScrollProgressBarProps) {
  return (
    <div
      className={cn(
        "fixed top-0 left-0 z-50 h-1 origin-left",
        className,
      )}
      style={{
        backgroundColor: color || "var(--primary)",
        animation: "scroll-progress linear both",
        animationTimeline: "scroll()",
      }}
    />
  )
}

ScrollProgressBar.displayName = "ScrollProgressBar"
