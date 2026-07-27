import type { Meta, StoryObj } from "@storybook/react"
import { TextFlippingBoard } from "../../components/text-effects/text-flipping-board"

const meta: Meta<typeof TextFlippingBoard> = {
  title: "TextEffects/TextFlippingBoard",
  component: TextFlippingBoard,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: "Hello World",
  },
}
