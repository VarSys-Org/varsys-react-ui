"use client"

import { motion } from "motion/react"
import { useState } from "react"

import { cn } from "@/lib/cn"

export interface AnimatedCheckboxProps {
  title?: string
  defaultChecked?: boolean
  className?: string
  onCheckedChange?: (checked: boolean) => void
}

const springTransition = {
  type: "spring" as const,
  duration: 0.4,
  bounce: 0.2,
}

export function AnimatedCheckbox({
  title = "Implement Checkbox",
  defaultChecked = false,
  className,
  onCheckedChange,
}: AnimatedCheckboxProps) {
  const [checked, setChecked] = useState(defaultChecked)

  const handleClick = () => {
    const newChecked = !checked
    setChecked(newChecked)
    onCheckedChange?.(newChecked)
  }

  return (
    <div
      className={cn("flex cursor-pointer select-none items-center gap-3", className)}
      onClick={handleClick}
    >
      <div
        className={cn(
          "flex size-4.5 items-center justify-center rounded-[6px] border-[1.5px] transition-colors duration-200",
          checked
            ? "border-transparent bg-foreground"
            : "border-muted-foreground/40 bg-transparent hover:border-muted-foreground/60",
        )}
      >
        <svg viewBox="0 0 20 20" className="size-full text-background">
          <motion.path
            d="M 0 4.5 L 3.182 8 L 10 0"
            fill="transparent"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(5 6)"
            initial={{ pathLength: defaultChecked ? 1 : 0, opacity: defaultChecked ? 1 : 0 }}
            animate={{
              pathLength: checked ? 1 : 0,
              opacity: checked ? 1 : 0,
            }}
            transition={{
              pathLength: { ease: "easeOut", duration: 0.3 },
              opacity: { duration: 0 },
            }}
          />
        </svg>
      </div>
      <div className="relative">
        <span
          className={cn(
            "text-base font-medium transition-colors duration-200",
            checked ? "text-muted-foreground" : "text-foreground",
          )}
        >
          {title}
        </span>
        <motion.div
          className="absolute left-0 top-1/2 h-[1.5px] -translate-y-1/2 bg-muted-foreground"
          initial={{ width: defaultChecked ? "100%" : 0, opacity: defaultChecked ? 1 : 0 }}
          animate={{
            width: checked ? "100%" : 0,
            opacity: checked ? 1 : 0,
          }}
          transition={springTransition}
        />
      </div>
    </div>
  )
}

export default AnimatedCheckbox