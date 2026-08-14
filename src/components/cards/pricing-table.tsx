"use client"

import * as React from "react"
import { BarChart3, Check, ChevronDown, LifeBuoy, Minus, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

export interface PricingTablePlan {
  name: string
  description: string
  price: string
}

export interface PricingTableRow {
  name: string
  values: (string | boolean)[]
}

export interface PricingTableGroup {
  label: string
  icon?: React.ReactNode
  rows: PricingTableRow[]
}

export interface PricingTableProps
  extends React.HTMLAttributes<HTMLElement> {
  plans?: PricingTablePlan[]
  groups?: PricingTableGroup[]
  title?: string
  subtitle?: string
  description?: string
}

const DEFAULT_PLANS: PricingTablePlan[] = [
  {
    name: "Basic",
    description:
      "Lorem ipsum dolor sit amet torrel, consectet adipiscing elit.",
    price: "15",
  },
  {
    name: "Business",
    description:
      "Lorem ipsum dolor sit amet torrel, consectet adipiscing elit.",
    price: "20",
  },
  {
    name: "Enterprise",
    description:
      "Lorem ipsum dolor sit amet torrel, consectet adipiscing elit.",
    price: "50",
  },
]

const DEFAULT_GROUPS: PricingTableGroup[] = [
  {
    label: "Features",
    icon: <Zap className="h-6 w-6" />,
    rows: [
      { name: "Aliquam finibus", values: [true, true, true] },
      { name: "Vestibulum tristique", values: [false, true, true] },
      { name: "Aliquam finibus", values: [false, false, true] },
      { name: "Praesent aliquet", values: [false, "150GB", "Unlimited"] },
    ],
  },
  {
    label: "Analytics",
    icon: <BarChart3 className="h-6 w-6" />,
    rows: [
      { name: "Aliquam finibus", values: [true, true, true] },
      { name: "Vestibulum tristique", values: [false, true, true] },
      { name: "Lorinto dinor", values: ["30", "60", "Custom"] },
      { name: "Praesent aliquet", values: ["Limited", "Limited", true] },
      { name: "Praesent aliquet", values: [false, "150GB", "Unlimited"] },
    ],
  },
  {
    label: "Support",
    icon: <LifeBuoy className="h-6 w-6" />,
    rows: [
      { name: "Aliquam finibus", values: [true, true, true] },
      { name: "Vestibulum tristique", values: [false, true, true] },
      { name: "Praesent aliquet", values: [false, "150GB", "Unlimited"] },
    ],
  },
]

export function PricingTable({
  plans = DEFAULT_PLANS,
  groups = DEFAULT_GROUPS,
  title = "Pricing",
  subtitle = "Compare our plans and find yours",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur consequat nunc.",
  className,
}: PricingTableProps) {
  const [selectedPlan, setSelectedPlan] = React.useState(plans[0]?.name ?? "")

  const renderCell = (value: string | boolean) => {
    if (value === true) return <Check className="mx-auto h-5 w-5 text-indigo-600" />
    if (value === false) return <Minus className="mx-auto h-5 w-5 text-muted-foreground" />
    return <span className="whitespace-nowrap">{value}</span>
  }

  return (
    <section className={cn("py-14 text-muted-foreground", className)}>
      <div className="mx-auto max-w-xl space-y-3 px-4 sm:text-center md:px-0">
        <h3 className="font-semibold text-indigo-600">{title}</h3>
        <p className="text-3xl font-semibold text-foreground sm:text-4xl">
          {subtitle}
        </p>
        <div className="max-w-xl">
          <p>{description}</p>
        </div>
      </div>
      <div className="mt-16">
        <div className="sticky top-0 border-b bg-background py-6">
          <div className="mx-auto max-w-screen-xl">
            <ul className="ml-auto flex gap-x-6 px-4 md:px-8 lg:max-w-3xl">
              {plans.map((item, idx) => (
                <li
                  key={idx}
                  className={cn(
                    "w-full space-y-4",
                    item.name !== selectedPlan && "hidden lg:block",
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-foreground">
                      {item.name}
                    </span>
                    <div className="relative lg:hidden">
                      <ChevronDown className="absolute inset-y-0 right-0 my-auto h-5 w-5 text-muted-foreground" />
                      <select
                        value={selectedPlan}
                        className="cursor-pointer appearance-none bg-transparent px-8 outline-none"
                        onChange={(e) => setSelectedPlan(e.target.value)}
                      >
                        <option value="">Switch plan</option>
                        {plans.map((option, oi) => (
                          <option key={oi} value={option.name}>
                            {option.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="text-3xl font-semibold text-foreground">
                    ${item.price} <span className="text-xl font-normal text-muted-foreground">/mo</span>
                  </div>
                  <p className="text-sm">{item.description}</p>
                  <button
                    type="button"
                    className="w-full rounded-lg bg-indigo-600 px-3 py-3 text-sm font-semibold text-white duration-150 hover:bg-indigo-500 active:bg-indigo-700"
                  >
                    Get Started
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 space-y-4 overflow-auto px-4 md:overflow-visible md:px-8 max-w-screen-xl">
          {groups.map((group, idx) => (
            <table key={idx} className="w-full table-auto text-left text-sm">
              <thead className="border-b font-medium text-muted-foreground">
                <tr>
                  <th className="z-20 top-12 py-6 lg:sticky">
                    <div className="flex items-center gap-x-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border text-indigo-600">
                        {group.icon}
                      </div>
                      <h4 className="text-xl font-medium text-foreground">
                        {group.label}
                      </h4>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y text-muted-foreground">
                {group.rows.map((item, ri) => (
                  <tr key={ri}>
                    <td className="whitespace-nowrap px-6 py-4">
                      {item.name}
                    </td>
                    {item.values.map((value, vi) => {
                      const isSelected = plans[vi]?.name === selectedPlan
                      return (
                        <td
                          key={vi}
                          className={cn(
                            "w-[250px] whitespace-nowrap px-6 py-4 text-center",
                            isSelected ? "" : "hidden lg:table-cell",
                          )}
                        >
                          {renderCell(value)}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingTable
