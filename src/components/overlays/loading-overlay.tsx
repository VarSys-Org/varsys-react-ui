import type { HTMLAttributes } from "react"
import { forwardRef } from "react"
import { cn } from "@/lib/cn"

import { Spinner } from "@/components/display/spinner"

export interface LoadingOverlayProps
  extends HTMLAttributes<HTMLDivElement> {
  /** Whether the overlay is visible. */
  loading?: boolean
  /** Optional message shown beneath the spinner. */
  label?: string
}

export const LoadingOverlay = forwardRef<HTMLDivElement, LoadingOverlayProps>(
  ({ className, loading = true, label, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative", className)}
        {...props}
      >
        {children}
        {loading && (
          <div
            role="status"
            aria-live="polite"
            className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-background/70 backdrop-blur-sm"
          >
            <Spinner className="size-6" />
            {label && (
              <p className="text-sm text-muted-foreground">{label}</p>
            )}
          </div>
        )}
      </div>
    )
  },
)

LoadingOverlay.displayName = "LoadingOverlay"

export default LoadingOverlay
