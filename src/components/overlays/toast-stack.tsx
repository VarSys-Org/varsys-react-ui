"use client"

import * as React from "react"
import { cn } from "@/lib/cn"

export type ToastStackVariant = "success" | "error" | "warning" | "info"

export interface ToastStackItem {
  id: string
  title?: string
  message?: string
  variant?: ToastStackVariant
  duration?: number
}

export interface ToastStackProps extends React.HTMLAttributes<HTMLDivElement> {
  toasts: ToastStackItem[]
  onDismiss?: (id: string) => void
  position?: "top-right" | "bottom-right" | "top-left" | "bottom-left"
  autoDismiss?: boolean
}

const variantStyles: Record<
  ToastStackVariant,
  { border: string; bg: string; icon: string; title: string; message: string; iconPath: React.ReactNode }
> = {
  success: {
    border: "border-emerald-500",
    bg: "bg-emerald-50",
    icon: "text-emerald-700",
    title: "text-emerald-800",
    message: "text-emerald-700",
    iconPath: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    ),
  },
  error: {
    border: "border-red-500",
    bg: "bg-red-50",
    icon: "text-red-700",
    title: "text-red-800",
    message: "text-red-700",
    iconPath: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
      />
    ),
  },
  warning: {
    border: "border-amber-500",
    bg: "bg-amber-50",
    icon: "text-amber-700",
    title: "text-amber-800",
    message: "text-amber-700",
    iconPath: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
      />
    ),
  },
  info: {
    border: "border-sky-500",
    bg: "bg-sky-50",
    icon: "text-sky-700",
    title: "text-sky-800",
    message: "text-sky-700",
    iconPath: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 11.25l.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
      />
    ),
  },
}

const positionStyles: Record<NonNullable<ToastStackProps["position"]>, string> = {
  "top-right": "top-4 right-4",
  "bottom-right": "bottom-4 right-4",
  "top-left": "top-4 left-4",
  "bottom-left": "bottom-4 left-4",
}

export function ToastStack({
  toasts,
  onDismiss,
  position = "top-right",
  autoDismiss = true,
  className,
}: ToastStackProps) {
  React.useEffect(() => {
    if (!autoDismiss) return
    const timers = toasts.map((toast) =>
      setTimeout(() => onDismiss?.(toast.id), toast.duration ?? 5000)
    )
    return () => timers.forEach(clearTimeout)
  }, [toasts, autoDismiss, onDismiss])

  return (
    <div
      role="region"
      aria-live="polite"
      className={cn(
        "fixed z-50 flex w-full max-w-md flex-col gap-3 p-6",
        positionStyles[position],
        className
      )}
    >
      {toasts.map((toast) => {
        const variant = variantStyles[toast.variant ?? "success"]
        return (
          <div
            key={toast.id}
            role="alert"
            className={cn(
              "rounded-md border bg-background p-4 shadow-sm dark:bg-card",
              variant.border,
              variant.bg
            )}
          >
            <div className="flex items-start gap-4">
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={cn("-mt-0.5 size-6 shrink-0", variant.icon)}
              >
                {variant.iconPath}
              </svg>

              <div className="flex-1">
                {toast.title ? (
                  <strong className={cn("block leading-tight font-medium", variant.title)}>
                    {toast.title}
                  </strong>
                ) : null}
                {toast.message ? (
                  <p className={cn("mt-0.5 text-sm", variant.message)}>{toast.message}</p>
                ) : null}
              </div>

              <button
                type="button"
                aria-label="Dismiss toast"
                onClick={() => onDismiss?.(toast.id)}
                className="shrink-0 rounded-md p-1 text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
              >
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ToastStack