import * as React from "react"
import { cn } from "@/lib/cn"

export interface AvatarGroupProps {
  srcs: string[]
  max?: number
  variant?: "stack" | "grid"
  alt?: string
  className?: string
}

export function AvatarGroup({
  srcs,
  max = 5,
  variant = "stack",
  alt = "Avatar",
  className,
}: AvatarGroupProps) {
  const visible = srcs.slice(0, max)
  const overflow = srcs.length - visible.length
  const overflowBadge = overflow > 0 && (
    <span className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-muted ring-2 ring-background">
      <span className="text-sm font-medium text-foreground">+{overflow}</span>
    </span>
  )

  return (
    <div
      className={cn(
        variant === "grid" ? "grid grid-cols-3 gap-4" : "flex -space-x-2",
        className
      )}
    >
      {visible.map((src) => (
        <img
          key={src}
          className="inline-block size-11 rounded-full object-cover ring-2 ring-background"
          src={src}
          alt={alt}
        />
      ))}
      {overflowBadge}
    </div>
  )
}
