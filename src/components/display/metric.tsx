import * as React from "react"
import { cn } from "@/lib/cn"

export interface MetricProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export function Metric({ className, ...props }: MetricProps) {
  return (
    <p
      data-slot="metric"
      className={cn(
        "text-3xl font-semibold text-foreground tracking-tight tabular-nums sm:text-4xl",
        className
      )}
      {...props}
    />
  )
}

export default Metric
