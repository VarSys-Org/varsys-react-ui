"use client"

import * as React from "react"
import { XIcon } from "lucide-react"
import { cn } from "@/lib/cn"

export interface CookieConsentProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onAccept"> {
  /** Position of the consent banner on the viewport. */
  position?: "bottom" | "bottom-center"
  title?: string
  description: string
  /** Label for the accept action. */
  acceptLabel?: string
  /** Label for the reject action. */
  rejectLabel?: string
  /** URL for the policy link rendered inside the description. */
  policyHref?: string
  /** Whether the banner is visible. Controlled when `open` is provided. */
  open?: boolean
  onAccept?: () => void
  onReject?: () => void
  onDismiss?: () => void
  /** When uncontrolled, shows the banner immediately. */
  defaultOpen?: boolean
}

export function CookieConsent({
  position = "bottom-center",
  title,
  description,
  acceptLabel = "Accept",
  rejectLabel = "Reject",
  policyHref,
  open,
  defaultOpen = false,
  onAccept,
  onReject,
  onDismiss,
  className,
  ...props
}: CookieConsentProps) {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen)
  const isOpen = open ?? internalOpen

  const close = (callback?: () => void) => {
    setInternalOpen(false)
    callback?.()
  }

  if (!isOpen) return null

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className={cn(
        "fixed inset-x-0 z-50 p-4",
        position === "bottom-center"
          ? "bottom-0 mx-auto w-full max-w-4xl sm:bottom-4 sm:px-4"
          : "bottom-0 w-full",
        className
      )}
      {...props}
    >
      <div className="rounded-xl border border-border bg-card p-4 shadow-lg">
        <div className="flex justify-between gap-x-5 sm:gap-x-10">
          <div className="grow">
            {title && (
              <h2 className="font-semibold text-foreground">{title}</h2>
            )}
            <p className="mt-1.5 text-sm text-muted-foreground">
              {description}
              {policyHref && (
                <>
                  {" "}
                  <a
                    href={policyHref}
                    className="inline-flex items-center gap-x-1.5 font-medium text-primary decoration-2 hover:underline"
                  >
                    Learn more
                  </a>
                </>
              )}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => close(onAccept)}
                className="inline-flex items-center gap-x-2 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
              >
                {acceptLabel}
              </button>
              <button
                type="button"
                onClick={() => close(onReject)}
                className="inline-flex items-center gap-x-2 rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium text-foreground shadow-sm transition hover:bg-muted"
              >
                {rejectLabel}
              </button>
            </div>
          </div>
          <button
            type="button"
            onClick={() => close(onDismiss)}
            aria-label="Dismiss"
            className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-transparent bg-muted text-muted-foreground transition hover:bg-muted/70"
          >
            <XIcon className="size-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
