import type { Meta, StoryObj } from "@storybook/react"
import { IntegrationsCard } from "../../components/cards/integrations-card"

const meta: Meta<typeof IntegrationsCard> = {
  title: "Cards/IntegrationsCard",
  component: IntegrationsCard,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <IntegrationsCard />
  ),
}
