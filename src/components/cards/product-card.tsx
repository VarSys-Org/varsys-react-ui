import * as React from "react"
import { cn } from "@/lib/cn"

export interface ProductCardProps extends React.HTMLAttributes<HTMLAnchorElement> {
  image?: string
  hoverImage?: string
  alt?: string
  title: string
  price: string
  href?: string
}

export function ProductCard({
  image = "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1160",
  hoverImage = "https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?auto=format&fit=crop&q=80&w=1160",
  alt = "",
  title,
  price,
  href = "#",
  className,
}: ProductCardProps) {
  return (
    <a href={href} className={cn("group block overflow-hidden", className)}>
      <div className="relative h-87.5 sm:h-112.5">
        <img
          src={image}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
        />

        <img
          src={hoverImage}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
        />
      </div>

      <div className="relative bg-white pt-3 dark:bg-background">
        <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4 dark:text-foreground">
          {title}
        </h3>

        <p className="mt-1.5 tracking-wide text-gray-900 dark:text-foreground">
          {price}
        </p>
      </div>
    </a>
  )
}

export default ProductCard
