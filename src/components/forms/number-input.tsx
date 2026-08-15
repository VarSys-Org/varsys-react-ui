"use client"

import React, { useRef } from "react"
import { cn } from "@/lib/cn"

export interface NumberInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "onSubmit"> {
  step?: string | number
  enableStepper?: boolean
  onSubmit?: (value: number) => void
  onValueChange?: (value: number) => void
}

export const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      onSubmit,
      enableStepper = true,
      disabled,
      onValueChange,
      onChange,
      className,
      ...props
    },
    forwardedRef,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const setRefs = (el: HTMLInputElement | null) => {
      inputRef.current = el
      if (typeof forwardedRef === "function") forwardedRef(el)
      else if (forwardedRef) forwardedRef.current = el
    }

    const stepDown = () => {
      if (disabled) return
      inputRef.current?.stepDown()
      inputRef.current?.dispatchEvent(new Event("input", { bubbles: true }))
    }

    const stepUp = () => {
      if (disabled) return
      inputRef.current?.stepUp()
      inputRef.current?.dispatchEvent(new Event("input", { bubbles: true }))
    }

    return (
      <div className={cn("relative w-full", className)}>
        <input
          ref={setRefs}
          type="number"
          disabled={disabled}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.ctrlKey && !e.altKey && !e.shiftKey) {
              onSubmit?.(parseFloat(e.currentTarget.value))
            }
          }}
          onChange={(e) => {
            if (disabled) return
            onValueChange?.(parseFloat(e.target.value))
            onChange?.(e)
          }}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors",
            "placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
            enableStepper && "pr-1",
          )}
          {...props}
        />
        {enableStepper && (
          <div className="absolute inset-y-0 right-0 flex flex-col">
            <button
              type="button"
              tabIndex={-1}
              aria-label="Increase value"
              disabled={disabled}
              onClick={stepUp}
              className="flex h-1/2 w-7 items-center justify-center border-l border-input text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:pointer-events-none disabled:opacity-50"
            >
              <svg
                className="size-3"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m5 12 7-7 7 7" />
                <path d="M12 19V5" />
              </svg>
            </button>
            <button
              type="button"
              tabIndex={-1}
              aria-label="Decrease value"
              disabled={disabled}
              onClick={stepDown}
              className="flex h-1/2 w-7 items-center justify-center border-l border-t border-input text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:pointer-events-none disabled:opacity-50"
            >
              <svg
                className="size-3"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 5v14" />
                <path d="m19 12-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    )
  },
)

NumberInput.displayName = "NumberInput"
