"use client"

import React from "react"
import { Radio as RadioPrimitive } from "@base-ui/react/radio"
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group"

import { cn } from "@/lib/cn"

const RadioCardGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive>,
  RadioGroupPrimitive.Props
>(({ className, ...props }, forwardedRef) => {
  return (
    <RadioGroupPrimitive
      ref={forwardedRef}
      className={cn("grid gap-2", className)}
      {...props}
    />
  )
})

RadioCardGroup.displayName = "RadioCardGroup"

const RadioCardItem = React.forwardRef<
  React.ElementRef<typeof RadioPrimitive.Root>,
  RadioPrimitive.Root.Props
>(({ className, children, ...props }, forwardedRef) => {
  return (
    <RadioPrimitive.Root
      ref={forwardedRef}
      className={cn(
        // base
        "group relative w-full rounded-md border p-4 text-left shadow-xs transition focus:outline-none",
        // background color
        "bg-card text-card-foreground",
        // border color
        "border-border",
        "data-checked:border-primary",
        // disabled
        "data-disabled:border-border/40 data-disabled:bg-muted/50 data-disabled:shadow-none data-disabled:cursor-not-allowed",
        // focus
        "focus-visible:ring-3 focus-visible:ring-ring/50",
        className,
      )}
      {...props}
    >
      {children}
    </RadioPrimitive.Root>
  )
})

RadioCardItem.displayName = "RadioCardItem"

const RadioCardIndicator = React.forwardRef<
  React.ElementRef<typeof RadioPrimitive.Indicator>,
  RadioPrimitive.Indicator.Props
>(({ className, ...props }, forwardedRef) => {
  return (
    <div
      className={cn(
        // base
        "relative flex size-4 shrink-0 appearance-none items-center justify-center rounded-full border shadow-xs outline-none",
        // border color
        "border-border",
        // background color
        "bg-card",
        // checked
        "group-data-checked:border-0 group-data-checked:border-transparent group-data-checked:bg-primary",
        // disabled
        "group-data-disabled:border-border group-data-disabled:bg-muted",
        // focus
        "group-focus-visible:ring-3 group-focus-visible:ring-ring/50",
        className,
      )}
    >
      <RadioPrimitive.Indicator
        ref={forwardedRef}
        className={cn("flex items-center justify-center")}
        {...props}
      >
        <div
          className={cn(
            // base
            "size-1.5 shrink-0 rounded-full",
            // indicator
            "bg-primary-foreground",
            // disabled
            "group-data-disabled:bg-muted-foreground/50",
          )}
        />
      </RadioPrimitive.Indicator>
    </div>
  )
})

RadioCardIndicator.displayName = "RadioCardIndicator"

export { RadioCardGroup, RadioCardItem, RadioCardIndicator }
