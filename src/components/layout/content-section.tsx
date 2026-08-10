"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface ContentSectionProps
  extends React.HTMLAttributes<HTMLElement> {
  title: string
  description?: string
  imageSrc?: string
  imageAlt?: string
  /** Grid layout ratio between text and image. */
  variant?: "half" | "text-third" | "image-third" | "stacked"
  /** Image position when using a side-by-side variant. */
  flip?: boolean
  children?: React.ReactNode
}

const gridMap = {
  half: "md:grid-cols-2",
  "text-third": "md:grid-cols-4 md:[&>*:first-child]:col-span-1 md:[&>*:last-child]:col-span-3",
  "image-third": "md:grid-cols-4 md:[&>*:first-child]:col-span-3 md:[&>*:last-child]:col-span-1",
  stacked: "md:grid-cols-1",
} as const

export function ContentSection({
  title,
  description,
  imageSrc,
  imageAlt = "",
  variant = "half",
  flip = false,
  children,
  className,
  ...props
}: ContentSectionProps) {
  const hasImage = Boolean(imageSrc)
  const orderClass = flip ? "md:order-last" : ""

  return (
    <section className={cn("bg-background", className)} {...props}>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div
          className={cn(
            "grid grid-cols-1 gap-4 md:items-center md:gap-8",
            gridMap[variant]
          )}
        >
          <div>
            <div className="max-w-prose md:max-w-none">
              <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
                {title}
              </h2>
              {description && (
                <p className="mt-4 text-pretty text-muted-foreground">
                  {description}
                </p>
              )}
              {children}
            </div>
          </div>
          {hasImage && (
            <div className={cn(orderClass, variant === "stacked" && "md:mt-4")}>
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full rounded object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
