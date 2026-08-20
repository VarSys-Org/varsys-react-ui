import type { ReactNode } from "react"

import { cn } from "@/lib/cn"

export interface LinearMaskProps {
  className?: string
  children?: ReactNode
}

export function LinearMask({ className, children }: LinearMaskProps) {
  return (
    <div
      className={cn(
        "[mask:linear-gradient(180deg,transparent,#fff_30%,#fff_70%,transparent)]",
        className,
      )}
    >
      {children}
    </div>
  )
}

export default LinearMask