"use client"

import React from "react"
import { cn } from "@/lib/cn"

export interface SubtitleProps extends React.HTMLAttributes<HTMLParagraphElement> {
  color?: string
}

export const Subtitle = React.forwardRef<HTMLParagraphElement, SubtitleProps>(
  ({ color, children, className, ...props }, forwardedRef) => {
    return (
      <p
        ref={forwardedRef}
        className={cn("text-sm text-muted-foreground", className)}
        style={color ? { color } : undefined}
        {...props}
      >
        {children}
      </p>
    )
  },
)

Subtitle.displayName = "Subtitle"
