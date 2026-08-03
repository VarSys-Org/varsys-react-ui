import type { Meta, StoryObj } from "@storybook/react"
import { PricingSection } from "../../components/cards/pricing-section"

const meta: Meta<typeof PricingSection> = {
  title: "Cards/PricingSection",
  component: PricingSection,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const plans = [
  {
    name: "Starter",
    price: "$20",
    period: "/month",
    features: ["10 users included", "2GB of storage", "Email support", "Help center access"],
  },
  {
    name: "Pro",
    price: "$30",
    period: "/month",
    highlighted: true,
    features: [
      "20 users included",
      "5GB of storage",
      "Email support",
      "Help center access",
      "Phone support",
      "Community access",
    ],
  },
]

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <PricingSection plans={plans} />
    </div>
  ),
}
