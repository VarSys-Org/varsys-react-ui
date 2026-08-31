"use client"

import * as React from "react"
import { Check, X } from "lucide-react"
import { cn } from "@/lib/cn"

export interface ComparisonPlan {
  id: string
  name: string
  price?: string
  period?: string
  /** CTA button label. Omit to hide the button. */
  cta?: string
  /** Highlights the column as the recommended plan. */
  featured?: boolean
}

export interface ComparisonRow {
  label: string
  /** One value per plan. `true`/`false` render check/cross icons, strings render text. */
  values: Array<boolean | string>
}

export interface ComparisonGroup {
  title: string
  rows: ComparisonRow[]
}

export interface FeatureComparisonTableProps
  extends React.HTMLAttributes<HTMLDivElement> {
  plans: ComparisonPlan[]
  groups: ComparisonGroup[]
  className?: string
}

export function FeatureComparisonTable({
  plans,
  groups,
  className,
  ...props
}: FeatureComparisonTableProps) {
  const columns = plans.length
  const featureCell = (value: boolean | string) => {
    if (value === true) {
      return (
        <Check
          className="mx-auto size-5 text-emerald-500"
          strokeWidth={2.5}
          aria-label="Included"
        />
      )
    }
    if (value === false) {
      return (
        <X
          className="mx-auto size-5 text-muted-foreground/50"
          strokeWidth={2.5}
          aria-label="Not included"
        />
      )
    }
    return <span className="text-sm font-medium text-foreground">{value}</span>
  }

  const planCellClass = (featured?: boolean) =>
    cn("border-b border-border px-4 py-4 text-center align-top", featured && "bg-primary/[0.06]")

  const valueCellClass = (featured?: boolean) =>
    cn("border-b border-border px-4 py-3 text-center align-middle", featured && "bg-primary/[0.06]")

  return (
    <div
      className={cn(
        "w-full overflow-x-auto rounded-xl border border-border bg-background shadow-sm",
        className,
      )}
      {...props}
    >
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead>
          <tr>
            <th className="sticky top-0 z-10 min-w-[180px] border-b border-border bg-background px-4 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Features
            </th>
            {plans.map((plan) => (
              <th
                key={plan.id}
                className={cn(
                  "sticky top-0 z-10 border-b border-border bg-background px-4 py-4 text-center align-top",
                  plan.featured && "bg-primary/[0.06]",
                )}
              >
                <div className="flex flex-col items-center gap-1.5">
                  {plan.featured ? (
                    <span className="rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                      Recommended
                    </span>
                  ) : (
                    <span className="h-[18px]" />
                  )}
                  <span className="text-base font-bold text-foreground">{plan.name}</span>
                  {plan.price ? (
                    <span className="text-muted-foreground">
                      <span className="text-xl font-bold text-foreground">{plan.price}</span>
                      {plan.period ? (
                        <span className="ml-1 text-xs">{plan.period}</span>
                      ) : null}
                    </span>
                  ) : null}
                  {plan.cta ? (
                    <button
                      type="button"
                      className={cn(
                        "mt-2 rounded-lg border border-border px-4 py-1.5 text-xs font-semibold transition-colors",
                        plan.featured
                          ? "border-transparent bg-primary text-primary-foreground hover:bg-primary/90"
                          : "bg-background text-foreground hover:bg-muted",
                      )}
                    >
                      {plan.cta}
                    </button>
                  ) : null}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {groups.map((group, groupIndex) => (
            <React.Fragment key={group.title}>
              <tr>
                <td
                  colSpan={columns + 1}
                  className="border-b border-border bg-muted/40 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                >
                  {group.title}
                </td>
              </tr>
              {group.rows.map((row, rowIndex) => (
                <tr
                  key={row.label}
                  className={cn(
                    "transition-colors hover:bg-muted/30",
                    groupIndex % 2 === 1 && rowIndex % 2 === 0 && "bg-muted/10",
                  )}
                >
                  <td className="border-b border-border px-4 py-3 font-medium text-foreground">
                    {row.label}
                  </td>
                  {row.values.map((value, index) => (
                    <td key={index} className={valueCellClass(plans[index]?.featured)}>
                      {featureCell(value)}
                    </td>
                  ))}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FeatureComparisonTable