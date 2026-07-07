import type { Meta, StoryObj } from "@storybook/react"
import Text3DFlip from "../../components/text-effects/text-3d-flip"

const meta: Meta<typeof Text3DFlip> = {
  title: "TextEffects/Text3DFlip",
  component: Text3DFlip,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Text3DFlip className="text-4xl font-bold">Hover me!</Text3DFlip>,
}

export const Large: Story = {
  render: () => <Text3DFlip className="text-6xl font-bold">3D Flip</Text3DFlip>,
}
