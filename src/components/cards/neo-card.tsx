import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const neoCardVariants = cva(
  "block border-2 border-foreground bg-background text-foreground transition-all duration-150",
  {
    variants: {
      shadow: {
        single:
          "shadow-[4px_4px_0_0_var(--foreground)] hover:translate-x-1 hover:translate-y-1 hover:bg-yellow-200 hover:shadow-none",
        stacked:
          "shadow-[4px_4px_0_0_var(--foreground),8px_8px_0_0_var(--foreground),12px_12px_0_0_var(--foreground)] hover:translate-x-3 hover:translate-y-3 hover:bg-yellow-200 hover:shadow-none",
        flat: "",
      },
      padding: {
        none: "",
        default: "p-4 sm:p-6",
      },
    },
    defaultVariants: {
      shadow: "single",
      padding: "default",
    },
  }
)

export interface NeoCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">,
    VariantProps<typeof neoCardVariants> {
  /** Renders the card as an anchor when a URL is provided. */
  href?: string
  /** Optional heading rendered above the children. */
  title?: React.ReactNode
  /** Optional body copy rendered below the title. */
  description?: React.ReactNode
  /** Optional date shown in the card header. */
  date?: string
}

function NeoCard({
  className,
  href,
  shadow = "single",
  padding = "default",
  title,
  description,
  date,
  children,
  ...props
}: NeoCardProps) {
  const classes = cn(neoCardVariants({ shadow, padding, className }))
  const content = (
    <>
      {(title || date) && (
        <header className="mb-3">
          {date && (
            <time className="text-xs font-semibold uppercase">{date}</time>
          )}
          {title && <h3 className="mt-1 text-xl font-semibold">{title}</h3>}
        </header>
      )}
      {description && <p className="text-pretty">{description}</p>}
      {children}
    </>
  )

  if (href) {
    return (
      <a href={href} className={classes} {...(props as object)}>
        {content}
      </a>
    )
  }

  return (
    <div className={classes} {...props}>
      {content}
    </div>
  )
}

const neoCardWindowVariants = cva("p-3", {
  variants: {
    header: {
      default: "bg-yellow-200",
      neutral: "bg-background",
      primary: "bg-blue-100",
    },
  },
  defaultVariants: {
    header: "default",
  },
})

export interface NeoCardWindowProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">,
    VariantProps<typeof neoCardWindowVariants> {
  /** Window title shown in the title bar. */
  windowTitle?: string
  /** Optional heading rendered in the window body. */
  title?: React.ReactNode
  /** Optional body copy rendered in the window body. */
  description?: React.ReactNode
}

function NeoCardWindow({
  className,
  header = "default",
  windowTitle = "System Message",
  title,
  description,
  children,
  ...props
}: NeoCardWindowProps) {
  return (
    <article
      className={cn(
        "border-2 border-foreground bg-background text-foreground shadow-[4px_4px_0_0_var(--foreground),8px_8px_0_0_var(--foreground)]",
        className
      )}
      {...props}
    >
      <div className={cn(neoCardWindowVariants({ header }))}>
        <div className="flex items-center justify-between">
          <strong className="text-xs font-bold uppercase">{windowTitle}</strong>
          <div className="flex gap-1">
            <span className="size-3 border-2 border-foreground bg-background" />
            <span className="size-3 border-2 border-foreground bg-background" />
          </div>
        </div>
      </div>
      <div className="border-t-2 border-foreground p-4 sm:p-6">
        {title && <h3 className="text-lg font-semibold">{title}</h3>}
        {description && (
          <p className="mt-2 text-sm text-pretty">{description}</p>
        )}
        {children}
      </div>
    </article>
  )
}

export { NeoCard, neoCardVariants, NeoCardWindow, neoCardWindowVariants }
