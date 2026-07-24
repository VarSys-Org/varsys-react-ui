"use client"

import React from "react"
import { motion, useScroll, useMotionValueEvent } from "motion/react"
import { cn } from "@/lib/utils"

export const StickyBanner = ({
  children,
  className,
  hideOnScroll = false,
}: {
  children: React.ReactNode
  className?: string
  hideOnScroll?: boolean
}) => {
  const [hidden, setHidden] = React.useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (hideOnScroll && latest > 40) {
      setHidden(true)
    } else if (hideOnScroll && latest <= 40) {
      setHidden(false)
    }
  })

  return (
    <motion.div
      animate={{
        y: hidden ? -100 : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 30,
      }}
      className={cn(
        "sticky top-0 z-50 flex w-full items-center justify-center px-4 py-3 text-sm",
        className
      )}
    >
      {children}
    </motion.div>
  )
}
