"use client"

import * as React from "react"
import { cn } from "@/lib/cn"

const TAGS = ["div", "span", "p", "label"] as const

export type TextTag = (typeof TAGS)[number]

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: TextTag
}

export function Text({ as = "p", className, children, ...props }: TextProps) {
  const Tag = TAGS.includes(as as TextTag) ? as : "p"

  return (
    <Tag
      className={cn("text-sm leading-7 text-foreground", className)}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default Text
