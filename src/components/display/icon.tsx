"use client"

import React from "react"
import { cn } from "@/lib/cn"

export type IconVariant = "simple" | "light" | "shadow" | "solid" | "outlined"
export type IconSize = "xs" | "sm" | "md" | "lg" | "xl"

const wrapperSizes: Record<IconSize, string> = {
  xs: "p-1.5",
  sm: "p-1.5",
  md: "p-2",
  lg: "p-2",
  xl: "p-2.5",
}

const iconSizes: Record<IconSize, string> = {
  xs: "size-3",
  sm: "size-5",
  md: "size-5",
  lg: "size-7",
  xl: "size-9",
}

const variantClasses: Record<IconVariant, string> = {
  simple: "text-primary",
  light: "bg-primary/15 text-primary",
  shadow: "border border-border bg-background text-primary shadow-sm",
  solid: "bg-primary text-primary-foreground",
  outlined: "border border-primary/40 bg-background text-primary ring-2 ring-primary/20",
}

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Icon component, e.g. lucide-react icon. */
  icon: React.ComponentType<{ className?: string }>
  variant?: IconVariant
  tooltip?: string
  size?: IconSize
  color?: string
}

export const Icon = React.forwardRef<HTMLSpanElement, IconProps>(
  ({ icon: IconComponent, variant = "simple", tooltip, size = "md", color, className, ...props }, forwardedRef) => {
    return (
      <span
        ref={forwardedRef}
        title={tooltip}
        className={cn(
          "inline-flex w-fit shrink-0 items-center justify-center rounded-lg",
          wrapperSizes[size],
          variantClasses[variant],
          className,
        )}
        style={color && variant !== "solid" ? { color } : undefined}
        {...props}
      >
        <IconComponent className={cn(iconSizes[size])} aria-hidden="true" />
      </span>
    )
  },
)

Icon.displayName = "Icon"
