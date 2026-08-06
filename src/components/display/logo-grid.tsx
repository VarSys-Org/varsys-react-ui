import * as React from "react"

import { cn } from "@/lib/utils"

export interface LogoGridItem {
  name: string
  logo: React.ReactNode
  href?: string
}

export interface LogoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  description?: string
  items?: LogoGridItem[]
  /** Render the grid with dividing borders instead of spaced tiles. */
  divided?: boolean
  columns?: 2 | 3 | 4
}

export function LogoGrid({
  title = "Who's using it?",
  description = "Trusted by teams building the future.",
  items = [],
  divided = false,
  columns = 4,
  className,
}: LogoGridProps) {
  const gridColumns: Record<number, string> = {
    2: "grid-cols-2",
    3: "grid-cols-2 md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  }

  return (
    <div data-slot="logo-grid" className={cn("py-14", className)}>
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        {(title || description) ? (
          <div className="mx-auto max-w-xl text-center">
            {title ? (
              <h3 className="text-3xl font-semibold text-foreground sm:text-4xl">
                {title}
              </h3>
            ) : null}
            {description ? (
              <p className="mt-3 text-muted-foreground">{description}</p>
            ) : null}
          </div>
        ) : null}

        {items.length > 0 ? (
          <div className={cn("mt-12 flex justify-center", divided ? "" : "flex-wrap gap-x-10 gap-y-6")}>
            {divided ? (
              <ul
                className={cn(
                  "grid w-full max-w-4xl divide-y divide-border overflow-hidden rounded-xl border border-border bg-card md:grid-cols-2 md:divide-y-0",
                  columns === 4 && "lg:grid-cols-4"
                )}
              >
                {items.map((item, index) => (
                  <li
                    key={item.name}
                    className={cn(
                      "flex items-center justify-center p-6 text-muted-foreground transition-colors hover:text-foreground",
                      index % 2 === 1 && "md:border-s md:border-border",
                      index >= 2 && "lg:border-t lg:border-border",
                      columns === 4 && index >= 4 && "md:border-t md:border-border"
                    )}
                  >
                    {item.href ? (
                      <a href={item.href} className="inline-flex" aria-label={item.name}>
                        {item.logo}
                      </a>
                    ) : (
                      <span className="inline-flex">{item.logo}</span>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <ul
                className={cn(
                  "inline-grid gap-x-10 gap-y-6",
                  gridColumns[columns]
                )}
              >
                {items.map((item) => (
                  <li key={item.name} className="flex items-center justify-center">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-muted-foreground transition-colors hover:text-foreground"
                        aria-label={item.name}
                      >
                        {item.logo}
                      </a>
                    ) : (
                      <span className="inline-flex text-muted-foreground">
                        {item.logo}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default LogoGrid
