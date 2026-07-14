import type { Meta, StoryObj } from "@storybook/react"
import { GlareCard } from "../../components/cards/glare-card"

const meta: Meta<typeof GlareCard> = {
  title: "Cards/GlareCard",
  component: GlareCard,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <GlareCard className="flex items-center justify-center">
      <p className="text-2xl font-bold text-white">Glare Card</p>
    </GlareCard>
  ),
}
