import * as React from "react"
import { cn } from "@/lib/cn"

export interface AnnouncementBarProps
  extends React.HTMLAttributes<HTMLElement> {
  message?: React.ReactNode
  linkText?: string
  linkHref?: string
  dismissible?: boolean
  onDismiss?: () => void
}

export function AnnouncementBar({
  message = "Lorem, ipsum dolor",
  linkText = "sit amet consectetur",
  linkHref = "#",
  dismissible = true,
  onDismiss,
  className,
}: AnnouncementBarProps) {
  const [hidden, setHidden] = React.useState(false)

  if (hidden) return null

  return (
    <div className={cn("border-b border-border bg-muted px-4 py-2", className)}>
      <p className="text-center text-sm font-medium text-foreground">
        {message}{" "}
        <a href={linkHref} className="inline-block underline underline-offset-2">
          {linkText}
        </a>
        {dismissible ? (
          <button
            type="button"
            aria-label="Dismiss announcement"
            onClick={() => {
              setHidden(true)
              onDismiss?.()
            }}
            className="ml-2 align-middle text-muted-foreground transition-colors hover:text-foreground"
          >
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              className="inline size-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        ) : null}
      </p>
    </div>
  )
}

export default AnnouncementBar