"use client"

import * as React from "react"

export interface VisuallyHiddenProps
  extends React.HTMLAttributes<HTMLSpanElement> {}

const STYLES: React.CSSProperties = {
  position: "absolute",
  width: "1px",
  height: "1px",
  margin: "-1px",
  border: "0",
  padding: "0",
  whiteSpace: "nowrap",
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  overflow: "hidden",
  pointerEvents: "none",
  userSelect: "none",
}

export function VisuallyHidden({
  children,
  style,
  ...props
}: VisuallyHiddenProps) {
  return (
    <span
      data-visually-hidden
      style={{ ...STYLES, ...style }}
      {...props}
    >
      {children}
    </span>
  )
}

export default VisuallyHidden
