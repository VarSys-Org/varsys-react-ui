import * as React from "react"

import { cn } from "@/lib/utils"

interface LogoCloudProps extends React.ComponentProps<"section"> {
  title?: string
  logos?: Array<{
    name: string
    src?: string
    width?: number
    height?: number
  }>
}

function LogoCloud({
  className,
  title = "Trusted by teams worldwide",
  logos = [],
  ...props
}: LogoCloudProps) {
  return (
    <section
      data-slot="logo-cloud"
      className={cn("py-16", className)}
      {...props}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {title && (
          <p className="mb-8 text-center text-sm font-medium text-muted-foreground">
            {title}
          </p>
        )}
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-50">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
            >
              {logo.src ? (
                <img
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width ?? 120}
                  height={logo.height ?? 40}
                  className="h-8 w-auto object-contain"
                />
              ) : (
                <span className="text-lg font-semibold text-foreground">
                  {logo.name}
                </span>
              )}
            </div>
          ))}
          {logos.length === 0 &&
            Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="flex h-8 w-28 items-center justify-center rounded-md bg-muted"
              >
                <span className="text-sm font-medium text-muted-foreground/50">
                  Logo {i + 1}
                </span>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export { LogoCloud }
