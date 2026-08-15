"use client"

import React from "react"
import { cn } from "@/lib/cn"

export const Bold = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <b ref={forwardedRef} className={cn("font-bold text-inherit", className)} {...props}>
        {children}
      </b>
    )
  },
)

Bold.displayName = "Bold"
