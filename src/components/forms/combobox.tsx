"use client"

import * as React from "react"
import { Combobox as ComboboxPrimitive } from "@base-ui/react/combobox"

import { cn } from "@/lib/utils"
import { CheckIcon, ChevronDownIcon, XIcon } from "lucide-react"

const ComboboxRoot = ComboboxPrimitive.Root
const ComboboxLabel = ComboboxPrimitive.Label
const ComboboxValue = ComboboxPrimitive.Value
const ComboboxIcon = ComboboxPrimitive.Icon
const ComboboxPortal = ComboboxPrimitive.Portal
const ComboboxPositioner = ComboboxPrimitive.Positioner
const ComboboxPopup = ComboboxPrimitive.Popup
const ComboboxArrow = ComboboxPrimitive.Arrow
const ComboboxStatus = ComboboxPrimitive.Status
const ComboboxEmpty = ComboboxPrimitive.Empty
const ComboboxList = ComboboxPrimitive.List
const ComboboxRow = ComboboxPrimitive.Row
const ComboboxSeparator = ComboboxPrimitive.Separator
const ComboboxGroup = ComboboxPrimitive.Group
const ComboboxGroupLabel = ComboboxPrimitive.GroupLabel
const ComboboxCollection = ComboboxPrimitive.Collection
const ComboboxItemIndicator = ComboboxPrimitive.ItemIndicator
const ComboboxChips = ComboboxPrimitive.Chips
const ComboboxChip = ComboboxPrimitive.Chip
const ComboboxChipRemove = ComboboxPrimitive.ChipRemove

function ComboboxInput({
  className,
  ...props
}: ComboboxPrimitive.Input.Props) {
  return (
    <ComboboxPrimitive.Input
      data-slot="combobox-input"
      className={cn(
        "flex h-8 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-input/30",
        className
      )}
      {...props}
    />
  )
}

function ComboboxTrigger({
  className,
  ...props
}: ComboboxPrimitive.Trigger.Props) {
  return (
    <ComboboxPrimitive.Trigger
      data-slot="combobox-trigger"
      className={cn(
        "flex size-6 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
        className
      )}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </ComboboxPrimitive.Trigger>
  )
}

function ComboboxClear({
  className,
  ...props
}: ComboboxPrimitive.Clear.Props) {
  return (
    <ComboboxPrimitive.Clear
      data-slot="combobox-clear"
      className={cn(
        "flex size-6 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
        className
      )}
      {...props}
    >
      <XIcon className="size-3" />
    </ComboboxPrimitive.Clear>
  )
}

function ComboboxInputGroup({
  className,
  ...props
}: ComboboxPrimitive.InputGroup.Props) {
  return (
    <ComboboxPrimitive.InputGroup
      data-slot="combobox-input-group"
      className={cn(
        "flex w-full items-center gap-1 rounded-lg border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/50 dark:bg-input/30",
        className
      )}
      {...props}
    />
  )
}

function ComboboxBackdrop({
  className,
  ...props
}: ComboboxPrimitive.Backdrop.Props) {
  return (
    <ComboboxPrimitive.Backdrop
      data-slot="combobox-backdrop"
      className={cn(
        "fixed inset-0 z-50 bg-black/20 data-closed:animate-out data-closed:fade-out-0 data-open:animate-in data-open:fade-in-0",
        className
      )}
      {...props}
    />
  )
}

type ComboboxPositionerExtraProps = {
  side?: "top" | "bottom" | "left" | "right" | "inline-end" | "inline-start"
  sideOffset?: number
  align?: "start" | "center" | "end"
  alignOffset?: number
}

function ComboboxContent({
  className,
  side = "bottom",
  sideOffset = 4,
  align = "center",
  alignOffset = 0,
  ...props
}: ComboboxPrimitive.Popup.Props & ComboboxPositionerExtraProps) {
  return (
    <ComboboxPrimitive.Portal>
      <ComboboxPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        className="isolate z-50"
      >
        <ComboboxPrimitive.Popup
          data-slot="combobox-content"
          className={cn(
            "relative isolate z-50 max-h-(--available-height) w-(--anchor-width) min-w-36 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
            className
          )}
          {...props}
        />
      </ComboboxPrimitive.Positioner>
    </ComboboxPrimitive.Portal>
  )
}

function ComboboxItem({
  className,
  children,
  ...props
}: ComboboxPrimitive.Item.Props) {
  return (
    <ComboboxPrimitive.Item
      data-slot="combobox-item"
      className={cn(
        "relative flex w-full cursor-default select-none items-center gap-2 rounded-md py-1.5 pr-8 pl-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <ComboboxPrimitive.ItemIndicator className="absolute right-2 flex size-4 items-center justify-center">
        <CheckIcon className="size-4" />
      </ComboboxPrimitive.ItemIndicator>
      {children}
    </ComboboxPrimitive.Item>
  )
}

export {
  ComboboxRoot,
  ComboboxLabel,
  ComboboxValue,
  ComboboxIcon,
  ComboboxInput,
  ComboboxTrigger,
  ComboboxClear,
  ComboboxInputGroup,
  ComboboxPortal,
  ComboboxPositioner,
  ComboboxContent,
  ComboboxPopup,
  ComboboxArrow,
  ComboboxStatus,
  ComboboxEmpty,
  ComboboxList,
  ComboboxRow,
  ComboboxSeparator,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxCollection,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipRemove,
  ComboboxBackdrop,
}
