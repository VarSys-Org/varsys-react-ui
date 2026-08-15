"use client"

import * as React from "react"
import { cn } from "@/lib/cn"

export interface StatsImageItem {
  value: string
  label: string
}

export interface StatsImageProps
  extends React.HTMLAttributes<HTMLElement> {
  stats: StatsImageItem[]
  title?: string
  description?: string
  imageSrc?: string
  imageAlt?: string
}

export function StatsImage({
  stats,
  title = "We do our best to make customers always happy",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis sollicitudin quam ut tincidunt.",
  imageSrc = "https://images.unsplash.com/photo-1622675363311-3e1904dc1885?auto=format&fit=crop&w=870&q=80",
  imageAlt = "",
  className,
}: StatsImageProps) {
  return (
    <section className={cn("py-14", className)}>
      <div className="mx-auto flex max-w-screen-xl items-start justify-between gap-x-12 px-4 text-muted-foreground md:px-8 lg:flex">
        <div className="hidden lg:block lg:max-w-xl">
          <img src={imageSrc} alt={imageAlt} className="rounded-lg" />
        </div>
        <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
          <div className="max-w-2xl">
            <h3 className="text-3xl font-semibold text-foreground sm:text-4xl">
              {title}
            </h3>
            <p className="mt-3 max-w-xl">{description}</p>
          </div>
          <div className="mt-6 flex-none md:mt-0 lg:mt-6">
            <ul className="inline-grid grid-cols-2 gap-x-14 gap-y-8">
              {stats.map((item, idx) => (
                <li key={idx}>
                  <h4 className="text-4xl font-semibold text-indigo-600">
                    {item.value}
                  </h4>
                  <p className="mt-3 font-medium">{item.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsImage
