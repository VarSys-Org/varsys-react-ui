"use client"

import * as React from "react"
import { cn } from "@/lib/cn"
import { Copy } from "lucide-react"

export interface ButtonsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  dotBackground?: boolean
  onCopy?: () => void
}

export function ButtonsCard({
  children,
  className,
  dotBackground = true,
  onCopy,
  ...props
}: ButtonsCardProps) {
  return (
    <div
      className={cn(
        "group relative flex h-60 w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-colors hover:border-border/80",
        className
      )}
      {...props}
    >
      {dotBackground && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, hsl(var(--border)) 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />
      )}
      <button
        type="button"
        aria-label="Copy button markup"
        onClick={onCopy}
        className="absolute right-2 top-2 z-10 hidden h-4 w-4 text-muted-foreground transition group-hover:block"
      >
        <Copy className="h-4 w-4" />
      </button>
      <div className="relative z-40">{children}</div>
    </div>
  )
}

export default ButtonsCard
