"use client"

import React from "react"
import { cn } from "@/lib/utils"

export interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  type?: "text" | "email" | "password" | "tel" | "url" | "search" | "number"
  icon?: React.ComponentType<{ className?: string }>
  error?: boolean
  errorMessage?: string
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ type = "text", icon: IconComponent, error, errorMessage, className, ...props }, forwardedRef) => {
    const inputId = props.id ?? React.useId()
    return (
      <div className={cn("w-full", className)}>
        <div className="relative w-full">
          {IconComponent && (
            <IconComponent
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
          )}
          <input
            ref={forwardedRef}
            type={type}
            aria-invalid={error || undefined}
            aria-describedby={errorMessage ? `${inputId}-error` : undefined}
            className={cn(
              "flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors",
              IconComponent && "pl-9",
              "placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
              "disabled:cursor-not-allowed disabled:opacity-50",
              error
                ? "border-destructive focus-visible:ring-destructive/40"
                : "border-input",
            )}
            {...props}
          />
        </div>
        {error && errorMessage && (
          <p id={`${inputId}-error`} className="mt-1.5 text-sm text-destructive">
            {errorMessage}
          </p>
        )}
      </div>
    )
  },
)

TextInput.displayName = "TextInput"
