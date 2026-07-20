"use client"

import * as React from "react"
import { Fieldset as FieldsetPrimitive } from "@base-ui/react/fieldset"

import { cn } from "@/lib/utils"

function Fieldset({
  className,
  ...props
}: FieldsetPrimitive.Root.Props) {
  return (
    <FieldsetPrimitive.Root
      data-slot="fieldset"
      className={cn("flex flex-col gap-4", className)}
      {...props}
    />
  )
}

function FieldsetLegend({
  className,
  ...props
}: FieldsetPrimitive.Legend.Props) {
  return (
    <FieldsetPrimitive.Legend
      data-slot="fieldset-legend"
      className={cn("font-semibold text-foreground", className)}
      {...props}
    />
  )
}

export { Fieldset, FieldsetLegend }
