import * as React from "react"
import { cn } from "@/lib/utils"

export interface StaticIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: "sm" | "md" | "lg"
  variant?: "plain" | "primary" | "secondary" | "surface" | "muted" | "border"
  rounded?: boolean
}

const SIZES: Record<string, { box: string; icon: string }> = {
  sm: { box: "size-10 rounded-full", icon: "size-4" },
  md: { box: "size-12 rounded-full", icon: "size-5" },
  lg: { box: "size-14 rounded-full", icon: "size-6" },
}

const VARIANTS: Record<string, string> = {
  plain: "text-primary",
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  surface: "bg-muted text-muted-foreground",
  muted: "bg-muted text-foreground",
  border: "border border-border text-foreground",
}

export function StaticIcon({
  children,
  size = "md",
  variant = "plain",
  rounded = true,
  className,
}: StaticIconProps) {
  const sizeCls = SIZES[size]
  return (
    <span
      className={cn(
        "inline-flex justify-center items-center",
        sizeCls.box,
        rounded ? "rounded-full" : "rounded-lg",
        VARIANTS[variant],
        className
      )}
    >
      <svg
        className={cn("shrink-0", sizeCls.icon)}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children ?? (
          <>
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </>
        )}
      </svg>
    </span>
  )
}

export default StaticIcon
