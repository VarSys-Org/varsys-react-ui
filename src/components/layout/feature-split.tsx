"use client"

import * as React from "react"
import { ArrowRight, Check } from "lucide-react"
import { cn } from "@/lib/cn"

export interface FeatureSplitAction {
  label: string
  href?: string
  onClick?: () => void
}

export interface FeatureSplitProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  bullets?: string[]
  image: React.ReactNode
  imageAlt?: string
  imageClassName?: string
  badge?: React.ReactNode
  primaryAction?: FeatureSplitAction
  secondaryAction?: FeatureSplitAction
  flip?: boolean
  className?: string
  contentClassName?: string
}

export function FeatureSplit({
  eyebrow,
  title,
  description,
  bullets,
  image,
  imageAlt,
  imageClassName,
  badge,
  primaryAction,
  secondaryAction,
  flip = false,
  className,
  contentClassName,
  ...props
}: FeatureSplitProps) {
  const renderAction = (
    action: FeatureSplitAction,
    variant: "primary" | "secondary",
  ) => {
    const classes =
      variant === "primary"
        ? "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90"
        : "border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground"

    const inner = (
      <>
        {action.label}
        <ArrowRight className="size-4" />
      </>
    )

    return action.href ? (
      <a
        href={action.href}
        className={cn(
          "inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          classes,
        )}
      >
        {inner}
      </a>
    ) : (
      <button
        type="button"
        onClick={action.onClick}
        className={cn(
          "inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          classes,
        )}
      >
        {inner}
      </button>
    )
  }

  return (
    <section className={cn("mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8", className)} {...props}>
      <div
        className={cn(
          "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
          flip && "lg:[&>*:first-child]:order-2",
        )}
      >
        <div className={cn("flex flex-col items-start", contentClassName)}>
          {eyebrow ? (
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary uppercase">
              {eyebrow}
            </span>
          ) : null}
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              {description}
            </p>
          ) : null}
          {bullets && bullets.length > 0 ? (
            <ul className="mt-6 grid gap-3 sm:grid-cols-1">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="size-3.5" />
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>
          ) : null}
          {primaryAction || secondaryAction ? (
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {primaryAction ? renderAction(primaryAction, "primary") : null}
              {secondaryAction ? renderAction(secondaryAction, "secondary") : null}
            </div>
          ) : null}
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-xl border border-border bg-muted shadow-lg">
            {typeof image === "string" ? (
              <img
                src={image}
                alt={imageAlt ?? ""}
                className={cn("aspect-[4/3] w-full object-cover", imageClassName)}
              />
            ) : (
              image
            )}
          </div>
          {badge ? (
            <div className="absolute -bottom-4 left-4 rounded-lg border border-border bg-card px-4 py-3 shadow-lg">
              {badge}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export default FeatureSplit