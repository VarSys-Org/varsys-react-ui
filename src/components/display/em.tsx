import * as React from "react"
import { cn } from "@/lib/cn"

export interface EmProps extends React.HTMLAttributes<HTMLElement> {}

export const Em = React.forwardRef<HTMLElement, EmProps>(
  ({ children, className, ...props }, ref) => (
    <em ref={ref} className={cn("italic text-inherit", className)} {...props}>
      {children}
    </em>
  )
)

Em.displayName = "Em"

export default Em