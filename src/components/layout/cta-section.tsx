import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/buttons/button"

interface CTASectionProps extends React.ComponentProps<"section"> {
  title: string
  description?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

function CTASection({
  className,
  title,
  description,
  primaryLabel,
  primaryHref = "#",
  secondaryLabel,
  secondaryHref = "#",
  ...props
}: CTASectionProps) {
  return (
    <section
      data-slot="cta-section"
      className={cn(
        "mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8",
        className
      )}
      {...props}
    >
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-lg text-muted-foreground">
          {description}
        </p>
      )}
      <div className="flex flex-wrap items-center justify-center gap-4">
        {primaryLabel && (
          <a href={primaryHref}>
            <Button>{primaryLabel}</Button>
          </a>
        )}
        {secondaryLabel && (
          <a href={secondaryHref}>
            <Button variant="outline">{secondaryLabel}</Button>
          </a>
        )}
      </div>
    </section>
  )
}

export { CTASection }
