"use client"

import React from "react"
import { cn } from "@/lib/cn"

export interface TitleProps extends React.HTMLAttributes<HTMLParagraphElement> {
  color?: string
}

export const Title = React.forwardRef<HTMLParagraphElement, TitleProps>(
  ({ color, children, className, ...props }, forwardedRef) => {
    return (
      <p
        ref={forwardedRef}
        className={cn("text-xl font-medium text-foreground", className)}
        style={color ? { color } : undefined}
        {...props}
      >
        {children}
      </p>
    )
  },
)

Title.displayName = "Title"
