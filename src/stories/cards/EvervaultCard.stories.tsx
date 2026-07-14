import type { Meta, StoryObj } from "@storybook/react"
import { EvervaultCard } from "../../components/cards/evervault-card"

const meta: Meta<typeof EvervaultCard> = {
  title: "Cards/EvervaultCard",
  component: EvervaultCard,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: "Enter",
    className: "max-w-sm",
  },
}
