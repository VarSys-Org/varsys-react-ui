import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const neoButtonVariants = cva(
  "relative inline-flex select-none items-center justify-center gap-2 border-2 border-foreground bg-background font-semibold text-foreground transition-all duration-150 outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "shadow-[4px_4px_0_0_var(--foreground)] hover:translate-x-1 hover:translate-y-1 hover:bg-yellow-200 hover:shadow-none active:translate-x-1 active:translate-y-1 active:shadow-none",
        pressed:
          "shadow-[4px_4px_0_0_var(--foreground)] hover:-translate-x-1 hover:-translate-y-1 hover:bg-yellow-200 hover:shadow-[-1px_-1px_0_0_var(--foreground)]",
        ringed:
          "shadow-[4px_4px_0_0_var(--foreground)] ring-2 ring-foreground ring-offset-2 ring-offset-yellow-300 hover:bg-yellow-200",
        underline:
          "after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:bg-foreground hover:after:h-full",
      },
      size: {
        default: "px-5 py-3 text-sm",
        sm: "px-3 py-2 text-xs",
        lg: "px-7 py-4 text-base",
        icon: "size-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface NeoButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof neoButtonVariants> {
  /** Render the button as an anchor when a URL is provided. */
  href?: string
  /** Target for anchor rendering. */
  target?: string
}

function NeoButton({
  className,
  variant = "default",
  size = "default",
  href,
  target,
  children,
  type,
  ...props
}: NeoButtonProps) {
  const classes = cn(neoButtonVariants({ variant, size, className }))

  if (href) {
    return (
      <a href={href} target={target} className={classes}>
        {variant === "underline" ? (
          <span className="relative z-10">{children}</span>
        ) : (
          children
        )}
      </a>
    )
  }

  return (
    <button type={type ?? "button"} className={classes} {...props}>
      {variant === "underline" ? (
        <span className="relative z-10">{children}</span>
      ) : (
        children
      )}
    </button>
  )
}

export { NeoButton, neoButtonVariants }
