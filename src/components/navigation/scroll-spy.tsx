"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface ScrollSpySection {
  id: string
  label: React.ReactNode
  content: React.ReactNode
}

export interface ScrollSpyProps extends React.HTMLAttributes<HTMLDivElement> {
  sections: ScrollSpySection[]
  layout?: "horizontal" | "vertical"
  navClassName?: string
  contentClassName?: string
  offset?: number
}

export function ScrollSpy({
  sections,
  layout = "horizontal",
  navClassName,
  contentClassName,
  offset = 80,
  className,
  ...props
}: ScrollSpyProps) {
  const [activeId, setActiveId] = React.useState<string>(sections[0]?.id ?? "")

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      {
        root: null,
        rootMargin: `-${offset}px 0px -60% 0px`,
        threshold: [0, 0.25, 0.5, 1],
      }
    )
    sections.forEach((section) => {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [sections, offset])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
      setActiveId(id)
    }
  }

  return (
    <div className={cn("w-full", className)} {...props}>
      <nav
        aria-label="Section navigation"
        className={cn(
          "sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur",
          navClassName
        )}
      >
        <ul
          className={cn(
            "mx-auto flex max-w-7xl flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-end sm:px-6",
            layout === "vertical" && "flex-col items-stretch sm:flex-col sm:justify-start"
          )}
        >
          {sections.map((section) => {
            const isActive = activeId === section.id
            return (
              <li key={section.id}>
                <button
                  type="button"
                  onClick={() => scrollTo(section.id)}
                  className={cn(
                    "rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring/50",
                    isActive && "bg-muted text-primary"
                  )}
                  aria-current={isActive ? "true" : undefined}
                >
                  {section.label}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className={cn("mx-auto max-w-7xl space-y-12 px-4 py-8 sm:px-6", contentClassName)}>
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-24"
          >
            {section.content}
          </section>
        ))}
      </div>
    </div>
  )
}
