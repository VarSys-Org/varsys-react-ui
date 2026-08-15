"use client"

import * as React from "react"
import { Combobox as ComboboxPrimitive } from "@base-ui/react/combobox"
import { CheckIcon, ChevronDownIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export interface SearchSelectItemData {
  value: string
  label: string
}

export interface SearchSelectProps
  extends Omit<
    ComboboxPrimitive.Root.Props<string>,
    "items" | "value" | "onValueChange"
  > {
  items?: SearchSelectItemData[]
  placeholder?: string
  value?: string | null
  onValueChange?: (value: string | null) => void
  className?: string
  label?: string
}

export function SearchSelect({
  items = [],
  placeholder = "Select...",
  value,
  onValueChange,
  className,
  label,
  ...props
}: SearchSelectProps) {
  const selectedItem = items.find((item) => item.value === value)
  const itemValues = items.map((item) => item.value)

  return (
    <div className={cn("w-full", className)}>
      {label ? (
        <label className="mb-2 block text-sm font-medium text-foreground">
          {label}
        </label>
      ) : null}
      <ComboboxPrimitive.Root
        items={itemValues}
        value={value}
        onValueChange={onValueChange}
        {...props}
      >
        <ComboboxPrimitive.InputGroup className="flex w-full items-center gap-2 rounded-lg border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/50 dark:bg-input/30">
          <ComboboxPrimitive.Input
            placeholder={selectedItem?.label ?? placeholder}
            className="h-8 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
          <ComboboxPrimitive.Trigger className="flex size-6 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
            <ChevronDownIcon className="size-4" />
          </ComboboxPrimitive.Trigger>
        </ComboboxPrimitive.InputGroup>

        <ComboboxPrimitive.Portal>
          <ComboboxPrimitive.Positioner
            side="bottom"
            sideOffset={4}
            className="isolate z-50"
          >
            <ComboboxPrimitive.Popup className="relative isolate z-50 max-h-60 w-(--anchor-width) min-w-36 overflow-y-auto rounded-lg bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95">
              <ComboboxPrimitive.List className="p-1">
                {items.map((item) => (
                  <ComboboxPrimitive.Item
                    key={item.value}
                    value={item.value}
                    className="relative flex w-full cursor-default select-none items-center gap-2 rounded-md py-1.5 pr-8 pl-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[selected]:bg-accent data-[selected]:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
                  >
                    {item.label}
                    <ComboboxPrimitive.ItemIndicator className="absolute right-2 flex size-4 items-center justify-center">
                      <CheckIcon className="size-4" />
                    </ComboboxPrimitive.ItemIndicator>
                  </ComboboxPrimitive.Item>
                ))}
              </ComboboxPrimitive.List>
              {items.length > 0 ? (
                <ComboboxPrimitive.Empty className="px-2 py-4 text-center text-sm text-muted-foreground">
                  No results found
                </ComboboxPrimitive.Empty>
              ) : null}
            </ComboboxPrimitive.Popup>
          </ComboboxPrimitive.Positioner>
        </ComboboxPrimitive.Portal>
      </ComboboxPrimitive.Root>
    </div>
  )
}

export default SearchSelect
