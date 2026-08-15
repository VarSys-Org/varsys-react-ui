"use client"

import React from "react"
import { cn } from "@/lib/cn"

export const Italic = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <i ref={forwardedRef} className={cn("italic text-inherit", className)} {...props}>
        {children}
      </i>
    )
  },
)

Italic.displayName = "Italic"
