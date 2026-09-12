"use client"

import * as React from "react"
import { AlertTriangle, CheckCircle2, Info, X, XCircle } from "lucide-react"

import { cn } from "@/lib/cn"

export type AlertBannerVariant = "info" | "success" | "warning" | "danger"
export type AlertBannerAppearance = "soft" | "bordered" | "linear"

export interface AlertBannerAction {
  label: string
  href?: string
  onClick?: () => void
}

export interface AlertBannerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  variant?: AlertBannerVariant
  appearance?: AlertBannerAppearance
  title?: React.ReactNode
  description?: React.ReactNode
  icon?: React.ReactNode
  action?: AlertBannerAction
  dismissible?: boolean
  onDismiss?: () => void
}

const VARIANT_STYLES: Record<
  AlertBannerVariant,
  { container: string; border: string; icon: React.ReactNode; defaultTitle: string }
> = {
  info: {
    container: "bg-primary/10 text-primary",
    border: "border-primary/30",
    icon: <Info className="size-5" aria-hidden="true" />,
    defaultTitle: "Info",
  },
  success: {
    container:
      "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    border: "border-emerald-500/30",
    icon: <CheckCircle2 className="size-5" aria-hidden="true" />,
    defaultTitle: "Success",
  },
  warning: {
    container: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    border: "border-amber-500/30",
    icon: <AlertTriangle className="size-5" aria-hidden="true" />,
    defaultTitle: "Warning",
  },
  danger: {
    container: "bg-destructive/10 text-destructive",
    border: "border-destructive/30",
    icon: <XCircle className="size-5" aria-hidden="true" />,
    defaultTitle: "Error",
  },
}

const APPEARANCE_STYLES: Record<AlertBannerAppearance, string> = {
  soft: "",
  bordered: "border",
  linear: "border-l-4",
}

export function AlertBanner({
  variant = "info",
  appearance = "soft",
  title,
  description,
  icon,
  action,
  dismissible = false,
  onDismiss,
  className,
  ...props
}: AlertBannerProps) {
  const [hidden, setHidden] = React.useState(false)
  const styles = VARIANT_STYLES[variant]

  if (hidden) return null

  const actionContent = action ? (
    <a
      href={action.href ?? "#"}
      onClick={(event) => {
        if (action.onClick) {
          event.preventDefault()
          action.onClick()
        }
      }}
      className="mt-2 inline-flex items-center gap-1 text-sm font-medium underline underline-offset-2 hover:opacity-80"
    >
      {action.label}
    </a>
  ) : null

  return (
    <div
      role="alert"
      className={cn(
        "flex items-start gap-3 rounded-lg px-4 py-3 text-sm",
        styles.container,
        APPEARANCE_STYLES[appearance],
        appearance !== "soft" && styles.border,
        className
      )}
      {...props}
    >
      <span className="mt-0.5 shrink-0">{icon ?? styles.icon}</span>
      <div className="min-w-0 flex-1">
        <p className="font-semibold">{title ?? styles.defaultTitle}</p>
        {description ? <div className="mt-1 opacity-90">{description}</div> : null}
        {actionContent}
      </div>
      {dismissible ? (
        <button
          type="button"
          aria-label="Dismiss alert"
          onClick={() => {
            setHidden(true)
            onDismiss?.()
          }}
          className="-m-1 shrink-0 rounded-md p-1 opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current"
        >
          <X className="size-4" aria-hidden="true" />
        </button>
      ) : null}
    </div>
  )
}

AlertBanner.displayName = "AlertBanner"

export default AlertBanner
