"use client"

import * as React from "react"
import { Check, Sparkles } from "lucide-react"

import { cn } from "@/lib/cn"
import { Button } from "@/components/buttons/button"

export interface PricingSwitchPlan {
  /** Plan name. */
  name: string
  /** Short supporting description. */
  description?: string
  /** Price charged every month. */
  monthlyPrice: number
  /** Effective monthly price when billed annually. */
  annualPrice: number
  /** Features included with the plan. */
  features: string[]
  /** Label for the call-to-action button. */
  cta?: string
  /** Highlight the plan as the recommended option. */
  popular?: boolean
}

export interface PricingSwitchProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  /** Plans to display. */
  plans: PricingSwitchPlan[]
  /** Heading shown above the pricing grid. */
  title?: React.ReactNode
  /** Supporting description shown under the heading. */
  description?: React.ReactNode
  /** Default billing period. */
  defaultPeriod?: "monthly" | "annual"
}

function formatPrice(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value)
}

export function PricingSwitch({
  plans,
  title = "Pricing Plans",
  description = "Choose the plan that fits your needs. Switch between monthly and annual billing.",
  defaultPeriod = "monthly",
  className,
  ...props
}: PricingSwitchProps) {
  const [period, setPeriod] = React.useState<"monthly" | "annual">(
    defaultPeriod,
  )
  const annual = period === "annual"

  return (
    <section
      data-slot="pricing-switch"
      className={cn(
        "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24",
        className,
      )}
      {...props}
    >
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-lg text-muted-foreground">{description}</p>
        )}
      </div>

      <div className="mb-10 flex items-center justify-center gap-3">
        <span
          className={cn(
            "text-sm font-medium",
            annual ? "text-muted-foreground" : "text-foreground",
          )}
        >
          Monthly
        </span>
        <button
          type="button"
          role="switch"
          aria-checked={annual}
          aria-label="Toggle annual billing"
          onClick={() => setPeriod(annual ? "monthly" : "annual")}
          className="relative h-7 w-12 rounded-full bg-muted-foreground/20 transition-colors focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
        >
          <span
            className={cn(
              "absolute top-1 left-1 size-5 rounded-full bg-foreground transition-transform duration-200",
              annual && "translate-x-5",
            )}
          />
        </button>
        <span
          className={cn(
            "text-sm font-medium",
            annual ? "text-foreground" : "text-muted-foreground",
          )}
        >
          Annual
        </span>
        <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
          Save 20%
        </span>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => {
          const price = annual ? plan.annualPrice : plan.monthlyPrice
          return (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-2xl border border-border bg-card p-6 text-card-foreground",
                plan.popular &&
                  "border-primary/40 shadow-lg shadow-primary/10",
              )}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  <Sparkles aria-hidden="true" className="size-3" />
                  Popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              {plan.description && (
                <p className="mt-1 text-sm text-muted-foreground">
                  {plan.description}
                </p>
              )}
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold tabular-nums">
                  {formatPrice(price)}
                </span>
                <span className="text-sm text-muted-foreground">/ month</span>
              </div>
              <p className="mt-1 h-4 text-xs text-muted-foreground">
                {annual && "Billed annually"}
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check
                      aria-hidden="true"
                      className="mt-0.5 size-4 shrink-0 text-primary"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.popular ? "default" : "outline"}
                className="mt-8 w-full"
              >
                {plan.cta ?? "Get started"}
              </Button>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default PricingSwitch