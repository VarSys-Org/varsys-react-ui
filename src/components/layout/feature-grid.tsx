import * as React from "react"
import { cn } from "@/lib/cn"

export interface FeatureGridItem {
  icon: React.ReactNode
  title: string
  description: string
}

export interface FeatureGridProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  description?: string
  items: FeatureGridItem[]
}

export function FeatureGrid({
  title,
  description,
  items,
  className,
}: FeatureGridProps) {
  return (
    <div className={cn("mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8", className)}>
      {title || description ? (
        <div className="mx-auto max-w-lg text-center">
          {title ? (
            <h2 className="text-3xl/tight font-bold text-gray-900 dark:text-foreground sm:text-4xl">
              {title}
            </h2>
          ) : null}
          {description ? (
            <p className="mt-4 text-lg text-pretty text-gray-700 dark:text-muted-foreground">
              {description}
            </p>
          ) : null}
        </div>
      ) : null}

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-lg border border-gray-200 p-6 dark:border-border"
          >
            <div className="inline-flex rounded-lg bg-gray-100 p-3 text-gray-700 dark:bg-muted dark:text-foreground">
              {item.icon}
            </div>

            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-foreground">
              {item.title}
            </h3>

            <p className="mt-2 text-pretty text-gray-700 dark:text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeatureGrid
