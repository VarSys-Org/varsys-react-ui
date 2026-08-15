import * as React from "react"

import { cn } from "@/lib/cn"

export interface NeoSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Accessible label shown above the select. */
  label?: string
}

function NeoSelect({ className, label, id, children, ...props }: NeoSelectProps) {
  const selectId = id ?? props.name

  const select = (
    <select
      id={selectId}
      className={cn(
        "mt-0.5 w-full cursor-pointer border-2 border-foreground bg-background text-foreground shadow-[4px_4px_0_0_var(--foreground)] transition-all focus:ring-2 focus:ring-yellow-300 focus:outline-none sm:text-sm",
        className
      )}
      {...props}
    >
      {children}
    </select>
  )

  if (label) {
    return (
      <label htmlFor={selectId} className="text-foreground">
        <span className="text-sm font-semibold">{label}</span>
        {select}
      </label>
    )
  }

  return select
}

export { NeoSelect }
