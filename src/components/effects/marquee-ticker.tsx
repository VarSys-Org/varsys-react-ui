import * as React from "react"
import { SparklesIcon } from "lucide-react"
import { cn } from "@/lib/cn"

export interface MarqueeTickerProps {
  items: string[]
  duration?: number
  className?: string
}

export function MarqueeTicker({
  items,
  duration = 40,
  className,
}: MarqueeTickerProps) {
  const doubled = [...items, ...items]

  return (
    <div
      className={cn(
        "relative overflow-hidden border-y border-border bg-background py-2.5",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="flex overflow-hidden">
        <div
          className="animate-scroll flex w-max items-center gap-4 hover:[animation-play-state:paused]"
          style={{ "--animation-duration": `${duration}s` } as React.CSSProperties}
        >
          {doubled.map((item, index) => (
            <span
              key={`${item}-${index}`}
              aria-hidden={index >= items.length}
              className="inline-flex items-center gap-2 whitespace-nowrap text-sm text-foreground"
            >
              <SparklesIcon
                aria-hidden="true"
                className="size-4 text-muted-foreground"
              />
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
    </div>
  )
}
