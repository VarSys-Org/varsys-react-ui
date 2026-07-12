"use client"

import { useAutoAnimate } from "@formkit/auto-animate/react"
import { cn } from "@/lib/utils"

export interface AnimateListProps {
  children: React.ReactNode
  className?: string
  as?: "ul" | "div" | "ol"
}

export function AnimateList({ children, className, as = "div" }: AnimateListProps) {
  const [parent] = useAutoAnimate({ duration: 250, easing: "ease-in-out" })
  const Tag = as as any

  return (
    <Tag ref={parent} className={cn(className)}>
      {children}
    </Tag>
  )
}

AnimateList.displayName = "AnimateList"

export function useListAnimation(config?: { duration?: number; easing?: string }) {
  const [parent] = useAutoAnimate({ duration: config?.duration ?? 250, easing: config?.easing ?? "ease-in-out" })
  return parent
}
