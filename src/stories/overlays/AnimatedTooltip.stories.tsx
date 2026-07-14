import type { Meta, StoryObj } from "@storybook/react"
import { AnimatedTooltip } from "../../components/overlays/animated-tooltip"

const meta: Meta<typeof AnimatedTooltip> = {
  title: "Overlays/AnimatedTooltip",
  component: AnimatedTooltip,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    items: [
      {
        id: 1,
        name: "John Doe",
        designation: "Developer",
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
      },
      {
        id: 2,
        name: "Jane Smith",
        designation: "Designer",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      },
    ],
  },
}
