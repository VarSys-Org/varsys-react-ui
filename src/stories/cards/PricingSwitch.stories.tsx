import type { Meta, StoryObj } from "@storybook/react"
import { PricingSwitch } from "../../components/cards/pricing-switch"

const meta: Meta<typeof PricingSwitch> = {
  title: "Cards/PricingSwitch",
  component: PricingSwitch,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const plans = [
  {
    name: "Starter",
    description: "For small teams getting started.",
    monthlyPrice: 19,
    annualPrice: 15,
    features: ["3 projects", "10 GB storage", "Basic analytics", "Email support"],
    cta: "Start free trial",
  },
  {
    name: "Pro",
    description: "For growing teams that need more power.",
    monthlyPrice: 49,
    annualPrice: 39,
    features: [
      "Unlimited projects",
      "100 GB storage",
      "Advanced analytics",
      "Priority support",
      "Custom domains",
    ],
    cta: "Get started",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For organizations with advanced needs.",
    monthlyPrice: 99,
    annualPrice: 79,
    features: [
      "Unlimited everything",
      "SSO / SAML",
      "Audit logs",
      "Dedicated manager",
      "SLA",
    ],
    cta: "Contact sales",
  },
]

export const Default: Story = {
  args: { plans },
}

export const DefaultAnnual: Story = {
  args: { plans, defaultPeriod: "annual" },
}

export const CustomHeading: Story = {
  args: {
    plans,
    title: "Simple, transparent pricing",
    description:
      "Start for free, upgrade when you're ready. No hidden fees.",
  },
}