"use client"

import React from "react"
import { cn } from "@/lib/utils"

export interface PollOption {
  id: string
  label: string
  value: number
}

export interface PollProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  options: PollOption[]
  multiple?: boolean
  endDate?: string
  onVote?: (selected: string[]) => void
  className?: string
}

export const Poll = React.forwardRef<HTMLDivElement, PollProps>(
  (
    {
      title,
      description,
      options,
      multiple = false,
      endDate,
      onVote,
      className,
      ...props
    },
    forwardedRef,
  ) => {
    const total = options.reduce((sum, o) => sum + o.value, 0)
    const [selected, setSelected] = React.useState<string[]>([])

    const toggle = (id: string) => {
      setSelected((prev) => {
        if (multiple) {
          return prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        }
        return prev.includes(id) ? [] : [id]
      })
    }

    const handleVote = (e: React.FormEvent) => {
      e.preventDefault()
      onVote?.(selected)
    }

    return (
      <div
        ref={forwardedRef}
        className={cn("w-full max-w-prose", className)}
        {...props}
      >
        <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
          {title}
        </h2>

        {description && (
          <p className="mt-4 text-pretty text-muted-foreground">{description}</p>
        )}

        <form onSubmit={handleVote} className="mt-6 space-y-4">
          <fieldset className="space-y-4">
            <legend className="sr-only">
              {multiple ? "Select one or more options" : "Select an option"}
            </legend>

            {options.map((option) => {
              const isChecked = selected.includes(option.id)
              const percent = total > 0 ? (option.value / total) * 100 : 0
              return (
                <div key={option.id} className="flex items-center gap-4">
                  <label
                    htmlFor={option.id}
                    className={cn(
                      "relative block flex-1 cursor-pointer overflow-hidden rounded-md border px-4 py-2 shadow-sm transition-colors",
                      "border-border bg-background",
                      "hover:bg-muted/50",
                    )}
                  >
                    <div
                      className="absolute inset-y-0 left-0 rounded bg-muted transition-all duration-500"
                      style={{ width: `${percent}%` }}
                    />
                    <div className="relative flex items-center gap-4">
                      <input
                        type={multiple ? "checkbox" : "radio"}
                        id={option.id}
                        checked={isChecked}
                        onChange={() => toggle(option.id)}
                        className={cn(
                          "size-5 shrink-0 accent-primary",
                        )}
                      />
                      <span className="font-medium text-foreground">
                        {option.label}
                      </span>
                    </div>
                  </label>
                  <span className="text-sm tabular-nums text-muted-foreground">
                    {percent.toFixed(0)}%
                  </span>
                </div>
              )
            })}
          </fieldset>

          <button
            type="submit"
            disabled={selected.length === 0}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-opacity hover:opacity-90 disabled:pointer-events-none disabled:opacity-50"
          >
            Submit vote
          </button>
        </form>

        {endDate && (
          <p className="mt-4 text-sm text-muted-foreground">
            Ends on <time dateTime={endDate}>{endDate}</time>
          </p>
        )}
      </div>
    )
  },
)

Poll.displayName = "Poll"
