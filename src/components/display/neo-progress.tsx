import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const neoProgressVariants = cva("h-3 bg-foreground", {
  variants: {
    tone: {
      default: "bg-foreground",
      striped:
        "bg-[repeating-linear-gradient(45deg,var(--foreground)_0,var(--foreground)_10px,transparent_10px,transparent_20px)]",
      yellow: "bg-yellow-400",
    },
  },
  defaultVariants: {
    tone: "default",
  },
})

export interface NeoProgressProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof neoProgressVariants> {
  /** Current progress value between 0 and 100. */
  value?: number
  /** Accessible label for the progress bar. */
  label?: string
}

function NeoProgress({
  className,
  value = 0,
  label = "Progress",
  tone = "default",
  ...props
}: NeoProgressProps) {
  const clamped = Math.min(100, Math.max(0, value))

  return (
    <div
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
      className={cn("w-full", className)}
      {...props}
    >
      <div className="w-full border-2 border-foreground bg-background p-1 shadow-[2px_2px_0_0_var(--foreground)]">
        <div
          className={cn(neoProgressVariants({ tone }))}
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  )
}

export { NeoProgress, neoProgressVariants }
