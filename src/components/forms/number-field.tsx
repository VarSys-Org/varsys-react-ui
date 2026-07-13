"use client"

import * as React from "react"
import { NumberField as NumberFieldPrimitive } from "@base-ui/react/number-field"
import { MinusIcon, PlusIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function NumberField({
  className,
  size = "default",
  ...props
}: NumberFieldPrimitive.Root.Props & { size?: "sm" | "default" | "lg" }) {
  return (
    <NumberFieldPrimitive.Root
      data-slot="number-field"
      data-size={size}
      className={cn("flex w-full flex-col items-start gap-2", className)}
      {...props}
    />
  )
}

function NumberFieldGroup({
  className,
  ...props
}: NumberFieldPrimitive.Group.Props) {
  return (
    <NumberFieldPrimitive.Group
      data-slot="number-field-group"
      className={cn(
        "relative flex w-full justify-between rounded-lg border border-input bg-background text-sm shadow-xs transition-colors focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50 has-[aria-invalid]:border-destructive has-[aria-invalid]:ring-3 has-[aria-invalid]:ring-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-input/30 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    />
  )
}

function NumberFieldDecrement({
  className,
  ...props
}: NumberFieldPrimitive.Decrement.Props) {
  return (
    <NumberFieldPrimitive.Decrement
      data-slot="number-field-decrement"
      className={cn(
        "relative flex shrink-0 cursor-pointer items-center justify-center rounded-s-lg px-3 transition-colors hover:bg-accent",
        className
      )}
      {...props}
    >
      <MinusIcon />
    </NumberFieldPrimitive.Decrement>
  )
}

function NumberFieldIncrement({
  className,
  ...props
}: NumberFieldPrimitive.Increment.Props) {
  return (
    <NumberFieldPrimitive.Increment
      data-slot="number-field-increment"
      className={cn(
        "relative flex shrink-0 cursor-pointer items-center justify-center rounded-e-lg px-3 transition-colors hover:bg-accent",
        className
      )}
      {...props}
    >
      <PlusIcon />
    </NumberFieldPrimitive.Increment>
  )
}

function NumberFieldInput({
  className,
  ...props
}: NumberFieldPrimitive.Input.Props) {
  return (
    <NumberFieldPrimitive.Input
      data-slot="number-field-input"
      className={cn(
        "h-9 w-full min-w-0 grow bg-transparent px-3 text-center tabular-nums leading-9 outline-none sm:h-7.5 sm:leading-7.5",
        className
      )}
      {...props}
    />
  )
}

export {
  NumberField,
  NumberFieldGroup,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
}
