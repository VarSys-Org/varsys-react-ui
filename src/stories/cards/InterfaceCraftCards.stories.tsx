import type { Meta, StoryObj } from "@storybook/react"
import { InterfaceCraftCards } from "../../components/cards/interface-crafts-cards"

const meta: Meta = {
  title: "Cards/InterfaceCraftCards",
  component: InterfaceCraftCards,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <div className="h-[32rem] overflow-hidden">
      <InterfaceCraftCards />
    </div>
  ),
}
