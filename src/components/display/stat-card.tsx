import * as React from "react"
import { ArrowDownRightIcon, ArrowUpRightIcon } from "lucide-react"
import { cn } from "@/lib/cn"

export interface StatCardProps extends React.HTMLAttributes<HTMLElement> {
  label: string
  value: string
  change?: number
  comparison?: string
}

export function StatCard({
  label,
  value,
  change,
  comparison = "Since last week",
  className,
  ...props
}: StatCardProps) {
  const positive = (change ?? 0) >= 0

  return (
    <article
      className={cn("rounded-lg border border-border bg-card p-6", className)}
      {...props}
    >
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="text-2xl font-medium text-foreground">{value}</p>
      </div>

      {typeof change === "number" ? (
        <div
          className={cn(
            "mt-1 flex gap-1",
            positive ? "text-green-600" : "text-red-600"
          )}
        >
          {positive ? (
            <ArrowUpRightIcon aria-hidden="true" className="size-4" />
          ) : (
            <ArrowDownRightIcon aria-hidden="true" className="size-4" />
          )}

          <span className="sr-only">
            {positive ? "Increase: " : "Decrease: "}
          </span>

          <p className="flex gap-2 text-xs">
            <span className="font-medium">{Math.abs(change).toFixed(2)}%</span>
            <span className="text-muted-foreground">{comparison}</span>
          </p>
        </div>
      ) : null}
    </article>
  )
}
