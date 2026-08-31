import * as React from "react"
import { cn } from "@/lib/cn"

export interface StrongProps extends React.HTMLAttributes<HTMLElement> {
  /** Font-weight emphasis. */
  weight?: "semibold" | "bold" | "extrabold"
}

export const Strong = React.forwardRef<HTMLElement, StrongProps>(
  ({ children, className, weight = "bold", ...props }, ref) => (
    <strong
      ref={ref}
      className={cn(
        "text-inherit",
        weight === "semibold" && "font-semibold",
        weight === "bold" && "font-bold",
        weight === "extrabold" && "font-extrabold",
        className
      )}
      {...props}
    >
      {children}
    </strong>
  )
)

Strong.displayName = "Strong"

export default Strong