"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface HeroBannerProps extends React.HTMLAttributes<HTMLElement> {
  title: string
  /** Words in the title to highlight with the accent color. */
  highlight?: string
  description?: string
  primaryAction?: string
  secondaryAction?: string
  primaryHref?: string
  secondaryHref?: string
  /** Layout of the banner content. */
  align?: "center" | "left"
  /** Render content in a two-column layout with an image. */
  imageSrc?: string
  imageAlt?: string
  /** Fill the viewport height. */
  fullHeight?: boolean
}

export function HeroBanner({
  title,
  highlight,
  description,
  primaryAction,
  secondaryAction,
  primaryHref = "#",
  secondaryHref = "#",
  align = "center",
  imageSrc,
  imageAlt = "",
  fullHeight = false,
  className,
  ...props
}: HeroBannerProps) {
  const textAlign = align === "center" ? "text-center" : "text-left"
  const actionAlign = align === "center" ? "justify-center" : "justify-start"

  const titleNode = highlight ? (
    <>
      {title.replace(highlight, "")}
      <strong className="text-primary">{highlight}</strong>
    </>
  ) : (
    title
  )

  const content = (
    <div className={cn("max-w-prose", textAlign)}>
      <h1 className="text-4xl font-bold text-foreground sm:text-5xl">
        {titleNode}
      </h1>
      {description && (
        <p className="mt-4 text-pretty text-muted-foreground sm:text-lg/relaxed">
          {description}
        </p>
      )}
      {(primaryAction || secondaryAction) && (
        <div className={cn("mt-4 flex gap-4 sm:mt-6", actionAlign)}>
          {primaryAction && (
            <a
              href={primaryHref}
              className="inline-block rounded border border-primary bg-primary px-5 py-3 font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              {primaryAction}
            </a>
          )}
          {secondaryAction && (
            <a
              href={secondaryHref}
              className="inline-block rounded border border-border px-5 py-3 font-medium text-foreground shadow-sm transition-colors hover:bg-muted"
            >
              {secondaryAction}
            </a>
          )}
        </div>
      )}
    </div>
  )

  return (
    <section
      className={cn(
        "bg-background",
        fullHeight && "lg:grid lg:h-screen lg:place-content-center",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "mx-auto w-screen max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32",
          imageSrc &&
            "md:grid md:grid-cols-2 md:items-center md:gap-4"
        )}
      >
        {content}
        {imageSrc && (
          <div>
            <img src={imageSrc} alt={imageAlt} className="w-full rounded" />
          </div>
        )}
      </div>
    </section>
  )
}
