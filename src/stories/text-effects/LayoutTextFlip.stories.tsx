import type { Meta, StoryObj } from "@storybook/react"
import { LayoutTextFlip } from "../../components/text-effects/layout-text-flip"

const meta: Meta<typeof LayoutTextFlip> = {
  title: "TextEffects/LayoutTextFlip",
  component: LayoutTextFlip,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: "Build Amazing",
    words: ["Landing Pages", "Component Blocks", "Page Sections", "3D Shaders"],
  },
}
