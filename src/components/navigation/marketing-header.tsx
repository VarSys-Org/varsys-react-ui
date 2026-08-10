"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface MarketingHeaderNavItem {
  label: string
  href?: string
}

export interface MarketingHeaderProps
  extends React.HTMLAttributes<HTMLElement> {
  /** Brand name rendered as text next to the logo slot. */
  brand?: string
  /** Custom logo element rendered in place of the text brand. */
  logo?: React.ReactNode
  navigation?: MarketingHeaderNavItem[]
  /** Primary CTA label. */
  ctaLabel?: string
  /** Secondary CTA label. */
  secondaryCtaLabel?: string
  ctaHref?: string
  secondaryCtaHref?: string
  /** Show both CTAs on large screens only. */
  stackedCtas?: boolean
}

export function MarketingHeader({
  brand = "Brand",
  logo,
  navigation = [],
  ctaLabel,
  secondaryCtaLabel,
  ctaHref = "#",
  secondaryCtaHref = "#",
  stackedCtas = false,
  className,
  ...props
}: MarketingHeaderProps) {
  return (
    <header
      className={cn("border-b border-border bg-card", className)}
      {...props}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center gap-12">
            {logo ?? (
              <a
                href="#"
                className="block text-lg font-semibold text-foreground"
              >
                {brand}
              </a>
            )}
            {navigation.length > 0 && (
              <nav
                aria-label="Global"
                className="hidden gap-6 text-sm md:flex"
              >
                {navigation.map((item) => (
                  <a
                    key={item.label}
                    href={item.href ?? "#"}
                    className="text-muted-foreground transition hover:text-foreground"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            )}
          </div>

          {(ctaLabel || secondaryCtaLabel) && (
            <div className="flex items-center gap-4">
              <div
                className={cn(
                  "sm:flex sm:gap-4",
                  stackedCtas ? "flex-col" : "flex-row"
                )}
              >
                {secondaryCtaLabel && (
                  <a
                    href={secondaryCtaHref}
                    className={cn(
                      "rounded-md bg-muted px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-muted/80",
                      stackedCtas && "hidden sm:block"
                    )}
                  >
                    {secondaryCtaLabel}
                  </a>
                )}
                {ctaLabel && (
                  <a
                    href={ctaHref}
                    className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90"
                  >
                    {ctaLabel}
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
