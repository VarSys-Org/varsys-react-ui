import * as React from "react"
import { cn } from "@/lib/cn"

export interface BlogCardProps extends React.HTMLAttributes<HTMLElement> {
  image?: string
  alt?: string
  date?: string
  title: string
  description?: string
  href?: string
}

export function BlogCard({
  image = "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1160",
  alt = "",
  date = "10th Oct 2022",
  title,
  description,
  href = "#",
  className,
}: BlogCardProps) {
  return (
    <article
      className={cn(
        "overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg",
        className
      )}
    >
      <img alt={alt} src={image} className="h-56 w-full object-cover" />

      <div className="bg-white p-4 dark:bg-background sm:p-6">
        <time
          dateTime={date}
          className="block text-xs text-gray-500 dark:text-muted-foreground"
        >
          {date}
        </time>

        <a href={href}>
          <h3 className="mt-0.5 text-lg text-gray-900 dark:text-foreground">
            {title}
          </h3>
        </a>

        {description ? (
          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
    </article>
  )
}

export default BlogCard
