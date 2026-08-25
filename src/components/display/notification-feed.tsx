"use client"

import * as React from "react"
import { BellRing, CheckCheck } from "lucide-react"

import { cn } from "@/lib/cn"

export interface NotificationFeedItem {
  /** Unique key for the item. */
  id?: string
  /** Sender avatar image URL. */
  avatar?: string
  /** Fallback initials rendered when no avatar is provided. */
  initials?: string
  /** Primary title line (e.g. actor name). */
  title: string
  /** Supporting description. */
  description?: string
  /** Relative time label (e.g. "2 min ago"). */
  time: string
  /** Whether the item is unread. */
  unread?: boolean
  /** Accent color applied to the fallback avatar. */
  color?: string
}

export interface NotificationFeedProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Notification items to render. */
  items: NotificationFeedItem[]
  /** Panel heading. */
  title?: string
  /** Whether to show the All/Unread filter. */
  showFilters?: boolean
  /** Text for the footer action. */
  footerText?: string
  /** Called when the footer action is clicked. */
  onViewAll?: () => void
}

export function NotificationFeed({
  items,
  title = "Notifications",
  showFilters = true,
  footerText = "View all notifications",
  onViewAll,
  className,
  ...props
}: NotificationFeedProps) {
  const [filter, setFilter] = React.useState<"all" | "unread">("all")
  const [unreadIds, setUnreadIds] = React.useState<Set<string>>(
    () => new Set(items.filter((item) => item.unread).map((item) => item.id ?? item.title)),
  )

  const visible = items.filter((item) => filter === "all" || unreadIds.has(item.id ?? item.title))
  const unreadCount = unreadIds.size

  const markAllRead = () => setUnreadIds(new Set())
  const markRead = (id: string) =>
    setUnreadIds((prev) => {
      const next = new Set(prev)
      next.delete(id)
      return next
    })

  return (
    <div
      data-slot="notification-feed"
      className={cn(
        "w-full max-w-md rounded-2xl border border-border bg-card shadow-sm",
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <div className="flex items-center gap-2">
          <BellRing aria-hidden="true" className="size-4 text-muted-foreground" />
          <h3 className="text-sm font-semibold text-foreground">{title}</h3>
          {unreadCount > 0 && (
            <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
              {unreadCount}
            </span>
          )}
        </div>
        <button
          type="button"
          onClick={markAllRead}
          disabled={unreadCount === 0}
          className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:opacity-50"
        >
          <CheckCheck aria-hidden="true" className="size-3.5" />
          Mark all read
        </button>
      </div>

      {showFilters && (
        <div className="flex gap-1 border-b border-border px-3 py-2">
          {(["all", "unread"] as const).map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setFilter(option)}
              className={cn(
                "rounded-md px-3 py-1.5 text-xs font-medium capitalize transition-colors",
                filter === option
                  ? "bg-accent text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {option}
            </button>
          ))}
        </div>
      )}

      <ul className="max-h-96 divide-y divide-border overflow-y-auto">
        {visible.length === 0 ? (
          <li className="px-5 py-8 text-center text-sm text-muted-foreground">
            No notifications to show
          </li>
        ) : (
          visible.map((item, index) => {
            const id = item.id ?? item.title
            const isUnread = unreadIds.has(id)
            return (
              <li key={`${id}-${index}`}>
                <button
                  type="button"
                  onClick={() => isUnread && markRead(id)}
                  className={cn(
                    "flex w-full items-start gap-3 px-5 py-3.5 text-left transition-colors hover:bg-accent/50",
                    isUnread && "bg-primary/[0.03]",
                  )}
                >
                  {item.avatar ? (
                    <img
                      src={item.avatar}
                      alt=""
                      className="mt-0.5 size-10 shrink-0 rounded-full object-cover"
                    />
                  ) : (
                    <span
                      className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white"
                      style={{ backgroundColor: item.color ?? "hsl(var(--primary))" }}
                    >
                      {item.initials ?? "?"}
                    </span>
                  )}
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center justify-between gap-2">
                      <span className="truncate text-sm font-medium text-foreground">
                        {item.title}
                      </span>
                      <span className="shrink-0 text-xs text-muted-foreground">{item.time}</span>
                    </span>
                    {item.description && (
                      <span className="mt-0.5 line-clamp-2 block text-sm text-muted-foreground">
                        {item.description}
                      </span>
                    )}
                  </span>
                  {isUnread && (
                    <span aria-hidden="true" className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />
                  )}
                </button>
              </li>
            )
          })
        )}
      </ul>

      {footerText && (
        <div className="border-t border-border p-2">
          <button
            type="button"
            onClick={onViewAll}
            className="w-full rounded-lg px-3 py-2 text-center text-sm font-medium text-primary transition-colors hover:bg-accent"
          >
            {footerText}
          </button>
        </div>
      )}
    </div>
  )
}

export default NotificationFeed
