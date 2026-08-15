import * as React from "react"
import { cn } from "@/lib/cn"

export interface CopyMarkupProps extends React.HTMLAttributes<HTMLDivElement> {
  renderItem: (id: string) => React.ReactNode
  addLabel?: string
  limit?: number
  initialCount?: number
}

export function CopyMarkup({
  renderItem,
  addLabel = "Add Name",
  limit = 3,
  initialCount = 1,
  className,
}: CopyMarkupProps) {
  const id = React.useId()
  const [count, setCount] = React.useState(initialCount)

  const items = Array.from({ length: count }, (_, i) => (
    <div key={`${id}-${i}`}>{renderItem(`${id}-${i}`)}</div>
  ))

  return (
    <div className={cn("max-w-xs w-full", className)}>
      <div className="space-y-3">{items}</div>

      <p className="mt-3 text-end">
        <button
          type="button"
          onClick={() => setCount((c) => Math.min(c + 1, limit))}
          disabled={count >= limit}
          className="py-1.5 px-2 inline-flex items-center gap-x-1 text-xs font-medium rounded-full bg-background border border-dashed border-border text-foreground hover:bg-muted focus:outline-none focus:bg-muted disabled:pointer-events-none disabled:opacity-50"
        >
          <svg
            className="shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
          {addLabel}
        </button>
      </p>
    </div>
  )
}

export default CopyMarkup
