import * as React from "react"
import {
  FilePlus2,
  Search,
  Upload,
  Zap,
  type LucideIcon,
} from "lucide-react"

import { cn } from "@/lib/cn"
import { Button } from "@/components/buttons/button"

export interface EmptyStateAction {
  label: string
  onClick?: () => void
  variant?: React.ComponentProps<typeof Button>["variant"]
  href?: string
}

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  description?: string
  variant?: "default" | "upload" | "search" | "started"
  icon?: React.ReactNode
  primaryAction?: EmptyStateAction
  secondaryAction?: EmptyStateAction
  footer?: React.ReactNode
}

const variantIcons: Record<NonNullable<EmptyStateProps["variant"]>, LucideIcon> = {
  default: FilePlus2,
  upload: Upload,
  search: Search,
  started: Zap,
}

export function EmptyState({
  title = "No items found",
  description = "Get started by creating your first item. It only takes a few seconds.",
  variant = "default",
  icon,
  primaryAction,
  secondaryAction,
  footer,
  className,
}: EmptyStateProps) {
  const Icon = variantIcons[variant]

  return (
    <div
      data-slot="empty-state"
      className={cn(
        "max-w-md text-center rounded-xl border border-border bg-card p-8",
        className
      )}
    >
      <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-muted text-muted-foreground">
        {icon ?? <Icon className="size-10" aria-hidden="true" />}
      </div>

      <h2 className="mt-6 text-2xl font-bold text-foreground">{title}</h2>

      <p className="mt-4 text-pretty text-muted-foreground">{description}</p>

      {primaryAction || secondaryAction ? (
        <div className="mt-6 flex flex-col gap-3">
          {primaryAction ? (
            primaryAction.href ? (
              <Button
                className="w-full"
                render={<a href={primaryAction.href} />}
                nativeButton={false}
                onClick={primaryAction.onClick}
              >
                {primaryAction.label}
              </Button>
            ) : (
              <Button
                className="w-full"
                variant={primaryAction.variant}
                onClick={primaryAction.onClick}
              >
                {primaryAction.label}
              </Button>
            )
          ) : null}
          {secondaryAction ? (
            secondaryAction.href ? (
              <Button
                variant={secondaryAction.variant ?? "outline"}
                className="w-full"
                render={<a href={secondaryAction.href} />}
                nativeButton={false}
                onClick={secondaryAction.onClick}
              >
                {secondaryAction.label}
              </Button>
            ) : (
              <Button
                variant={secondaryAction.variant ?? "outline"}
                className="w-full"
                onClick={secondaryAction.onClick}
              >
                {secondaryAction.label}
              </Button>
            )
          ) : null}
        </div>
      ) : null}

      {footer ? <div className="mt-6 text-sm text-muted-foreground">{footer}</div> : null}
    </div>
  )
}

export default EmptyState
