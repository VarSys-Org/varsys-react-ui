"use client"

import React from "react"
import { cn } from "@/lib/cn"

export type FlexDirection = "row" | "col" | "row-reverse" | "col-reverse"
export type JustifyContent =
  | "start"
  | "end"
  | "center"
  | "between"
  | "around"
  | "evenly"
export type AlignItems =
  | "start"
  | "end"
  | "center"
  | "baseline"
  | "stretch"

const justifyContentClassNames: Record<JustifyContent, string> = {
  start: "justify-start",
  end: "justify-end",
  center: "justify-center",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
}

const alignItemsClassNames: Record<AlignItems, string> = {
  start: "items-start",
  end: "items-end",
  center: "items-center",
  baseline: "items-baseline",
  stretch: "items-stretch",
}

const flexDirectionClassNames: Record<FlexDirection, string> = {
  row: "flex-row",
  col: "flex-col",
  "row-reverse": "flex-row-reverse",
  "col-reverse": "flex-col-reverse",
}

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  flexDirection?: FlexDirection
  justifyContent?: JustifyContent
  alignItems?: AlignItems
  children: React.ReactNode
}

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      flexDirection = "row",
      justifyContent = "between",
      alignItems = "center",
      children,
      className,
      ...props
    },
    forwardedRef,
  ) => {
    return (
      <div
        ref={forwardedRef}
        className={cn(
          "flex w-full",
          flexDirectionClassNames[flexDirection],
          justifyContentClassNames[justifyContent],
          alignItemsClassNames[alignItems],
          className,
        )}
        {...props}
      >
        {children}
      </div>
    )
  },
)

Flex.displayName = "Flex"
