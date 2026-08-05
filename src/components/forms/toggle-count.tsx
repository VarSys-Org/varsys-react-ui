import * as React from "react"
import { cn } from "@/lib/utils"

export interface ToggleCountPlan {
  name: string
  monthly: number
  annual: number
}

export interface ToggleCountProps extends React.HTMLAttributes<HTMLDivElement> {
  plans: ToggleCountPlan[]
  duration?: number
}

export function ToggleCount({ plans, duration = 400, className }: ToggleCountProps) {
  const [billing, setBilling] = React.useState<"monthly" | "annual">("annual")
  const [display, setDisplay] = React.useState(plans.map((p) => p.annual))

  React.useEffect(() => {
    const from = plans.map((p) => (billing === "annual" ? p.monthly : p.annual))
    const to = plans.map((p) => (billing === "annual" ? p.annual : p.monthly))
    const start = performance.now()

    let raf = 0
    const step = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(plans.map((_, i) => Math.round(from[i] + (to[i] - from[i]) * eased)))
      if (t < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [billing])

  return (
    <div className={className}>
      <div className="flex justify-end mb-3">
        <div className="p-0.5 inline-block bg-muted rounded-lg">
          {(["monthly", "annual"] as const).map((mode) => (
            <label key={mode} className="relative inline-block py-2 px-3">
              <span className="inline-block relative z-10 text-sm font-medium text-muted-foreground cursor-pointer capitalize">
                {mode}
              </span>
              <input
                type="radio"
                name="toggle-count"
                className="absolute top-0 left-0 size-full border-transparent bg-transparent cursor-pointer checked:bg-muted rounded-lg"
                checked={billing === mode}
                onChange={() => setBilling(mode)}
              />
            </label>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 lg:items-center border border-border rounded-xl">
        {plans.map((plan, i) => (
          <div key={plan.name} className="flex flex-col p-4">
            <h4 className="text-foreground mb-1">{plan.name}</h4>
            <div className="flex gap-x-1">
              <span className="text-xl font-normal text-foreground">$</span>
              <p className="text-foreground font-semibold text-3xl tabular-nums">
                {display[i]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ToggleCount
