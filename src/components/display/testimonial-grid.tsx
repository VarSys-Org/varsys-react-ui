"use client"

import * as React from "react"
import { Quote } from "lucide-react"
import { cn } from "@/lib/cn"

export interface TestimonialGridItem {
  avatar: string
  name: string
  title: string
  quote: string
}

export interface TestimonialGridProps
  extends React.HTMLAttributes<HTMLElement> {
  testimonials: TestimonialGridItem[]
  title?: string
  description?: string
}

export function TestimonialGrid({
  testimonials,
  title = "Hear from our customers",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna lorem, euismod volutpat arcu volutpat et.",
  className,
}: TestimonialGridProps) {
  return (
    <section className={cn("relative py-14", className)}>
      <div className="relative z-10 mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="max-w-xl md:mx-auto sm:text-center">
          <h3 className="text-3xl font-semibold text-foreground sm:text-4xl">
            {title}
          </h3>
          <p className="mt-3 text-muted-foreground">{description}</p>
        </div>
        <div className="mt-12">
          <ul className="grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, idx) => (
              <li
                key={idx}
                className="rounded-xl border bg-background shadow-md"
              >
                <div className="p-4">
                  <Quote className="h-9 w-9 text-muted-foreground" />
                </div>
                <figure>
                  <blockquote>
                    <p className="px-4 py-1 text-lg font-semibold text-foreground">
                      {item.quote}
                    </p>
                  </blockquote>
                  <div className="mt-6 flex items-center gap-x-4 bg-indigo-50 p-4 dark:bg-indigo-500/10">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="h-16 w-16 rounded-full border-2 border-indigo-500"
                    />
                    <div>
                      <span className="block font-semibold text-foreground">
                        {item.name}
                      </span>
                      <span className="mt-0.5 block text-sm text-indigo-600">
                        {item.title}
                      </span>
                    </div>
                  </div>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="absolute top-0 h-[350px] w-full"
        style={{
          background:
            "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.17) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
        }}
      />
    </section>
  )
}

export default TestimonialGrid
