"use client"

import * as React from "react"
import { useState } from "react"

import { cn } from "@/lib/cn"

export interface NavbarLink {
  label: string
  href?: string
  active?: boolean
}

export interface NavbarProps {
  /** Brand text shown next to the logo. */
  brand?: string
  /** Nav links used by both desktop and mobile menus. */
  links?: NavbarLink[]
  signInLabel?: string
  ctaLabel?: string
  className?: string
}

const defaultLinks: NavbarLink[] = [
  { label: "Home", href: "#", active: true },
  { label: "Features", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "About", href: "#" },
]

export function Navbar({
  brand = "Acme",
  links = defaultLinks,
  signInLabel = "Sign in",
  ctaLabel = "Get Started",
  className,
}: NavbarProps) {
  const [open, setOpen] = useState(false)

  return (
    <header className={cn("border-b", className)}>
      <div className="px-4 md:px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Left */}
          <div className="flex items-center gap-2">
            {/* Mobile menu trigger */}
            <button
              type="button"
              aria-expanded={open}
              aria-controls="navbar-mobile-menu"
              aria-label="Toggle navigation menu"
              onClick={() => setOpen((v) => !v)}
              className="group inline-flex size-8 shrink-0 items-center justify-center rounded-lg outline-none select-none hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:hidden"
            >
              <svg
                className="pointer-events-none"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className={cn(
                    "origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]",
                    open ? "translate-y-0 rotate-45" : "-translate-y-[7px]",
                  )}
                  d="M4 12L20 12"
                />
                <path
                  className={cn(
                    "origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)]",
                    open && "rotate-45",
                  )}
                  d="M4 12H20"
                />
                <path
                  className={cn(
                    "origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]",
                    open ? "translate-y-0 rotate-135" : "translate-y-[7px]",
                  )}
                  d="M4 12H20"
                />
              </svg>
            </button>

            <div className="flex items-center gap-6">
              {/* Brand */}
              <a
                href="#"
                className="flex items-center gap-2 text-sm font-semibold text-foreground"
              >
                <BrandLogo />
                <span>{brand}</span>
              </a>

              {/* Desktop nav */}
              <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-current={link.active ? "page" : undefined}
                    className={cn(
                      "rounded-lg px-3 py-1.5 text-sm font-medium transition-colors outline-none hover:text-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
                      link.active ? "text-primary" : "text-muted-foreground",
                    )}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="inline-flex h-7 shrink-0 items-center justify-center rounded-lg px-2.5 text-sm font-medium whitespace-nowrap transition-colors outline-none select-none hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              {signInLabel}
            </a>
            <a
              href="#"
              className="inline-flex h-7 shrink-0 items-center justify-center rounded-lg bg-primary px-2.5 text-sm font-medium whitespace-nowrap text-primary-foreground transition-colors outline-none select-none hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              {ctaLabel}
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          id="navbar-mobile-menu"
          aria-label="Mobile"
          className="border-t px-4 py-3 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-current={link.active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-lg px-3 py-2 text-sm font-medium transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
                    link.active
                      ? "bg-accent text-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

function BrandLogo() {
  return (
    <svg fill="currentColor" height="24" width="24" viewBox="0 0 33 33" aria-hidden="true">
      <path d="M20.46 1.766 17.303.923l-2.66 9.896-2.403-8.934-3.157.843 2.595 9.652-6.464-6.442-2.311 2.304 7.09 7.066-8.83-2.358-.846 3.146 9.648 2.577a6.516 6.516 0 0 1-.169-1.478c0-3.598 2.927-6.515 6.537-6.515s6.537 2.917 6.537 6.515c0 .505-.057.997-.167 1.468l8.768 2.342.846-3.147-9.686-2.586 8.83-2.358-.845-3.147-9.686 2.587 6.464-6.442-2.311-2.304-6.992 6.969 2.369-8.81Z" />
      <path d="M22.695 18.7a6.495 6.495 0 0 1-1.626 2.986l6.352 6.33 2.31-2.303-7.036-7.013ZM21.005 21.752a6.538 6.538 0 0 1-2.922 1.722l2.312 8.596 3.157-.843-2.547-9.475ZM17.965 23.505a6.569 6.569 0 0 1-1.632.205 6.566 6.566 0 0 1-1.743-.235l-2.314 8.605 3.157.843 2.532-9.418ZM14.478 23.444a6.54 6.54 0 0 1-2.87-1.747l-6.367 6.346 2.31 2.303 6.927-6.902ZM11.555 21.64a6.492 6.492 0 0 1-1.585-2.948L1.173 21.04l.846 3.146 9.536-2.546Z" />
    </svg>
  )
}

export default Navbar