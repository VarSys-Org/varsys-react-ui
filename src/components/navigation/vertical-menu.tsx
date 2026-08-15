import * as React from "react"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/cn"

export interface VerticalMenuItem {
  label: string
  href?: string
  icon?: React.ReactNode
  badge?: React.ReactNode
  active?: boolean
  children?: Omit<VerticalMenuItem, "children">[]
  onClick?: () => void
}

export interface VerticalMenuProps extends React.HTMLAttributes<HTMLUListElement> {
  items: VerticalMenuItem[]
  borderLeft?: boolean
}

export function VerticalMenu({ items, borderLeft = false, className }: VerticalMenuProps) {
  return (
    <ul className={cn("space-y-1", className)}>
      {items.map((item, index) => (
        <VerticalMenuItemComponent key={index} item={item} borderLeft={borderLeft} />
      ))}
    </ul>
  )
}

function VerticalMenuItemComponent({
  item,
  borderLeft,
}: {
  item: VerticalMenuItem
  borderLeft: boolean
}) {
  const [open, setOpen] = React.useState(false)

  if (item.children && item.children.length > 0) {
    return (
      <li>
        <details
          open={open}
          onToggle={(e) => setOpen(e.currentTarget.open)}
          className="group [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
            <span className="flex items-center gap-2">
              {item.icon ? <span className="size-5 opacity-75">{item.icon}</span> : null}
              <span className="text-sm font-medium">{item.label}</span>
            </span>
            <ChevronDown className="size-4 shrink-0 transition-transform duration-300 group-open:-rotate-180" />
          </summary>
          <ul className="mt-2 space-y-1 px-4">
            {item.children.map((child, index) => (
              <li key={index}>
                {child.href ? (
                  <a
                    href={child.href}
                    onClick={child.onClick}
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    {child.label}
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={child.onClick}
                    className="block w-full rounded-lg px-4 py-2 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    {child.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </details>
      </li>
    )
  }

  const classes = borderLeft
    ? cn(
        "flex items-center gap-2 border-s-[3px] px-4 py-3 transition-colors",
        item.active
          ? "border-primary bg-primary/10 text-primary"
          : "border-transparent text-muted-foreground hover:border-border hover:bg-accent hover:text-accent-foreground"
      )
    : cn(
        "flex items-center justify-between rounded-lg px-4 py-2 transition-colors",
        item.active
          ? "bg-accent text-accent-foreground"
          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
      )

  return (
    <li>
      {item.href ? (
        <a href={item.href} onClick={item.onClick} className={classes}>
          <span className="flex items-center gap-2">
            {item.icon ? <span className="size-5 opacity-75">{item.icon}</span> : null}
            <span className="text-sm font-medium">{item.label}</span>
          </span>
          {item.badge ? (
            <span className="shrink-0 rounded-full bg-muted px-3 py-0.5 text-xs text-muted-foreground">
              {item.badge}
            </span>
          ) : null}
        </a>
      ) : (
        <button type="button" onClick={item.onClick} className={classes}>
          <span className="flex items-center gap-2">
            {item.icon ? <span className="size-5 opacity-75">{item.icon}</span> : null}
            <span className="text-sm font-medium">{item.label}</span>
          </span>
          {item.badge ? (
            <span className="shrink-0 rounded-full bg-muted px-3 py-0.5 text-xs text-muted-foreground">
              {item.badge}
            </span>
          ) : null}
        </button>
      )}
    </li>
  )
}

export default VerticalMenu
