"use client"

import * as React from "react"
import { cn } from "@/lib/cn"

export interface TableOfContentsItem {
  id: string
  label: string
  children?: TableOfContentsItem[]
}

export interface TableOfContentsProps
  extends React.HTMLAttributes<HTMLElement> {
  items: TableOfContentsItem[]
  title?: string
  activeId?: string
  onActiveChange?: (id: string) => void
  scrollBehavior?: ScrollBehavior
  offset?: number
  collapsible?: boolean
}

function flatten(items: TableOfContentsItem[]): string[] {
  return items.flatMap((item) => [item.id, ...flatten(item.children ?? [])])
}

export function TableOfContents({
  items,
  title = "On this page",
  activeId,
  onActiveChange,
  scrollBehavior = "smooth",
  offset = 80,
  collapsible = true,
  className,
  ...props
}: TableOfContentsProps) {
  const [internalActive, setInternalActive] = React.useState<string>("")
  const [collapsed, setCollapsed] = React.useState(collapsible)

  const active = activeId ?? internalActive

  React.useEffect(() => {
    if (activeId != null) return
    const sectionIds = flatten(items)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        const current = visible[visible.length - 1]?.target.id ?? ""
        if (current) {
          setInternalActive(current)
          onActiveChange?.(current)
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
    )

    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [items, activeId, onActiveChange])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: scrollBehavior })
    setInternalActive(id)
    onActiveChange?.(id)
  }

  const renderItem = (item: TableOfContentsItem, depth = 0) => {
    const isActive = active === item.id
    return (
      <li key={item.id}>
        <button
          type="button"
          onClick={() => scrollTo(item.id)}
          aria-current={isActive ? "true" : undefined}
          className={cn(
            "group flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-left text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            depth > 0 && "pl-6",
            isActive && "bg-accent font-medium text-foreground",
          )}
        >
          <span
            className={cn(
              "size-1.5 shrink-0 rounded-full bg-border transition-colors group-hover:bg-foreground/40",
              isActive && "bg-primary",
            )}
          />
          {item.label}
        </button>
        {item.children && item.children.length > 0 ? (
          <ul className="mt-0.5 space-y-0.5">{item.children.map((c) => renderItem(c, depth + 1))}</ul>
        ) : null}
      </li>
    )
  }

  return (
    <nav
      aria-label={title}
      className={cn("rounded-lg border border-border bg-card/50 p-3 text-card-foreground", className)}
      {...props}
    >
      <div className="flex items-center justify-between">
        <h2 className="px-1 text-sm font-semibold tracking-wide text-foreground uppercase">
          {title}
        </h2>
        {collapsible ? (
          <button
            type="button"
            onClick={() => setCollapsed((c) => !c)}
            aria-expanded={!collapsed}
            aria-label={collapsed ? "Expand table of contents" : "Collapse table of contents"}
            className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={cn("size-4 transition-transform", collapsed && "rotate-180")}
            >
              <path
                fillRule="evenodd"
                d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        ) : null}
      </div>
      {!collapsed ? (
        <ul className="mt-2 space-y-0.5">{items.map((item) => renderItem(item))}</ul>
      ) : null}
    </nav>
  )
}

export default TableOfContents