import { X, type LucideIcon } from "lucide-react"
import type { ReactNode } from "react"
import { cn } from "@/lib/cn"

export interface BadgeDismissibleProps {
  /** Badge label. */
  children: ReactNode
  /** Optional leading icon. */
  icon?: LucideIcon
  /** Visual style. */
  variant?: "soft" | "outline"
  /** Semantic tone. */
  tone?: "primary" | "success" | "warning" | "error" | "neutral"
  /** Called when the dismiss button is clicked. */
  onDismiss?: () => void
  /** Accessible label for the dismiss button. */
  dismissLabel?: string
  className?: string
}

type BadgeDismissibleTone = NonNullable<BadgeDismissibleProps["tone"]>

const toneSoft: Record<BadgeDismissibleTone, string> = {
  primary: "bg-primary/10 text-primary",
  success: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
  warning: "bg-amber-500/10 text-amber-700 dark:text-amber-400",
  error: "bg-red-500/10 text-red-700 dark:text-red-400",
  neutral: "bg-muted text-muted-foreground",
}

const toneOutline: Record<BadgeDismissibleTone, string> = {
  primary: "border-primary/40 text-primary",
  success: "border-emerald-500/40 text-emerald-700 dark:text-emerald-400",
  warning: "border-amber-500/40 text-amber-700 dark:text-amber-400",
  error: "border-red-500/40 text-red-700 dark:text-red-400",
  neutral: "border-border text-muted-foreground",
}

export function BadgeDismissible({
  children,
  icon: Icon,
  variant = "soft",
  tone = "primary",
  onDismiss,
  dismissLabel = "Remove badge",
  className,
}: BadgeDismissibleProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-sm whitespace-nowrap",
        variant === "outline" ? cn("border", toneOutline[tone]) : toneSoft[tone],
        className,
      )}
    >
      {Icon ? <Icon className="-ms-1 me-1 size-4 shrink-0" aria-hidden="true" /> : null}

      <span>{children}</span>

      {onDismiss ? (
        <button
          type="button"
          onClick={onDismiss}
          aria-label={dismissLabel}
          className={cn(
            "-me-1 ms-1 inline-flex items-center justify-center rounded-full p-0.5 transition-colors",
            variant === "outline" ? "hover:bg-muted" : "hover:bg-foreground/10",
          )}
        >
          <X className="size-3" aria-hidden="true" />
        </button>
      ) : null}
    </span>
  )
}

export default BadgeDismissible