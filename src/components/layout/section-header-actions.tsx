import * as React from "react"
import { cn } from "@/lib/cn"

export interface SectionHeaderActionsProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title: React.ReactNode
  description?: React.ReactNode
  /** Action elements rendered on the right (buttons, links, etc.). */
  actions?: React.ReactNode
  /** Render the bottom divider line (dashboard style). */
  divider?: boolean
}

export function SectionHeaderActions({
  title,
  description,
  actions,
  divider = true,
  className,
  ...props
}: SectionHeaderActionsProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between",
        divider && "border-b border-border",
        className,
      )}
      {...props}
    >
      <div className="min-w-0">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">{title}</h2>
        {description ? (
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        ) : null}
      </div>

      {actions ? (
        <div className="flex shrink-0 flex-wrap items-center gap-x-3 gap-y-2">
          {actions}
        </div>
      ) : null}
    </div>
  )
}

export default SectionHeaderActions