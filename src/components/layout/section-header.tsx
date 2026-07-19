import * as React from "react"

import { cn } from "@/lib/utils"

interface SectionHeaderProps extends React.ComponentProps<"div"> {
  title: string
  description?: string
  align?: "center" | "left"
}

function SectionHeader({
  className,
  title,
  description,
  align = "center",
  ...props
}: SectionHeaderProps) {
  return (
    <div
      data-slot="section-header"
      data-align={align}
      className={cn(
        "mx-auto mb-12 max-w-2xl",
        "data-[align=center]:text-center",
        "data-[align=left]:text-left",
        className
      )}
      {...props}
    >
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  )
}

export { SectionHeader }
