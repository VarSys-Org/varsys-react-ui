"use client"

import * as React from "react"
import { ArrowUp } from "lucide-react"
import { cn } from "@/lib/cn"

export interface ScrollToTopProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "ref"> {
  showAfter?: number
  position?: "bottom-right" | "bottom-left" | "bottom-center"
  label?: string
  showLabel?: boolean
  onBackToTop?: () => void
}

export function ScrollToTop({
  showAfter = 400,
  position = "bottom-right",
  label = "Back to top",
  showLabel = false,
  className,
  onBackToTop,
  children,
  onClick,
  ...props
}: ScrollToTopProps) {
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > showAfter)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [showAfter])

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onBackToTop) {
      onBackToTop()
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
    onClick?.(event)
  }

  const positionClass =
    position === "bottom-left"
      ? "left-4"
      : position === "bottom-center"
        ? "left-1/2 -translate-x-1/2"
        : "right-4"

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={handleClick}
      className={cn(
        "fixed bottom-4 z-50 inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-3 text-sm font-medium text-background shadow-lg transition-all duration-300 hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
        positionClass,
        className,
      )}
      {...props}
    >
      {children ?? (
        <>
          <ArrowUp className="size-4" />
          {showLabel ? <span>{label}</span> : null}
        </>
      )}
    </button>
  )
}

export default ScrollToTop