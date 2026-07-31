import { cn } from "@/lib/utils"

export interface LegendItem {
  label: string
  color: string
  value?: string | number
}

export interface LegendIndicatorProps {
  items: LegendItem[]
  className?: string
  showValues?: boolean
}

export function LegendIndicator({
  items,
  className,
  showValues = false,
}: LegendIndicatorProps) {
  return (
    <ul className={cn("flex flex-col gap-y-2", className)}>
      {items.map((item, idx) => (
        <li
          className="inline-flex items-center"
          key={`${item.label}-${idx}`}
        >
          <span
            aria-hidden="true"
            className={cn("mr-2 inline-block size-2 rounded-full", item.color)}
          />
          <span className="text-sm text-foreground">{item.label}</span>
          {showValues && item.value !== undefined && (
            <span className="ml-auto pl-4 text-sm font-medium tabular-nums text-muted-foreground">
              {item.value}
            </span>
          )}
        </li>
      ))}
    </ul>
  )
}
