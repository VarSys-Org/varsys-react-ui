"use client"

import * as React from "react"
import { motion } from "motion/react"
import { Menu, X } from "lucide-react"

import { cn } from "@/lib/cn"

export interface NavbarUnderlineItem {
  /** Link label. */
  label: string
  /** Destination href. */
  href: string
  /** Mark the link as active. */
  active?: boolean
}

export interface NavbarUnderlineProps
  extends React.HTMLAttributes<HTMLElement> {
  /** Navigation links to render. */
  items: NavbarUnderlineItem[]
  /** Brand/logo content rendered on the left. */
  logo?: React.ReactNode
  /** Extra content rendered on the right. */
  right?: React.ReactNode
}

export function NavbarUnderline({
  items,
  logo,
  right,
  className,
  ...props
}: NavbarUnderlineProps) {
  const [open, setOpen] = React.useState(false)
  const activeIndex = items.findIndex((item) => item.active)

  return (
    <header
      data-slot="navbar-underline"
      className={cn(
        "sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md",
        className,
      )}
      {...props}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-6">
          {logo && <div className="flex items-center">{logo}</div>}
          <div className="hidden items-center gap-1 md:flex">
            {items.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none",
                  item.active
                    ? "text-foreground"
                    : "text-muted-foreground",
                )}
              >
                {item.label}
                {item.active && (
                  <motion.span
                    layoutId="navbar-underline-active"
                    className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-primary"
                  />
                )}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          {right}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none md:hidden"
          >
            {open ? (
              <X aria-hidden="true" className="size-4" />
            ) : (
              <Menu aria-hidden="true" className="size-4" />
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-dashed border-border px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground",
                  item.active
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground",
                )}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}

      <span className="sr-only">
        {activeIndex > -1 ? items[activeIndex].label : "Navigation"}
      </span>
    </header>
  )
}

export default NavbarUnderline