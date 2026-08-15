"use client"

import * as React from "react"
import { cn } from "@/lib/cn"

export interface ListGroupItem {
  label: React.ReactNode
  href?: string
  icon?: React.ReactNode
  badge?: React.ReactNode
  description?: React.ReactNode
  active?: boolean
  disabled?: boolean
  onClick?: () => void
}

export interface ListGroupProps
  extends Omit<React.HTMLAttributes<HTMLUListElement>, "onClick" | "onSelect"> {
  items: ListGroupItem[]
  size?: "sm" | "md" | "lg"
  flush?: boolean
  numbered?: boolean
  onSelect?: (item: ListGroupItem, index: number) => void
}

const sizeClasses: Record<NonNullable<ListGroupProps["size"]>, string> = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-3 text-sm",
  lg: "px-5 py-4 text-base",
}

function ListGroupItemContent({
  item,
  size,
  numbered,
  index,
}: {
  item: ListGroupItem
  size: NonNullable<ListGroupProps["size"]>
  numbered: boolean
  index: number
}) {
  return (
    <div className="flex w-full items-center gap-3">
      {numbered && (
        <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground">
          {index + 1}
        </span>
      )}
      {item.icon && (
        <span className="shrink-0 text-muted-foreground">{item.icon}</span>
      )}
      <div className="min-w-0 flex-1">
        <div className="truncate">{item.label}</div>
        {item.description && (
          <div className="truncate text-xs text-muted-foreground">
            {item.description}
          </div>
        )}
      </div>
      {item.badge && (
        <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
          {item.badge}
        </span>
      )}
    </div>
  )
}

export function ListGroup({
  items,
  size = "md",
  flush = false,
  numbered = false,
  onSelect,
  className,
  ...props
}: ListGroupProps) {
  const itemClasses = cn(
    "flex w-full items-center text-left text-foreground transition-colors",
    "first:rounded-t-lg last:rounded-b-lg",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
    !flush && "border border-border",
    flush && "border-y border-border first:border-t-0 last:border-b-0"
  )

  return (
    <ul
      className={cn(
        "overflow-hidden rounded-lg bg-background",
        flush && "rounded-none",
        className
      )}
      {...props}
    >
      {items.map((item, index) => {
        const isActive = item.active
        const isDisabled = item.disabled

        const content = (
          <ListGroupItemContent
            item={item}
            size={size}
            numbered={numbered}
            index={index}
          />
        )

        return (
          <li
            key={index}
            className={cn(
              index > 0 && !flush && "-mt-px",
              index > 0 && flush && "border-t-0"
            )}
          >
            {item.href ? (
              <a
                href={isDisabled ? undefined : item.href}
                aria-disabled={isDisabled}
                onClick={(event) => {
                  if (isDisabled) {
                    event.preventDefault()
                    return
                  }
                  item.onClick?.()
                  onSelect?.(item, index)
                }}
                className={cn(
                  itemClasses,
                  sizeClasses[size],
                  isActive && "bg-muted",
                  isDisabled
                    ? "pointer-events-none opacity-50"
                    : "hover:bg-muted/60"
                )}
              >
                {content}
              </a>
            ) : (
              <button
                type="button"
                disabled={isDisabled}
                onClick={() => {
                  item.onClick?.()
                  onSelect?.(item, index)
                }}
                className={cn(
                  itemClasses,
                  sizeClasses[size],
                  isActive && "bg-muted",
                  isDisabled && "pointer-events-none opacity-50",
                  !isDisabled && "hover:bg-muted/60"
                )}
              >
                {content}
              </button>
            )}
          </li>
        )
      })}
    </ul>
  )
}
