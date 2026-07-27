import type { Meta, StoryObj } from "@storybook/react"
import { ContainerTextFlip } from "../../components/text-effects/container-text-flip"

const meta: Meta<typeof ContainerTextFlip> = {
  title: "TextEffects/ContainerTextFlip",
  component: ContainerTextFlip,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    words: ["better", "modern", "beautiful", "awesome"],
    interval: 3000,
  },
}
