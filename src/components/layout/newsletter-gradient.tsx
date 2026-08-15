"use client"

import * as React from "react"
import { Mail } from "lucide-react"
import { cn } from "@/lib/cn"

export interface NewsletterGradientProps
  extends React.HTMLAttributes<HTMLElement> {
  title?: string
  placeholder?: string
  subscribeLabel?: string
}

export function NewsletterGradient({
  title = "Get our beautiful newsletter straight to your inbox.",
  placeholder = "Enter your email",
  subscribeLabel = "Subscribe",
  className,
}: NewsletterGradientProps) {
  return (
    <section className={cn("relative py-28", className)}>
      <div className="relative z-10 mx-auto flex max-w-screen-xl items-center justify-between gap-12 px-4 md:px-8 md:flex">
        <div className="max-w-lg flex-1">
          <h3 className="text-3xl font-bold text-foreground">{title}</h3>
        </div>
        <div className="mt-6 flex-1 md:mt-0">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center gap-x-3 md:justify-end"
          >
            <div className="relative">
              <Mail className="absolute left-3 inset-y-0 my-auto h-6 w-6 text-muted-foreground" />
              <input
                type="email"
                required
                placeholder={placeholder}
                className="w-full rounded-lg border bg-background py-2 pl-12 pr-3 text-muted-foreground shadow-sm outline-none focus:border-indigo-600"
              />
            </div>
            <button
              type="submit"
              className="block rounded-lg bg-indigo-600 px-4 py-3 text-sm font-medium text-center text-white shadow hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none"
            >
              {subscribeLabel}
            </button>
          </form>
        </div>
      </div>
      <div
        className="absolute inset-0 h-full w-full"
        style={{
          background:
            "linear-gradient(137.92deg, rgba(192, 132, 252, 0) 20.43%, rgba(232, 121, 249, 0.26) 49.66%, rgba(204, 171, 238, 0) 92.38%)",
        }}
      />
    </section>
  )
}

export default NewsletterGradient
