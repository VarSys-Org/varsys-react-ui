import * as React from "react"
import { cn } from "@/lib/cn"

export interface StatBandItem {
  value: string
  label: string
}

export interface StatsBandProps {
  items: StatBandItem[]
  className?: string
}

export function StatsBand({ items, className }: StatsBandProps) {
  return (
    <section className={cn("py-14", className)}>
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <ul className="flex flex-col items-center justify-center gap-x-12 gap-y-10 sm:flex-row sm:flex-wrap md:gap-x-24">
          {items.map((item) => (
            <li key={item.label} className="text-center">
              <h4 className="text-4xl font-semibold text-foreground">
                {item.value}
              </h4>
              <p className="mt-3 font-medium text-muted-foreground">
                {item.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
