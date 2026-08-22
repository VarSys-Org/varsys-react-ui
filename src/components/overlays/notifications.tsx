import * as React from "react"
import { Bell } from "lucide-react"

import { cn } from "@/lib/cn"
import { Button } from "@/components/buttons/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/overlays/popover"

export interface NotificationItem {
  /** Unique identifier used for read-state tracking. */
  id: string
  /** Notification title. */
  title: string
  /** Optional supporting description. */
  description?: string
  /** Optional relative timestamp. */
  time?: string
  /** Whether the item starts unread. */
  unread?: boolean
  /** Optional leading icon. */
  icon?: React.ReactNode
}

export interface NotificationsProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Notifications to display. */
  items: NotificationItem[]
  /** Called after the user marks everything as read. */
  onReadAll?: () => void
  /** Called when an individual notification is clicked. */
  onItemClick?: (item: NotificationItem) => void
  /** Accessible label for the bell trigger. */
  triggerLabel?: string
}

export function Notifications({
  items,
  onReadAll,
  onItemClick,
  triggerLabel = "Open notifications",
  className,
  ...props
}: NotificationsProps) {
  const [readIds, setReadIds] = React.useState<Set<string>>(new Set())

  const markRead = (id: string) => {
    setReadIds((prev) => new Set(prev).add(id))
  }

  const markAllRead = () => {
    setReadIds(new Set(items.map((item) => item.id)))
    onReadAll?.()
  }

  const unreadCount = items.filter(
    (item) => item.unread && !readIds.has(item.id),
  ).length

  return (
    <Popover>
      <PopoverTrigger
        aria-label={triggerLabel}
        className={cn(
          "relative inline-flex size-9 items-center justify-center rounded-lg text-sm outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50",
          className,
        )}
      >
        <Bell aria-hidden="true" className="size-4" />
        {unreadCount > 0 && (
          <span className="absolute -top-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground tabular-nums">
            {unreadCount > 9 ? "9+" : unreadCount}
          </span>
        )}
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0">
        <div className="flex items-center justify-between border-b px-3 py-2.5">
          <p className="text-sm font-medium">Notifications</p>
          {unreadCount > 0 && (
            <span className="rounded-full bg-primary px-1.5 py-0.5 text-[10px] font-semibold text-primary-foreground tabular-nums">
              {unreadCount} new
            </span>
          )}
        </div>

        <ul className="max-h-72 overflow-y-auto">
          {items.length === 0 && (
            <li className="px-3 py-10 text-center text-sm text-muted-foreground">
              You're all caught up
            </li>
          )}
          {items.map((item) => {
            const isUnread = item.unread && !readIds.has(item.id)
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => {
                    markRead(item.id)
                    onItemClick?.(item)
                  }}
                  className={cn(
                    "flex w-full items-start gap-3 px-3 py-2.5 text-left transition-colors hover:bg-muted/60",
                    isUnread && "bg-muted/40",
                  )}
                >
                  {item.icon ? (
                    <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
                      {item.icon}
                    </span>
                  ) : (
                    <span
                      aria-hidden="true"
                      className={cn(
                        "mt-2.5 size-2 shrink-0 rounded-full",
                        isUnread ? "bg-primary" : "bg-transparent",
                      )}
                    />
                  )}
                  <span className="min-w-0 flex-1">
                    <span
                      className={cn(
                        "block text-sm",
                        isUnread ? "font-medium" : "text-muted-foreground",
                      )}
                    >
                      {item.title}
                    </span>
                    {item.description && (
                      <span className="mt-0.5 block truncate text-xs text-muted-foreground">
                        {item.description}
                      </span>
                    )}
                    {item.time && (
                      <span className="mt-1 block text-[11px] text-muted-foreground/70">
                        {item.time}
                      </span>
                    )}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>

        {unreadCount > 0 && (
          <div className="border-t p-2">
            <Button
              variant="ghost"
              size="sm"
              className="w-full"
              onClick={markAllRead}
            >
              Mark all as read
            </Button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  )
}

export default Notifications