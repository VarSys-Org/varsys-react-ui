"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface TestimonialSliderItem {
  avatar: string
  name: string
  title: string
  quote: string
}

export interface TestimonialSliderProps
  extends React.HTMLAttributes<HTMLElement> {
  testimonials: TestimonialSliderItem[]
  heading?: string
}

export function TestimonialSlider({
  testimonials,
  heading = "What people are saying",
  className,
}: TestimonialSliderProps) {
  const [current, setCurrent] = React.useState(0)
  const active = testimonials[current] ?? testimonials[0]

  return (
    <section className={cn("py-14", className)}>
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="pb-6 font-semibold text-indigo-600">{heading}</h3>
          {active ? (
            <figure>
              <blockquote>
                <p className="text-xl font-semibold text-foreground sm:text-2xl">
                  &ldquo;{active.quote}&rdquo;
                </p>
              </blockquote>
              <div className="mt-6">
                <img
                  src={active.avatar}
                  alt={active.name}
                  className="mx-auto h-16 w-16 rounded-full"
                />
                <div className="mt-3">
                  <span className="block font-semibold text-foreground">
                    {active.name}
                  </span>
                  <span className="mt-0.5 block text-sm text-muted-foreground">
                    {active.title}
                  </span>
                </div>
              </div>
            </figure>
          ) : null}
        </div>
        <div className="mt-6">
          <ul className="flex justify-center gap-x-3">
            {testimonials.map((item, idx) => (
              <li key={idx}>
                <button
                  type="button"
                  aria-label={`Show testimonial from ${item.name}`}
                  className={cn(
                    "h-2.5 w-2.5 rounded-full ring-indigo-600 ring-offset-2 duration-150 focus:ring",
                    current === idx ? "bg-indigo-600" : "bg-muted",
                  )}
                  onClick={() => setCurrent(idx)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSlider
