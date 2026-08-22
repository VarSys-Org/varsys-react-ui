import * as React from "react"

import { cn } from "@/lib/cn"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/overlays/tooltip"

export interface EllipsisTextProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  /** Text to display, truncated with an ellipsis when it overflows. */
  text?: string
  /** Number of visible lines before truncating. */
  rows?: number
  /** Show a "Show more" toggle instead of a hover tooltip. */
  expandable?: boolean
}

export function EllipsisText({
  text,
  rows = 1,
  expandable = false,
  className,
  ...props
}: EllipsisTextProps) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const [truncated, setTruncated] = React.useState(false)
  const [expanded, setExpanded] = React.useState(false)

  const clampClass =
    rows === 1 ? "truncate" : `line-clamp-${Math.min(Math.max(Math.trunc(rows), 1), 6)}`

  React.useEffect(() => {
    const el = ref.current
    if (!el) return

    const check = () => {
      const clipped =
        rows === 1 ? el.scrollWidth > el.clientWidth : el.scrollHeight > el.clientHeight
      setTruncated(clipped)
    }

    check()
    const observer = new ResizeObserver(check)
    observer.observe(el)
    return () => observer.disconnect()
  }, [rows, text])

  const renderSpan = (override?: React.ComponentProps<"span">) => (
    <span
      {...props}
      {...override}
      className={cn(clampClass, expanded && "line-clamp-none", className)}
    >
      {text}
    </span>
  )

  if (!truncated || expanded) {
    return renderSpan()
  }

  if (expandable) {
    return (
      <span className="inline-flex min-w-0 flex-col items-start gap-1">
        {renderSpan()}
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className="text-xs font-medium text-primary hover:underline"
        >
          Show more
        </button>
      </span>
    )
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          render={(triggerProps) => {
            const { ref: triggerRef, ...rest } = triggerProps as {
              ref?: React.Ref<HTMLSpanElement>
              [key: string]: unknown
            }
            return renderSpan({
              ...rest,
              ref: (node: HTMLSpanElement | null) => {
                ref.current = node
                if (typeof triggerRef === "function") triggerRef(node)
                else if (triggerRef && typeof triggerRef === "object") {
                  ;(triggerRef as React.MutableRefObject<HTMLSpanElement | null>).current = node
                }
              },
            })
          }}
        />
        <TooltipContent className="max-w-md break-words">{text}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default EllipsisText