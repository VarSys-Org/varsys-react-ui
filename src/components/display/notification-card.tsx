"use client"

import * as React from "react"
import { Check, X } from "lucide-react"

import { cn } from "@/lib/cn"

export type NotificationCardType = "default" | "success" | "error" | "info" | "warning"

export interface NotificationCardItem {
  /** Notification title. */
  title: string
  /** Notification body text. */
  description?: string
  /** Optional timestamp string. */
  time?: string
  /** Visual type of the notification. */
  type?: NotificationCardType
  /** Optional avatar/target image URL. */
  image?: string
  /** Mark the notification as unread. */
  unread?: boolean
}

export interface NotificationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Notifications to display. */
  items: NotificationCardItem[]
  /** Panel title. */
  title?: string
  /** Number to display as the badge. */
  badge?: number
  /** Show a footer with "View all" action. */
  showFooter?: boolean
  /** Footer action label. */
  footerLabel?: string
  /** Called when a notification is dismissed. */
  onDismiss?: (index: number) => void
  /** Called when the footer action is clicked. */
  onViewAll?: () => void
}

const typeDot: Record<NotificationCardType, string> = {
  default: "bg-foreground",
  success: "bg-emerald-500",
  error: "bg-red-500",
  info: "bg-sky-500",
  warning: "bg-amber-500",
}

export function NotificationCard({
  items,
  title = "Notifications",
  badge,
  showFooter = true,
  footerLabel = "View all notifications",
  onDismiss,
  onViewAll,
  className,
  ...props
}: NotificationCardProps) {
  const count = badge ?? items.length

  return (
    <div
      data-slot="notification-card"
      className={cn(
        "w-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm",
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-semibold text-foreground">{title}</h3>
          <span className="inline-flex size-5 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
            {count}
          </span>
        </div>
        <button
          type="button"
          aria-label="Dismiss all"
          className="inline-flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
        >
          <Check aria-hidden="true" className="size-4" />
        </button>
      </div>

      <ul className="divide-y divide-border">
        {items.map((item, index) => (
          <li
            key={index}
            className={cn(
              "group flex items-start gap-3 px-4 py-3 transition-colors hover:bg-muted/50",
            )}
          >
            {item.image ? (
              <img
                src={item.image}
                alt=""
                className="size-10 shrink-0 rounded-full object-cover"
              />
            ) : (
              <span
                className={cn(
                  "mt-1.5 size-2 shrink-0 rounded-full",
                  typeDot[item.type ?? "default"],
                )}
              />
            )}
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-2">
                <p className="truncate text-sm font-medium text-foreground">{item.title}</p>
                {item.time && (
                  <span className="shrink-0 text-xs text-muted-foreground">{item.time}</span>
                )}
              </div>
              {item.description && (
                <p className="mt-0.5 line-clamp-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              )}
              {item.unread && (
                <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
              )}
            </div>
            {onDismiss && (
              <button
                type="button"
                aria-label={`Dismiss ${item.title}`}
                onClick={() => onDismiss(index)}
                className="inline-flex size-6 shrink-0 items-center justify-center rounded-md text-muted-foreground opacity-0 transition-opacity hover:bg-muted hover:text-foreground focus-visible:opacity-100 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none group-hover:opacity-100"
              >
                <X aria-hidden="true" className="size-3.5" />
              </button>
            )}
          </li>
        ))}
      </ul>

      {showFooter && (
        <div className="border-t border-border p-3">
          <button
            type="button"
            onClick={onViewAll}
            className="w-full rounded-lg py-2 text-center text-sm font-medium text-primary transition-colors hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
          >
            {footerLabel}
          </button>
        </div>
      )}
    </div>
  )
}

export default NotificationCard
