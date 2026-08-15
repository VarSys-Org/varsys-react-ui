import * as React from "react"

import { cn } from "@/lib/cn"

export interface NeoCheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "onChange"> {
  /** Controlled checked state. */
  checked?: boolean
  /** Callback fired when the checked state changes. */
  onCheckedChange?: (checked: boolean) => void
  /** Optional description shown next to the label. */
  description?: string
}

function NeoCheckbox({
  className,
  checked,
  onCheckedChange,
  description,
  children,
  id,
  ...props
}: NeoCheckboxProps) {
  const inputId = id ?? props.name

  const box = (
    <input
      type="checkbox"
      id={inputId}
      checked={checked}
      onChange={(event) => onCheckedChange?.(event.target.checked)}
      className={cn(
        "size-6 shrink-0 cursor-pointer border-2 border-foreground bg-background shadow-[2px_2px_0_0_var(--foreground)] checked:bg-foreground focus:ring-2 focus:ring-foreground focus:outline-none",
        className
      )}
      {...props}
    />
  )

  if (description) {
    return (
      <label htmlFor={inputId} className="inline-flex cursor-pointer items-start gap-3 text-foreground">
        {box}
        <span>
          <strong className="font-semibold">{children}</strong>
          <span className="mt-0.5 block text-sm text-pretty">
            {description}
          </span>
        </span>
      </label>
    )
  }

  return (
    <label
      htmlFor={inputId}
      className="inline-flex cursor-pointer items-center gap-3 text-foreground"
    >
      {box}
      <span className="font-semibold">{children}</span>
    </label>
  )
}

export { NeoCheckbox }
