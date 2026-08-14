import type { Meta, StoryObj } from "@storybook/react"
import { PricingTable } from "../../components/cards/pricing-table"

const meta: Meta<typeof PricingTable> = {
  title: "Cards/PricingTable",
  component: PricingTable,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <PricingTable />,
}

export const CustomPlans: Story = {
  render: () => (
    <PricingTable
      subtitle="Simple, transparent pricing"
      plans={[
        {
          name: "Starter",
          description: "For individuals getting started.",
          price: "9",
        },
        {
          name: "Pro",
          description: "For growing teams and professionals.",
          price: "29",
        },
        {
          name: "Scale",
          description: "For companies at scale.",
          price: "99",
        },
      ]}
    />
  ),
}
