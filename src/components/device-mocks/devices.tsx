import * as React from "react"

import { cn } from "@/lib/cn"

export interface BrowserWindowProps extends React.HTMLAttributes<HTMLDivElement> {
  url?: string
  /** URL shown inside the address bar. */
  address?: string
  children?: React.ReactNode
}

export function BrowserWindow({
  url,
  address = url ?? "https://example.com",
  className,
  children,
  ...props
}: BrowserWindowProps) {
  return (
    <div
      data-slot="browser-window"
      className={cn(
        "w-full overflow-hidden rounded-xl border border-border bg-card shadow-sm",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-x-2 border-b border-border bg-muted/40 px-4 py-2.5">
        <div className="flex items-center gap-x-1.5">
          <span className="size-2.5 rounded-full bg-red-500" />
          <span className="size-2.5 rounded-full bg-yellow-500" />
          <span className="size-2.5 rounded-full bg-green-500" />
        </div>
        <div className="mx-auto flex w-full max-w-sm items-center gap-x-2 rounded-md bg-background px-3 py-1 text-xs text-muted-foreground">
          <svg
            className="size-3 shrink-0 text-muted-foreground/70"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <span className="truncate">{address}</span>
        </div>
      </div>
      <div className="relative bg-muted/20">{children}</div>
    </div>
  )
}

export interface PhoneMockupProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  /** Height of the phone frame. */
  frameClassName?: string
}

export function PhoneMockup({
  className,
  frameClassName,
  children,
  ...props
}: PhoneMockupProps) {
  return (
    <div
      data-slot="phone-mockup"
      className={cn(
        "inline-block rounded-[2.5rem] border-[6px] border-foreground/90 bg-foreground/90 shadow-xl",
        className
      )}
      {...props}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[2.1rem] bg-card">
        <div className="absolute left-1/2 top-2 z-20 h-5 w-28 -translate-x-1/2 rounded-full bg-foreground/90" />
        {children}
      </div>
    </div>
  )
}

export interface DevicesProps extends React.HTMLAttributes<HTMLDivElement> {
  browser?: React.ReactNode
  phone?: React.ReactNode
}

export function Devices({ browser, phone, className, ...props }: DevicesProps) {
  return (
    <div
      data-slot="devices"
      className={cn(
        "relative mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-[1fr_auto]",
        className
      )}
      {...props}
    >
      <div className="min-w-0">{browser}</div>
      {phone ? <div className="mx-auto w-56 shrink-0 md:mx-0">{phone}</div> : null}
    </div>
  )
}

export default Devices
