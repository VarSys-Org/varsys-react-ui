"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface GridBackgroundProps
  extends React.HTMLAttributes<HTMLDivElement> {
  gridColor?: string
  mask?: boolean
}

export function GridBackground({
  gridColor = "rgba(255,255,255,0.1)",
  mask = true,
  className,
  children,
  ...props
}: GridBackgroundProps) {
  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center bg-background",
        className
      )}
      style={{
        backgroundImage: [
          `linear-gradient(to right, ${gridColor} 1px, transparent 1px)`,
          `linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)`,
        ].join(","),
        backgroundSize: "60px 60px",
      }}
      {...props}
    >
      {mask && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      )}
      {children && <div className="relative z-20">{children}</div>}
    </div>
  )
}

export default GridBackground
