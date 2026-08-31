"use client"

import * as React from "react"
import {
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react"

import { cn } from "@/lib/cn"

export interface SmartPaginationProps {
  /** 1-based current page. Defaults to 1. */
  currentPage?: number
  totalPages: number
  /** Max page-number buttons shown around the current page. Defaults to 5. */
  paginationItemsToDisplay?: number
  /** "split" = spaced ghost buttons, "attached" = joined segmented control. */
  variant?: "split" | "attached"
  /** Show first/last buttons. */
  showFirstLast?: boolean
  onPageChange?: (page: number) => void
  className?: string
}

export function SmartPagination({
  currentPage = 1,
  totalPages,
  paginationItemsToDisplay = 5,
  variant = "split",
  showFirstLast = false,
  onPageChange,
  className,
}: SmartPaginationProps) {
  const { pages, showLeftEllipsis, showRightEllipsis } = usePagination({
    currentPage,
    totalPages,
    paginationItemsToDisplay,
  })

  const go = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return
    onPageChange?.(page)
  }

  const attached = variant === "attached"

  const navCls = cn(
    "inline-flex size-8 shrink-0 items-center justify-center transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50",
    attached
      ? "border border-border bg-background hover:bg-muted dark:border-input dark:bg-input/30 dark:hover:bg-input/50"
      : "rounded-lg hover:bg-muted",
  )

  const pageCls = (active: boolean) =>
    cn(
      "inline-flex size-8 shrink-0 items-center justify-center text-sm font-medium whitespace-nowrap transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
      attached
        ? cn(
            "border border-border bg-background hover:bg-muted dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
            active && "bg-accent dark:bg-accent",
          )
        : cn(
            "rounded-lg hover:bg-muted",
            active && "bg-primary text-primary-foreground hover:bg-primary",
          ),
    )

  const ellipsisCls = cn(
    "inline-flex size-8 items-center justify-center",
    attached && "border border-border bg-background dark:border-input dark:bg-input/30",
  )

  const firstRounded = attached ? "rounded-s-md" : ""
  const lastRounded = attached ? "rounded-e-md" : ""

  return (
    <nav aria-label="pagination" className={cn("mx-auto flex w-full justify-center", className)}>
      <ul
        className={cn(
          "flex items-center",
          attached ? "gap-0 -space-x-px rounded-md shadow-xs rtl:space-x-reverse" : "gap-1",
        )}
      >
        {showFirstLast && (
          <li>
            <button
              type="button"
              aria-label="Go to first page"
              disabled={currentPage === 1}
              onClick={() => go(1)}
              className={cn(navCls, firstRounded)}
            >
              <ChevronFirst aria-hidden="true" className="size-4" />
            </button>
          </li>
        )}

        <li>
          <button
            type="button"
            aria-label="Go to previous page"
            disabled={currentPage === 1}
            onClick={() => go(currentPage - 1)}
            className={cn(navCls, attached && !showFirstLast && firstRounded)}
          >
            <ChevronLeft aria-hidden="true" className="size-4" />
          </button>
        </li>

        {showLeftEllipsis && (
          <li aria-hidden="true" className={ellipsisCls}>
            <MoreHorizontal className="size-4 opacity-60" />
          </li>
        )}

        {pages.map((page) => (
          <li key={page}>
            <button
              type="button"
              aria-current={page === currentPage ? "page" : undefined}
              onClick={() => go(page)}
              className={pageCls(page === currentPage)}
            >
              {page}
            </button>
          </li>
        ))}

        {showRightEllipsis && (
          <li aria-hidden="true" className={ellipsisCls}>
            <MoreHorizontal className="size-4 opacity-60" />
          </li>
        )}

        <li>
          <button
            type="button"
            aria-label="Go to next page"
            disabled={currentPage === totalPages}
            onClick={() => go(currentPage + 1)}
            className={cn(navCls, attached && !showFirstLast && lastRounded)}
          >
            <ChevronRight aria-hidden="true" className="size-4" />
          </button>
        </li>

        {showFirstLast && (
          <li>
            <button
              type="button"
              aria-label="Go to last page"
              disabled={currentPage === totalPages}
              onClick={() => go(totalPages)}
              className={cn(navCls, lastRounded)}
            >
              <ChevronLast aria-hidden="true" className="size-4" />
            </button>
          </li>
        )}
      </ul>
    </nav>
  )
}

function usePagination({
  currentPage,
  totalPages,
  paginationItemsToDisplay,
}: {
  currentPage: number
  totalPages: number
  paginationItemsToDisplay: number
}): { pages: number[]; showLeftEllipsis: boolean; showRightEllipsis: boolean } {
  const showLeftEllipsis = currentPage - 1 > paginationItemsToDisplay / 2
  const showRightEllipsis = totalPages - currentPage + 1 > paginationItemsToDisplay / 2

  function calculatePaginationRange(): number[] {
    if (totalPages <= paginationItemsToDisplay) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    const halfDisplay = Math.floor(paginationItemsToDisplay / 2)
    const initialRange = {
      end: currentPage + halfDisplay,
      start: currentPage - halfDisplay,
    }

    const adjustedRange = {
      end: Math.min(totalPages, initialRange.end),
      start: Math.max(1, initialRange.start),
    }

    if (adjustedRange.start === 1) adjustedRange.end = paginationItemsToDisplay
    if (adjustedRange.end === totalPages) {
      adjustedRange.start = totalPages - paginationItemsToDisplay + 1
    }
    if (showLeftEllipsis) adjustedRange.start++
    if (showRightEllipsis) adjustedRange.end--

    return Array.from(
      { length: adjustedRange.end - adjustedRange.start + 1 },
      (_, i) => adjustedRange.start + i,
    )
  }

  return {
    pages: calculatePaginationRange(),
    showLeftEllipsis,
    showRightEllipsis,
  }
}

export default SmartPagination