import * as React from "react"
import { Meter as MeterPrimitive } from "@base-ui/react/meter"

import { cn } from "@/lib/utils"

type MeterProps = React.ComponentPropsWithoutRef<"div"> & {
  value: number
  min?: number
  max?: number
  size?: "sm" | "default" | "lg"
  label?: string
}

function Meter({
  className,
  value = 0,
  min = 0,
  max = 100,
  size = "default",
  label,
  ...props
}: MeterProps) {
  const percentage = max > min ? Math.min(((value - min) / (max - min)) * 100, 100) : 0
  const sizeClass =
    size === "sm" ? "h-1" : size === "lg" ? "h-3" : "h-2"

  return (
    <MeterPrimitive.Root
      data-slot="meter"
      value={value}
      min={min}
      max={max}
      aria-label={label}
    >
      <MeterPrimitive.Track
        data-slot="meter-track"
        className={cn(
          "relative w-full overflow-hidden rounded-full bg-secondary",
          sizeClass,
          className
        )}
      >
        <MeterPrimitive.Indicator
          data-slot="meter-indicator"
          className="flex h-full w-full items-center justify-center rounded-full bg-primary transition-all"
          style={{ transform: `translateX(-${100 - percentage}%)` }}
        />
      </MeterPrimitive.Track>
    </MeterPrimitive.Root>
  )
}

function MeterLabel({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"span">) {
  return (
    <span
      data-slot="meter-label"
      className={cn("text-sm font-medium", className)}
      {...props}
    >
      {children}
    </span>
  )
}

function MeterValue({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"span">) {
  return (
    <span
      data-slot="meter-value"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

export { Meter, MeterLabel, MeterValue }
