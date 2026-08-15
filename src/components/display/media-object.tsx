import * as React from "react"
import { cn } from "@/lib/cn"

export interface MediaObjectProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  image?: string
  alt?: string
}

export function MediaObject({
  title,
  description,
  image = "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160",
  alt = "",
  className,
}: MediaObjectProps) {
  return (
    <div className={cn("flex items-start gap-4", className)}>
      <img alt={alt} src={image} className="size-20 rounded object-cover" />

      <div>
        <h3 className="font-medium text-gray-900 sm:text-lg">{title}</h3>

        <p className="mt-0.5 text-gray-700">{description}</p>
      </div>
    </div>
  )
}

export default MediaObject
