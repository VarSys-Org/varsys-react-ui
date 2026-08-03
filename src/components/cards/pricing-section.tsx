import * as React from "react"
import { CheckIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export interface PricingPlan {
  name: string
  price: string
  period?: string
  features: string[]
  cta?: string
  highlighted?: boolean
}

export interface PricingSectionProps {
  plans: PricingPlan[]
  className?: string
}

export function PricingSection({ plans, className }: PricingSectionProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8",
        className
      )}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "rounded-2xl border p-6 shadow-sm sm:px-8 lg:p-12",
              plan.highlighted
                ? "border-indigo-600 ring-1 ring-indigo-600"
                : "border-border"
            )}
          >
            <div className="text-center">
              <h2 className="text-lg font-medium text-foreground">
                {plan.name} <span className="sr-only">Plan</span>
              </h2>
              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-foreground sm:text-4xl">
                  {plan.price}
                </strong>
                {plan.period ? (
                  <span className="text-sm font-medium text-muted-foreground">
                    {plan.period}
                  </span>
                ) : null}
              </p>
            </div>

            <ul className="mt-6 space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-1">
                  <CheckIcon
                    aria-hidden="true"
                    className="size-5 text-indigo-700"
                  />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className={cn(
                "mt-8 block rounded-full border px-12 py-3 text-center text-sm font-medium transition-colors",
                plan.highlighted
                  ? "border-indigo-600 bg-indigo-600 text-white hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700"
                  : "border-border bg-white text-foreground hover:ring-1 hover:ring-indigo-600 dark:bg-background"
              )}
            >
              {plan.cta ?? "Get Started"}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
