import * as React from "react"

import { cn } from "@/lib/cn"

export interface NeoTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Accessible label shown above the textarea. */
  label?: string
}

function NeoTextarea({
  className,
  label,
  id,
  rows = 4,
  ...props
}: NeoTextareaProps) {
  const textareaId = id ?? props.name

  const textarea = (
    <textarea
      id={textareaId}
      rows={rows}
      className={cn(
        "mt-0.5 w-full resize-none border-2 border-foreground bg-background text-foreground shadow-[4px_4px_0_0_var(--foreground)] transition-all placeholder:text-foreground/40 focus:ring-2 focus:ring-yellow-300 focus:outline-none sm:text-sm",
        className
      )}
      {...props}
    />
  )

  if (label) {
    return (
      <label htmlFor={textareaId} className="text-foreground">
        <span className="text-sm font-semibold">{label}</span>
        {textarea}
      </label>
    )
  }

  return textarea
}

export { NeoTextarea }
