import type { HTMLAttributes } from "react"
import { forwardRef } from "react"
import { cn } from "@/lib/cn"

export interface NotificationBadgeProps
  extends HTMLAttributes<HTMLSpanElement> {
  /** The count to display. */
  count?: number
  /** Show as a plain dot without a count. */
  dot?: boolean
  /** Whether the badge is currently in an active / "new" state. */
  active?: boolean
}

export const NotificationBadge = forwardRef<
  HTMLSpanElement,
  NotificationBadgeProps
>(({ className, count, dot = false, active = true, ...props }, ref) => {
  if (dot) {
    return (
      <span
        ref={ref}
        aria-label={active ? "New notifications" : "No new notifications"}
        className={cn(
          "relative inline-flex size-2.5",
          className,
        )}
        {...props}
      >
        {active && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
        )}
        <span
          className={cn(
            "relative inline-flex size-2.5 rounded-full",
            active ? "bg-primary" : "bg-muted-foreground/40",
          )}
        />
      </span>
    )
  }

  return (
    <span
      ref={ref}
      role="status"
      className={cn(
        "inline-flex min-w-4 items-center justify-center rounded-full px-1 text-[0.7rem] font-semibold leading-none",
        count && count > 0 && active
          ? "bg-primary text-primary-foreground"
          : "bg-muted text-muted-foreground",
        className,
      )}
      {...props}
    >
      {count}
    </span>
  )
})

NotificationBadge.displayName = "NotificationBadge"

export default NotificationBadge
