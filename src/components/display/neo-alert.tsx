import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const neoAlertVariants = cva(
  "flex items-start gap-3 border-2 border-foreground p-4 shadow-[4px_4px_0_0_var(--foreground)]",
  {
    variants: {
      variant: {
        info: "bg-blue-100 text-blue-900",
        success: "bg-green-100 text-green-900",
        error: "bg-red-100 text-red-900",
        warning: "bg-yellow-100 text-yellow-900",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
)

export interface NeoAlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof neoAlertVariants> {
  /** Optional alert heading. */
  title?: string
  /** Optional custom icon rendered before the content. */
  icon?: React.ReactNode
}

function NeoAlert({
  className,
  variant = "info",
  title,
  icon,
  children,
  ...props
}: NeoAlertProps) {
  return (
    <div
      role="alert"
      className={cn(neoAlertVariants({ variant, className }))}
      {...props}
    >
      {icon ?? <DefaultIcon variant={variant ?? "info"} />}
      <div className="flex-1 leading-tight">
        {title && <strong className="block font-semibold">{title}</strong>}
        <p className="font-medium">{children}</p>
      </div>
    </div>
  )
}

function DefaultIcon({
  variant,
}: {
  variant: NonNullable<NeoAlertProps["variant"]>
}) {
  const common = "mt-0.5 size-4 shrink-0"
  switch (variant) {
    case "success":
      return (
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className={common}
        >
          <path
            fillRule="evenodd"
            d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-9.53.47a.75.75 0 0 1 1.06 0L8 9.94l3.22-3.22a.75.75 0 0 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0L5.47 9.53a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      )
    case "error":
      return (
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className={common}
        >
          <path
            fillRule="evenodd"
            d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM8 4.75a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 4.75Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
            clipRule="evenodd"
          />
        </svg>
      )
    case "warning":
      return (
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className={common}
        >
          <path
            fillRule="evenodd"
            d="M6.701 2.25c.577-1 2.02-1 2.598 0l5.196 9a1.5 1.5 0 0 1-1.299 2.25H2.804a1.5 1.5 0 0 1-1.3-2.25l5.197-9ZM8 6a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5A.75.75 0 0 1 8 6Zm0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
            clipRule="evenodd"
          />
        </svg>
      )
    default:
      return (
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className={common}
        >
          <path
            fillRule="evenodd"
            d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM9 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.75 8a.75.75 0 0 0 0 1.5h.75v1.75a.75.75 0 0 0 1.5 0v-2.5A.75.75 0 0 0 8.25 8h-1.5Z"
            clipRule="evenodd"
          />
        </svg>
      )
  }
}

export { NeoAlert, neoAlertVariants }
