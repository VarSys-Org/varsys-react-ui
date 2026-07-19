import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/buttons/button"
import { CheckIcon } from "lucide-react"

interface PricingFeature {
  text: string
  included: boolean
}

interface PricingCardProps extends React.ComponentProps<"div"> {
  name: string
  price: string
  period?: string
  description?: string
  features: PricingFeature[]
  ctaLabel?: string
  ctaHref?: string
  highlighted?: boolean
}

function PricingCard({
  className,
  name,
  price,
  period = "/month",
  description,
  features,
  ctaLabel = "Get started",
  ctaHref = "#",
  highlighted = false,
  ...props
}: PricingCardProps) {
  return (
    <div
      data-slot="pricing-card"
      data-highlighted={highlighted}
      className={cn(
        "relative flex flex-col rounded-xl border bg-card p-8 text-card-foreground shadow-sm transition-shadow hover:shadow-md",
        "data-[highlighted=true]:border-primary data-[highlighted=true]:ring-1 data-[highlighted=true]:ring-primary",
        className
      )}
      {...props}
    >
      {highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
          Most popular
        </span>
      )}
      <div className="mb-6">
        <h3 className="text-lg font-semibold">{name}</h3>
        {description && (
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        )}
        <div className="mt-4 flex items-baseline gap-1">
          <span className="text-4xl font-bold tracking-tight">{price}</span>
          <span className="text-sm text-muted-foreground">{period}</span>
        </div>
      </div>
      <ul className="mb-8 flex-1 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-sm">
            <span
              className={cn(
                "mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full",
                feature.included
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground/50"
              )}
            >
              <CheckIcon className="size-3" />
            </span>
            <span
              className={cn(
                feature.included ? "text-foreground" : "text-muted-foreground/50 line-through"
              )}
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
      <a href={ctaHref} className="w-full">
        <Button
          variant={highlighted ? "default" : "outline"}
          className="w-full"
        >
          {ctaLabel}
        </Button>
      </a>
    </div>
  )
}

export { PricingCard }
export type { PricingCardProps, PricingFeature }
