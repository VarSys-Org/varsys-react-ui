import * as React from "react"
import { cn } from "@/lib/cn"

export interface SkipLinkItem {
  label: string
  href: string
}

export interface SkipLinkProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "single" | "multi"
  mainContentHref?: string
  items?: SkipLinkItem[]
}

export function SkipLink({
  variant = "single",
  mainContentHref = "#mainContent",
  items = [
    { label: "Navigation", href: "#mainNavigation" },
    { label: "Content", href: "#mainContent" },
    { label: "Footer", href: "#mainFooter" },
  ],
  className,
}: SkipLinkProps) {
  if (variant === "multi") {
    return (
      <nav
        className={cn(
          "absolute top-0 left-1/2 w-full max-w-sm -translate-x-1/2 -translate-y-full rounded-sm bg-gray-100 p-4 transition-transform focus-within:translate-y-4",
          className
        )}
        aria-label="Skip to"
      >
        <p className="text-xs font-semibold tracking-wide text-gray-700 uppercase">
          Skip to:
        </p>

        <div className="mt-1 flex flex-wrap gap-2">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-blue-700 transition-colors hover:text-blue-600 active:text-blue-600"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    )
  }

  return (
    <a
      href={mainContentHref}
      className={cn(
        "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full rounded-sm bg-blue-700 px-12 py-3 text-sm font-semibold text-white transition-transform hover:bg-blue-600 focus:translate-y-4 active:bg-blue-600",
        className
      )}
    >
      Skip to main content
    </a>
  )
}

export default SkipLink
