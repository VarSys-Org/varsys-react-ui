"use client"

import * as React from "react"
import { Trash2, X } from "lucide-react"

import { cn } from "@/lib/cn"

export interface CartItem {
  id: string
  title: string
  image?: string
  alt?: string
  price: number
  quantity?: number
  details?: { label: string; value: string }[]
}

export interface CartTotals {
  subtotal?: number
  vat?: number
  discount?: number
  shipping?: number
}

export interface CartDrawerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  open: boolean
  onOpenChange: (open: boolean) => void
  items?: CartItem[]
  title?: React.ReactNode
  totals?: CartTotals
  currency?: string
  viewCartLabel?: React.ReactNode
  checkoutLabel?: React.ReactNode
  continueShoppingLabel?: React.ReactNode
  onQuantityChange?: (item: CartItem, quantity: number) => void
  onRemove?: (item: CartItem) => void
  onCheckout?: () => void
  onViewCart?: () => void
}

const fallbackImage =
  "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=80&w=1160"

function CartTotalsList({
  totals,
  currency,
  items,
}: {
  totals: CartTotals
  currency: string
  items: CartItem[]
}) {
  const subtotal =
    totals.subtotal ??
    items.reduce((sum, item) => sum + item.price * (item.quantity ?? 1), 0)
  const vat = totals.vat ?? 0
  const discount = totals.discount ?? 0
  const shipping = totals.shipping ?? 0
  const total = subtotal + vat - discount + shipping

  return (
    <dl className="ml-auto max-w-sm space-y-1 text-sm text-foreground">
      <div className="flex justify-between">
        <dt>Subtotal</dt>
        <dd>
          {currency}
          {subtotal}
        </dd>
      </div>
      {vat > 0 && (
        <div className="flex justify-between">
          <dt>VAT</dt>
          <dd>
            {currency}
            {vat}
          </dd>
        </div>
      )}
      {discount > 0 && (
        <div className="flex justify-between">
          <dt>Discount</dt>
          <dd>-{currency}
            {discount}</dd>
        </div>
      )}
      {shipping > 0 && (
        <div className="flex justify-between">
          <dt>Shipping</dt>
          <dd>
            {currency}
            {shipping}
          </dd>
        </div>
      )}
      <div className="flex justify-between border-t border-border pt-2 font-medium">
        <dt>Total</dt>
        <dd>
          {currency}
          {total}
        </dd>
      </div>
    </dl>
  )
}

export function CartDrawer({
  open,
  onOpenChange,
  items = [],
  title = "Shopping cart",
  totals = {},
  currency = "£",
  viewCartLabel = "View my cart",
  checkoutLabel = "Checkout",
  continueShoppingLabel = "Continue shopping",
  onQuantityChange,
  onRemove,
  onCheckout,
  onViewCart,
  className,
  ...props
}: CartDrawerProps) {
  React.useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onOpenChange(false)
    }
    document.addEventListener("keydown", onKeyDown)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = ""
    }
  }, [open, onOpenChange])

  return (
    <div
      aria-hidden={!open}
      className={cn(
        "fixed inset-0 z-50",
        open ? "pointer-events-auto" : "pointer-events-none",
        className
      )}
      {...props}
    >
      <div
        onClick={() => onOpenChange(false)}
        className={cn(
          "absolute inset-0 bg-black/40 transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0"
        )}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={typeof title === "string" ? title : "Shopping cart"}
        className={cn(
          "absolute inset-y-0 right-0 flex w-screen max-w-sm flex-col border-l border-border bg-background shadow-xl transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <header className="flex items-center justify-between border-b border-border px-4 py-4">
          <h2 className="text-base font-semibold text-foreground">{title}</h2>
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="text-muted-foreground transition hover:scale-110 hover:text-foreground"
          >
            <span className="sr-only">Close cart</span>
            <X aria-hidden="true" className="size-5" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-4 py-4">
          {items.length === 0 ? (
            <p className="py-8 text-center text-sm text-muted-foreground">
              Your cart is empty.
            </p>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.id} className="flex items-center gap-4">
                  <img
                    src={item.image ?? fallbackImage}
                    alt={item.alt ?? ""}
                    className="size-16 shrink-0 rounded-sm object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-sm text-foreground">
                      {item.title}
                    </h3>
                    {item.details && item.details.length > 0 && (
                      <dl className="mt-0.5 space-y-px text-[10px] text-muted-foreground">
                        {item.details.map((detail) => (
                          <div key={detail.label}>
                            <dt className="inline">{detail.label}:</dt>{" "}
                            <dd className="inline">{detail.value}</dd>
                          </div>
                        ))}
                      </dl>
                    )}
                    <p className="mt-1 text-xs text-muted-foreground">
                      {currency}
                      {item.price}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <input
                      type="number"
                      min={1}
                      value={item.quantity ?? 1}
                      onChange={(event) =>
                        onQuantityChange?.(
                          item,
                          Math.max(1, Number(event.target.value) || 1)
                        )
                      }
                      className="h-8 w-12 rounded-md border border-input bg-background p-0 text-center text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-ring/50"
                    />
                    <button
                      type="button"
                      onClick={() => onRemove?.(item)}
                      className="text-muted-foreground transition hover:text-destructive"
                    >
                      <span className="sr-only">Remove item</span>
                      <Trash2 aria-hidden="true" className="size-4" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <footer className="space-y-4 border-t border-border px-4 py-4">
            <CartTotalsList totals={totals} currency={currency} items={items} />
            <div className="space-y-2 text-center">
              <button
                type="button"
                onClick={onViewCart}
                className="block w-full rounded-md border border-border bg-background px-5 py-3 text-sm text-foreground transition-colors hover:text-foreground/70"
              >
                {viewCartLabel}
              </button>
              <button
                type="button"
                onClick={onCheckout}
                className="block w-full rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {checkoutLabel}
              </button>
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="inline-block text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
              >
                {continueShoppingLabel}
              </button>
            </div>
          </footer>
        )}
      </div>
    </div>
  )
}
