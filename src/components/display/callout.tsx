"use client"

import React from "react"
import { cn } from "@/lib/utils"

export interface CalloutProps {
  title: string
  variant?: "default" | "success" | "error" | "warning" | "neutral"
  icon?: React.FC<React.SVGProps<SVGSVGElement>>
  children?: React.ReactNode
  className?: string
}

const variantClasses = {
  default: "border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-200",
  success: "border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200",
  error: "border-red-200 bg-red-50 text-red-900 dark:border-red-800 dark:bg-red-950/50 dark:text-red-200",
  warning: "border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-800 dark:bg-amber-950/50 dark:text-amber-200",
  neutral: "border-gray-200 bg-gray-50 text-gray-900 dark:border-gray-800 dark:bg-gray-950/50 dark:text-gray-200",
}

const iconClasses = {
  default: "text-blue-500 dark:text-blue-400",
  success: "text-emerald-500 dark:text-emerald-400",
  error: "text-red-500 dark:text-red-400",
  warning: "text-amber-500 dark:text-amber-400",
  neutral: "text-gray-500 dark:text-gray-400",
}

export const Callout = ({
  title,
  variant = "default",
  icon: Icon,
  children,
  className,
}: CalloutProps) => {
  return (
    <div
      className={cn(
        "flex gap-3 rounded-lg border p-4",
        variantClasses[variant],
        className,
      )}
      role="alert"
    >
      {Icon && <Icon className={cn("mt-0.5 size-5 shrink-0", iconClasses[variant])} aria-hidden="true" />}
      <div className="min-w-0">
        <h4 className="text-sm font-semibold">{title}</h4>
        {children && <div className="mt-1 text-sm opacity-90">{children}</div>}
      </div>
    </div>
  )
}

Callout.displayName = "Callout"
