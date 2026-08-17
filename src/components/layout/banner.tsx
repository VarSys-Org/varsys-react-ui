"use client"

import * as React from "react"
import { ArrowRight, X } from "lucide-react"
import { cn } from "@/lib/cn"

export type BannerVariant = "default" | "primary" | "secondary" | "success" | "warning" | "danger"

export interface BannerAction {
  label: string
  href?: string
  onClick?: () => void
}

export interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BannerVariant
  message: React.ReactNode
  action?: BannerAction
  dismissible?: boolean
  onDismiss?: () => void
  startIcon?: React.ReactNode
  className?: string
}

const variantClasses: Record<BannerVariant, string> = {
  default: "border-border bg-card text-foreground",
  primary: "border-primary/30 bg-primary text-primary-foreground",
  secondary: "border-secondary bg-secondary text-secondary-foreground",
  success: "border-emerald-500/30 bg-emerald-50 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-100",
  warning: "border-amber-500/30 bg-amber-50 text-amber-900 dark:bg-amber-950 dark:text-amber-100",
  danger: "border-red-500/30 bg-red-50 text-red-900 dark:bg-red-950 dark:text-red-100",
}

const actionClasses: Record<BannerVariant, string> = {
  default: "text-primary hover:text-primary/80",
  primary: "text-primary-foreground/90 underline-offset-4 hover:text-primary-foreground hover:underline",
  secondary: "text-secondary-foreground/90 hover:text-secondary-foreground hover:underline",
  success: "text-emerald-700 hover:text-emerald-800 dark:text-emerald-300 dark:hover:text-emerald-200",
  warning: "text-amber-700 hover:text-amber-800 dark:text-amber-300 dark:hover:text-amber-200",
  danger: "text-red-700 hover:text-red-800 dark:text-red-300 dark:hover:text-red-200",
}

const dismissClasses: Record<BannerVariant, string> = {
  default: "text-muted-foreground hover:text-foreground",
  primary: "text-primary-foreground/70 hover:text-primary-foreground",
  secondary: "text-secondary-foreground/70 hover:text-secondary-foreground",
  success: "text-emerald-600 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-200",
  warning: "text-amber-600 hover:text-amber-800 dark:text-amber-400 dark:hover:text-amber-200",
  danger: "text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-200",
}

export function Banner({
  variant = "default",
  message,
  action,
  dismissible = true,
  onDismiss,
  startIcon,
  className,
  children,
  ...props
}: BannerProps) {
  const [hidden, setHidden] = React.useState(false)

  if (hidden) return null

  const dismiss = () => {
    setHidden(true)
    onDismiss?.()
  }

  const actionNode = action ? (
    action.href ? (
      <a
        href={action.href}
        className={cn(
          "inline-flex items-center gap-1 font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          actionClasses[variant],
        )}
      >
        {action.label}
        <ArrowRight className="size-4" />
      </a>
    ) : (
      <button
        type="button"
        onClick={action.onClick}
        className={cn(
          "inline-flex items-center gap-1 font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          actionClasses[variant],
        )}
      >
        {action.label}
        <ArrowRight className="size-4" />
      </button>
    )
  ) : null

  return (
    <div
      role="banner"
      className={cn("flex w-full items-center gap-3 border-y px-4 py-3 text-sm", variantClasses[variant], className)}
      {...props}
    >
      <div className="mx-auto flex w-full max-w-screen-xl flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center sm:justify-between">
        <div className="flex items-center justify-center gap-2">
          {startIcon}
          <span className="font-medium">{message}</span>
          {actionNode ? (
            <span className="hidden sm:inline-flex">{actionNode}</span>
          ) : null}
        </div>
        <div className="flex items-center gap-2">
          {actionNode ? <span className="sm:hidden">{actionNode}</span> : null}
          {dismissible ? (
            <button
              type="button"
              aria-label="Dismiss banner"
              onClick={dismiss}
              className={cn(
                "rounded-md p-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                dismissClasses[variant],
              )}
            >
              <X className="size-4" />
            </button>
          ) : null}
        </div>
      </div>
      {children}
    </div>
  )
}

export default Banner