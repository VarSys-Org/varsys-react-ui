import type { Meta, StoryObj } from "@storybook/react"
import { FeyCards } from "../../components/cards/fey-cards"

const meta: Meta = {
  title: "Cards/FeyCards",
  component: FeyCards,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <div className="h-[32rem] overflow-hidden">
      <FeyCards />
    </div>
  ),
}
