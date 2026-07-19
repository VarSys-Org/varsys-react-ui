import type { Meta, StoryObj } from "@storybook/react"
import { PricingCard } from "../../components/cards/pricing-card"

const meta: Meta<typeof PricingCard> = {
  title: "Cards/PricingCard",
  component: PricingCard,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: "Starter",
    price: "$19",
    description: "Perfect for small teams.",
    features: [
      { text: "Up to 5 users", included: true },
      { text: "10GB storage", included: true },
      { text: "Basic support", included: true },
      { text: "Advanced analytics", included: false },
    ],
  },
}

export const Highlighted: Story = {
  args: {
    name: "Pro",
    price: "$49",
    description: "Best for growing teams.",
    highlighted: true,
    features: [
      { text: "Up to 20 users", included: true },
      { text: "100GB storage", included: true },
      { text: "Priority support", included: true },
      { text: "Advanced analytics", included: true },
    ],
  },
}
