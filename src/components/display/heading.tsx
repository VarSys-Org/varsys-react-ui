"use client"

import * as React from "react"
import { cn } from "@/lib/cn"

export type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingTag
}

export function Heading({
  as = "h1",
  className,
  children,
  ...props
}: HeadingProps) {
  const Tag = as

  return (
    <Tag
      className={cn(
        "font-semibold text-foreground",
        as === "h1" && "text-4xl tracking-tight",
        as === "h2" && "text-3xl tracking-tight",
        as === "h3" && "text-2xl",
        as === "h4" && "text-xl",
        as === "h5" && "text-lg",
        as === "h6" && "text-base",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default Heading
