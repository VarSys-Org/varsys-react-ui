"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

export interface MegaMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Controlled open state. */
  open?: boolean
  /** Default open state (uncontrolled). */
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

const MegaMenuContext = React.createContext<{
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}>({
  open: false,
  setOpen: () => {},
})

function useMegaMenu() {
  const ctx = React.useContext(MegaMenuContext)
  if (!ctx) throw new Error("MegaMenu sub-components must be used within <MegaMenu>")
  return ctx
}

export function MegaMenu({
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  className,
  ...props
}: MegaMenuProps) {
  const [uncontrolled, setUncontrolled] = React.useState(defaultOpen)
  const open = controlledOpen ?? uncontrolled
  const setOpen = React.useCallback<React.Dispatch<React.SetStateAction<boolean>>>(
    (value) => {
      const next = typeof value === "function" ? value(open) : value
      setUncontrolled(next)
      onOpenChange?.(next)
    },
    [onOpenChange, open]
  )

  return (
    <MegaMenuContext.Provider value={{ open, setOpen }}>
      <div
        data-slot="mega-menu"
        className={cn("relative", className)}
        onMouseLeave={() => setOpen(false)}
        {...props}
      />
    </MegaMenuContext.Provider>
  )
}

export interface MegaMenuTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

export function MegaMenuTrigger({ asChild, className, ...props }: MegaMenuTriggerProps) {
  const { open, setOpen } = useMegaMenu()

  if (asChild) {
    const child = React.Children.only(props.children) as React.ReactElement<{
      className?: string
      onMouseEnter?: (e: React.MouseEvent) => void
    }>
    return React.cloneElement(child, {
      ...props,
      className: cn(child.props.className, className),
      onMouseEnter: (e: React.MouseEvent) => {
        setOpen(true)
        child.props.onMouseEnter?.(e)
      },
    })
  }

  return (
    <button
      type="button"
      onMouseEnter={() => setOpen(true)}
      onClick={() => setOpen((o) => !o)}
      aria-expanded={open}
      className={cn(
        "inline-flex items-center gap-x-1 rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
        open && "bg-accent text-accent-foreground",
        className
      )}
      {...props}
    >
      {props.children}
      <ChevronDown
        className={cn(
          "size-4 shrink-0 transition-transform duration-200",
          open && "rotate-180"
        )}
      />
    </button>
  )
}

export interface MegaMenuContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export function MegaMenuContent({ className, ...props }: MegaMenuContentProps) {
  const { open } = useMegaMenu()

  if (!open) return null

  return (
    <div
      data-slot="mega-menu-content"
      className={cn(
        "absolute left-0 right-0 top-full z-50 mt-2 w-full rounded-xl border border-border bg-popover p-5 text-popover-foreground shadow-lg",
        className
      )}
      {...props}
    />
  )
}

export interface MegaMenuColumnProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  children?: React.ReactNode
}

export function MegaMenuColumn({ title, className, children }: MegaMenuColumnProps) {
  return (
    <div data-slot="mega-menu-column" className={cn("space-y-3", className)}>
      {title ? (
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {title}
        </h3>
      ) : null}
      <ul className="space-y-1">{children}</ul>
    </div>
  )
}

export interface MegaMenuLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  description?: string
}

export function MegaMenuLink({ description, className, children, ...props }: MegaMenuLinkProps) {
  return (
    <li>
      <a
        data-slot="mega-menu-link"
        className={cn(
          "group flex flex-col gap-0.5 rounded-md px-3 py-2 transition-colors hover:bg-accent hover:text-accent-foreground",
          className
        )}
        {...props}
      >
        <span className="text-sm font-medium text-foreground group-hover:text-accent-foreground">
          {children}
        </span>
        {description ? (
          <span className="text-xs text-muted-foreground group-hover:text-accent-foreground/80">
            {description}
          </span>
        ) : null}
      </a>
    </li>
  )
}

export default MegaMenu
