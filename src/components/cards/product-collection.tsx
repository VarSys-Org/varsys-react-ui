import * as React from "react"
import { cn } from "@/lib/utils"

export interface ProductCollectionItem {
  title: string
  price: string
  image?: string
  alt?: string
  href?: string
  badge?: string
}

export interface ProductCollectionProps
  extends React.HTMLAttributes<HTMLElement> {
  title?: string
  description?: string
  items: ProductCollectionItem[]
  columns?: 2 | 3 | 4
}

const fallbackImage =
  "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1160"

const gridCols: Record<NonNullable<ProductCollectionProps["columns"]>, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
}

export function ProductCollection({
  title = "Product Collection",
  description,
  items,
  columns = 4,
  className,
  ...props
}: ProductCollectionProps) {
  return (
    <section className={cn("mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8", className)} {...props}>
      {(title || description) && (
        <header>
          <h2 className="text-xl font-bold text-foreground sm:text-3xl">{title}</h2>
          {description && (
            <p className="mt-4 max-w-md text-muted-foreground">{description}</p>
          )}
        </header>
      )}

      <ul className={cn("mt-8 grid gap-4", gridCols[columns])}>
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.href ?? "#"} className="group block overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={item.image ?? fallbackImage}
                  alt={item.alt ?? ""}
                  className="h-87.5 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-112.5"
                />
                {item.badge && (
                  <span className="absolute top-3 left-3 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground shadow-sm">
                    {item.badge}
                  </span>
                )}
              </div>

              <div className="relative bg-background pt-3">
                <h3 className="text-xs text-foreground group-hover:underline group-hover:underline-offset-4">
                  {item.title}
                </h3>

                <p className="mt-2">
                  <span className="tracking-wider text-foreground">{item.price}</span>
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
