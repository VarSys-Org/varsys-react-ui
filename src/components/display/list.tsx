"use client"

import React from "react"
import { cn } from "@/lib/utils"

export const List = React.forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <ul ref={forwardedRef} className={cn("w-full divide-y divide-border", className)} {...props}>
        {children}
      </ul>
    )
  },
)

List.displayName = "List"

export const ListItem = React.forwardRef<HTMLLIElement, React.HTMLAttributes<HTMLLIElement>>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <li
        ref={forwardedRef}
        className={cn("flex w-full items-center justify-between py-2.5", className)}
        {...props}
      >
        {children}
      </li>
    )
  },
)

ListItem.displayName = "ListItem"
