"use client"

import * as React from "react"
import { motion } from "motion/react"

import { cn } from "@/lib/cn"

export interface SpinningLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  size?: number
  duration?: number
  direction?: "clockwise" | "counterclockwise"
  alt?: string
}

function SpinningLogo({
  src,
  size = 40,
  duration = 5,
  direction = "clockwise",
  alt = "logo",
  className,
  children,
  style,
  ...props
}: SpinningLogoProps) {
  const rotate = direction === "counterclockwise" ? -360 : 360

  return (
    <div
      className={cn("relative shrink-0 overflow-hidden", className)}
      style={{ width: size, height: size, ...style }}
      {...props}
    >
      {src ? (
        <motion.img
          src={src}
          alt={alt}
          className="size-full object-contain"
          animate={{ rotate }}
          transition={{ duration, ease: "linear", repeat: Infinity }}
        />
      ) : (
        <motion.div
          className="flex size-full items-center justify-center"
          animate={{ rotate }}
          transition={{ duration, ease: "linear", repeat: Infinity }}
        >
          {children}
        </motion.div>
      )}
    </div>
  )
}

SpinningLogo.displayName = "SpinningLogo"

export { SpinningLogo }

export default SpinningLogo