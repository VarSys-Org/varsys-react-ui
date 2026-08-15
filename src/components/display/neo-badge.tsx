import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/cn"

const neoBadgeVariants = cva(
  "inline-flex items-center gap-1.5 border-2 border-foreground px-3 py-1.5 text-sm font-semibold text-foreground shadow-[2px_2px_0_0_var(--foreground)]",
  {
    variants: {
      variant: {
        info: "bg-blue-100",
        success: "bg-green-100",
        error: "bg-red-100",
        warning: "bg-yellow-100",
        neutral: "bg-background",
      },
      dot: {
        true: "",
        false: "",
      },
    },
    defaultVariants: {
      variant: "neutral",
      dot: false,
    },
  }
)

const dotVariants: Record<string, string> = {
  info: "bg-blue-600",
  success: "bg-green-600",
  error: "bg-red-600",
  warning: "bg-yellow-500",
  neutral: "bg-foreground",
}

export interface NeoBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof neoBadgeVariants> {
  /** Show a square status dot before the label. */
  dot?: boolean
  /** Color for the status dot when `dot` is enabled. */
  dotColor?: string
  /** Renders a remove button; pass a handler to enable it. */
  onRemove?: () => void
}

function NeoBadge({
  className,
  variant = "neutral",
  dot = false,
  dotColor,
  onRemove,
  children,
  ...props
}: NeoBadgeProps) {
  return (
    <span
      className={cn(neoBadgeVariants({ variant, dot, className }))}
      {...props}
    >
      {dot && (
        <span
          aria-hidden="true"
          className={cn(
            "size-2 shrink-0",
            dotColor ?? dotVariants[variant ?? "neutral"]
          )}
        />
      )}
      {children}
      {onRemove && (
        <button
          type="button"
          aria-label="Remove"
          onClick={onRemove}
          className="-m-0.5 ml-0.5 bg-foreground p-0.5 text-background shadow-[2px_2px_0_0_var(--foreground)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none focus:ring-2 focus:ring-yellow-300 focus:outline-none"
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-3.5"
          >
            <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
          </svg>
        </button>
      )}
    </span>
  )
}

export { NeoBadge, neoBadgeVariants }
