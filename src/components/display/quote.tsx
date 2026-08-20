import type { HTMLAttributes } from "react"
import { forwardRef } from "react"

import { cn } from "@/lib/cn"

export interface QuoteProps extends HTMLAttributes<HTMLQuoteElement> {
  truncate?: boolean
}

export const Quote = forwardRef<HTMLQuoteElement, QuoteProps>(
  ({ children, className, truncate = false, ...props }, ref) => {
    return (
      <q
        ref={ref}
        className={cn(
          "quote text-inherit",
          truncate &&
            "line-clamp-2 overflow-hidden text-ellipsis whitespace-nowrap",
          className,
        )}
        {...props}
      >
        {children}
      </q>
    )
  },
)

Quote.displayName = "Quote"

export default Quote