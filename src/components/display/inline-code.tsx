import type { HTMLAttributes } from "react"
import { forwardRef } from "react"

import { cn } from "@/lib/cn"

export interface InlineCodeProps extends HTMLAttributes<HTMLElement> {
  variant?: string
  size?: string
  color?: string
}

export const InlineCode = forwardRef<HTMLElement, InlineCodeProps>(
  ({ children, className, variant = "default", size = "sm", color, ...props }, ref) => {
    return (
      <code
        ref={ref}
        className={cn(
          "rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[0.9em] text-foreground",
          size === "lg" && "text-[1em] px-2 py-1",
          size === "xs" && "text-[0.75em] px-1",
          variant === "outline" && "border-input bg-transparent",
          variant === "ghost" && "border-transparent bg-transparent",
          color === "primary" && "border-primary/30 bg-primary/10 text-primary",
          color === "destructive" &&
            "border-destructive/30 bg-destructive/10 text-destructive",
          color === "success" && "border-emerald-500/30 bg-emerald-500/10 text-emerald-600",
          color === "warning" && "border-amber-500/30 bg-amber-500/10 text-amber-600",
          className,
        )}
        {...props}
      >
        {children}
      </code>
    )
  },
)

InlineCode.displayName = "InlineCode"

export default InlineCode