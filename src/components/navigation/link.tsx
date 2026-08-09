"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export function Link({ className, children, ...props }: LinkProps) {
  return (
    <a
      className={cn(
        "font-medium text-primary underline-offset-4 transition-colors hover:underline",
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
}

export default Link
