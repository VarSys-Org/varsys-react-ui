import * as React from "react"
import { cn } from "@/lib/utils"

export interface DetailsListItem {
  term: string
  description: string
}

export interface DetailsListProps extends React.HTMLAttributes<HTMLDListElement> {
  items: DetailsListItem[]
  variant?: "plain" | "bordered" | "striped"
}

export function DetailsList({ items, variant = "plain", className }: DetailsListProps) {
  const rowCls =
    variant === "bordered"
      ? "grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4"
      : "grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4"

  return (
    <div className="flow-root">
      <dl
        className={cn(
          "-my-3 divide-y divide-gray-200 text-sm",
          variant === "bordered" && "my-0 rounded border border-gray-200",
          variant === "striped" && "divide-gray-100",
          className
        )}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className={cn(
              rowCls,
              variant === "striped" && idx % 2 === 0 && "bg-gray-50 px-3"
            )}
          >
            <dt className="font-medium text-gray-900">{item.term}</dt>
            <dd className="text-gray-700 sm:col-span-2">{item.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export default DetailsList
