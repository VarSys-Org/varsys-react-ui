"use client"

import * as React from "react"
import { cn } from "@/lib/cn"

export interface BackgroundOverlayCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  image: string
  hoverImage: string
  title: string
  description: string
  overlayOpacity?: number
}

export function BackgroundOverlayCard({
  image,
  hoverImage,
  title,
  description,
  overlayOpacity = 0.5,
  className,
  ...props
}: BackgroundOverlayCardProps) {
  return (
    <div className={cn("w-full max-w-xs", className)} {...props}>
      <div
        className={cn(
          "group relative flex h-96 w-full cursor-pointer flex-col justify-end overflow-hidden rounded-md border border-transparent p-4 shadow-xl transition-all duration-500 dark:border-neutral-800",
          "bg-cover"
        )}
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div
          className={cn(
            "pointer-events-none absolute inset-0 bg-black transition-opacity duration-500",
            "opacity-0 group-hover:opacity-100"
          )}
          style={{ opacity: undefined }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            backgroundImage: `url(${hoverImage})`,
            backgroundSize: "cover",
            opacity: overlayOpacity,
          }}
        />
        <div className="text relative z-50">
          <h1 className="relative font-bold text-xl text-gray-50 md:text-3xl">
            {title}
          </h1>
          <p className="relative my-4 text-base font-normal text-gray-50">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default BackgroundOverlayCard
