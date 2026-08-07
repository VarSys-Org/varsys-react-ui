"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

export interface FilterOption {
  label: string
  value: string
}

export interface FilterDef {
  id: string
  label: string
  type: "checkbox" | "radio" | "price"
  options?: FilterOption[]
  min?: number
  max?: number
  resetLabel?: string
}

export interface FilterGroupProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "onReset"> {
  filters: FilterDef[]
  onChange?: (filterId: string, value: string) => void
  onReset?: (filterId: string) => void
}

function FilterPanel({
  filter,
  onChange,
  onReset,
}: {
  filter: FilterDef
  onChange: FilterGroupProps["onChange"]
  onReset: FilterGroupProps["onReset"]
}) {
  const [selected, setSelected] = React.useState<string[]>([])
  const [minValue, setMinValue] = React.useState(
    filter.type === "price" ? (filter.min ?? 0) : 0
  )
  const [maxValue, setMaxValue] = React.useState(
    filter.type === "price" ? (filter.max ?? 100) : 0
  )

  const handleReset = () => {
    setSelected([])
    if (filter.type === "price") {
      setMinValue(filter.min ?? 0)
      setMaxValue(filter.max ?? 100)
    }
    onReset?.(filter.id)
  }

  const toggleValue = (value: string) => {
    if (filter.type === "radio") {
      const next = selected.includes(value) ? [] : [value]
      setSelected(next)
      onChange?.(filter.id, next[0] ?? "")
      return
    }
    const next = selected.includes(value)
      ? selected.filter((v) => v !== value)
      : [...selected, value]
    setSelected(next)
    onChange?.(filter.id, next.join(","))
  }

  return (
    <details className="group relative">
      <summary className="flex items-center gap-2 border-b border-border pb-1 text-foreground transition-colors hover:border-foreground/30 [&::-webkit-details-marker]:hidden">
        <span className="text-sm font-medium">{filter.label}</span>
        <ChevronDown className="size-4 shrink-0 transition-transform group-open:-rotate-180" />
      </summary>

      <div className="z-auto w-64 divide-y divide-border rounded-md border border-border bg-background shadow-md group-open:absolute group-open:start-0 group-open:top-8">
        <div className="flex items-center justify-between px-3 py-2">
          <span className="text-sm text-muted-foreground">
            {filter.type === "price"
              ? `Max price is ${maxValue}`
              : `${selected.length} Selected`}
          </span>
          <button
            type="button"
            onClick={handleReset}
            className="text-sm text-foreground underline underline-offset-2 transition-colors hover:text-foreground/70"
          >
            {filter.resetLabel ?? "Reset"}
          </button>
        </div>

        {filter.type === "price" ? (
          <div className="flex items-center gap-3 p-3">
            <label className="block">
              <span className="text-sm text-muted-foreground">Min</span>
              <input
                type="number"
                value={minValue}
                onChange={(event) =>
                  setMinValue(Number(event.target.value) || 0)
                }
                className="mt-0.5 w-full rounded-md border border-input bg-background px-2 py-1 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/50"
              />
            </label>
            <label className="block">
              <span className="text-sm text-muted-foreground">Max</span>
              <input
                type="number"
                value={maxValue}
                onChange={(event) => {
                  const next = Number(event.target.value) || 0
                  setMaxValue(next)
                  onChange?.(filter.id, String(next))
                }}
                className="mt-0.5 w-full rounded-md border border-input bg-background px-2 py-1 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/50"
              />
            </label>
          </div>
        ) : (
          <div className="p-3">
            <fieldset>
              <legend className="sr-only">{filter.label}</legend>
              <div className="flex flex-col items-start gap-3">
                {filter.options?.map((option) => (
                  <label
                    key={option.value}
                    className="inline-flex cursor-pointer items-center gap-3"
                  >
                    <input
                      type={filter.type}
                      name={filter.id}
                      value={option.value}
                      checked={selected.includes(option.value)}
                      onChange={() => toggleValue(option.value)}
                      className="size-5 rounded-md border-border accent-primary"
                    />
                    <span className="text-sm font-medium text-foreground">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
        )}
      </div>
    </details>
  )
}

export function FilterGroup({
  filters,
  onChange,
  onReset,
  className,
  ...props
}: FilterGroupProps) {
  return (
    <div className={cn("flex flex-wrap gap-4 sm:gap-6", className)} {...props}>
      {filters.map((filter) => (
        <FilterPanel
          key={filter.id}
          filter={filter}
          onChange={onChange}
          onReset={onReset}
        />
      ))}
    </div>
  )
}
