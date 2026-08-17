"use client"

import * as React from "react"
import { Check, ChevronDown, Search, X } from "lucide-react"
import { cn } from "@/lib/cn"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/overlays/popover"

export interface MultiSelectOption {
  value: string
  label: string
}

export interface MultiSelectProps {
  options: MultiSelectOption[]
  value?: string[]
  onValueChange?: (value: string[]) => void
  onChange?: (value: string[]) => void
  placeholder?: string
  searchPlaceholder?: string
  emptyText?: string
  label?: string
  maxSelected?: number
  disabled?: boolean
  error?: boolean
  className?: string
  triggerClassName?: string
  portal?: boolean
}

export function MultiSelect({
  options,
  value = [],
  onValueChange,
  onChange,
  placeholder = "Select options...",
  searchPlaceholder = "Search...",
  emptyText = "No results found.",
  label,
  maxSelected,
  disabled,
  error,
  className,
  triggerClassName,
  portal = true,
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState("")

  const selectedOptions = options.filter((option) => value.includes(option.value))
  const filtered = options.filter((option) =>
    option.label.toLowerCase().includes(query.trim().toLowerCase()),
  )

  const emitChange = React.useCallback(
    (next: string[]) => {
      onValueChange?.(next)
      onChange?.(next)
    },
    [onValueChange, onChange],
  )

  const toggleOption = (optionValue: string) => {
    if (value.includes(optionValue)) {
      emitChange(value.filter((v) => v !== optionValue))
    } else {
      if (maxSelected != null && value.length >= maxSelected) return
      emitChange([...value, optionValue])
    }
  }

  const removeSelected = (optionValue: string) => {
    emitChange(value.filter((v) => v !== optionValue))
  }

  const content = (
    <div className="flex flex-col gap-1">
      <div className="relative">
        <Search className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={searchPlaceholder}
          aria-label={searchPlaceholder}
          className="h-8 w-full rounded-md border border-input bg-transparent pr-3 pl-8 text-sm outline-none transition-colors focus:border-ring focus:ring-3 focus:ring-ring/50"
        />
      </div>
      <div className="flex max-h-56 flex-col overflow-y-auto py-1">
        {filtered.length === 0 ? (
          <p className="px-2 py-4 text-center text-sm text-muted-foreground">{emptyText}</p>
        ) : (
          filtered.map((option) => {
            const selected = value.includes(option.value)
            return (
              <button
                key={option.value}
                type="button"
                role="checkbox"
                aria-checked={selected}
                onClick={() => toggleOption(option.value)}
                className={cn(
                  "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  selected && "bg-accent font-medium text-accent-foreground",
                )}
              >
                <span
                  className={cn(
                    "flex size-4 shrink-0 items-center justify-center rounded border border-input transition-colors",
                    selected && "border-primary bg-primary text-primary-foreground",
                  )}
                >
                  {selected ? <Check className="size-3" /> : null}
                </span>
                <span className="truncate">{option.label}</span>
              </button>
            )
          })
        )}
      </div>
    </div>
  )

  const trigger = (
    <PopoverTrigger
      disabled={disabled}
      className={cn(
        "flex min-h-10 w-full items-center justify-between gap-2 rounded-lg border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50",
        error && "border-destructive focus-visible:ring-destructive/30",
        triggerClassName,
      )}
    >
      <span className="flex min-w-0 flex-1 flex-wrap items-center gap-1.5">
        {selectedOptions.length === 0 ? (
          <span className="truncate text-muted-foreground">{placeholder}</span>
        ) : (
          selectedOptions.map((option) => (
            <span
              key={option.value}
              className="inline-flex items-center gap-1 rounded-md bg-secondary px-1.5 py-0.5 text-xs font-medium text-secondary-foreground"
            >
              {option.label}
              {!disabled && (
                <span
                  role="button"
                  tabIndex={0}
                  aria-label={`Remove ${option.label}`}
                  onClick={(event) => {
                    event.stopPropagation()
                    removeSelected(option.value)
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.stopPropagation()
                      removeSelected(option.value)
                    }
                  }}
                  className="rounded-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <X className="size-3" />
                </span>
              )}
            </span>
          ))
        )}
      </span>
      <ChevronDown
        className={cn("size-4 shrink-0 text-muted-foreground transition-transform", open && "rotate-180")}
      />
    </PopoverTrigger>
  )

  return (
    <div className={cn("w-full", className)}>
      {label ? (
        <label className="mb-2 block text-sm font-medium text-foreground">{label}</label>
      ) : null}
      <Popover open={open} onOpenChange={setOpen}>
        {trigger}
        {portal ? (
          <PopoverContent align="start" sideOffset={4} className="w-[var(--anchor-width)]">
            {content}
          </PopoverContent>
        ) : (
          <div className="relative z-50 mt-1 w-full rounded-lg bg-popover p-2 text-popover-foreground shadow-md ring-1 ring-foreground/10">
            {content}
          </div>
        )}
      </Popover>
    </div>
  )
}

export default MultiSelect