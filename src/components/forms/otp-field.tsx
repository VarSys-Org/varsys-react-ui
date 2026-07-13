"use client"

import * as React from "react"
import { OTPField as OTPFieldPrimitive } from "@base-ui/react/otp-field"

import { cn } from "@/lib/utils"

function OTPField({
  className,
  size = "default",
  ...props
}: React.ComponentProps<typeof OTPFieldPrimitive.Root> & {
  size?: "default" | "lg"
}) {
  return (
    <OTPFieldPrimitive.Root
      data-slot="otp-field"
      data-size={size}
      className={cn(
        "flex items-center gap-2 has-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

function OTPFieldInput({
  className,
  ...props
}: React.ComponentProps<typeof OTPFieldPrimitive.Input>) {
  return (
    <OTPFieldPrimitive.Input
      data-slot="otp-field-input"
      className={cn(
        "relative size-9 min-w-0 rounded-lg border border-input bg-background text-center text-base leading-9 shadow-xs outline-none transition-colors focus-visible:z-10 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:focus-visible:border-destructive aria-invalid:focus-visible:ring-destructive/20 sm:size-8 sm:text-sm sm:leading-8 dark:bg-input/30",
        className
      )}
      spellCheck={false}
      {...props}
    />
  )
}

function OTPFieldSeparator({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <OTPFieldPrimitive.Separator
      render={
        <span
          data-slot="otp-field-separator"
          className={cn("mx-1 h-px w-3 rounded-full bg-border", className)}
          {...props}
        />
      }
    />
  )
}

export { OTPField, OTPFieldInput, OTPFieldSeparator }
