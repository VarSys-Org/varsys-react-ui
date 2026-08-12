import * as React from "react"

import { cn } from "@/lib/utils"

export interface NeoInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** Accessible label shown above the input. */
  label?: string
  /** Icon rendered inside the input, flush against the right edge. */
  icon?: React.ReactNode
  /** Action button rendered to the right of the input. */
  action?: React.ReactNode
}

function NeoInput({
  className,
  label,
  icon,
  action,
  id,
  ...props
}: NeoInputProps) {
  const inputId = id ?? props.name

  const input = (
    <div className="relative flex-1">
      <input
        id={inputId}
        className={cn(
          "w-full border-2 border-foreground bg-background text-foreground shadow-[4px_4px_0_0_var(--foreground)] transition-all placeholder:text-foreground/40 focus:ring-2 focus:ring-yellow-300 focus:outline-none sm:text-sm",
          icon && "pe-10",
          action && "border-r-0",
          className
        )}
        {...props}
      />
      {icon && (
        <span
          aria-hidden="true"
          className="absolute top-1 right-1 grid size-8 place-content-center bg-foreground text-background"
        >
          {icon}
        </span>
      )}
    </div>
  )

  const control = action ? (
    <div className="flex">
      {input}
      {action}
    </div>
  ) : (
    input
  )

  if (label) {
    return (
      <label htmlFor={inputId} className="text-foreground">
        <span className="text-sm font-semibold">{label}</span>
        <div className="mt-0.5">{control}</div>
      </label>
    )
  }

  return control
}

export { NeoInput }
