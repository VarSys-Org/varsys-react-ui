import type { Meta, StoryObj } from "@storybook/react"
import { Compare } from "../../components/display/compare"

const meta: Meta<typeof Compare> = {
  title: "Display/Compare",
  component: Compare,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    firstImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop",
    secondImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop",
    slideMode: "hover",
    className: "w-full max-w-md",
  },
}

export const DragMode: Story = {
  args: {
    firstImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop",
    secondImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop",
    slideMode: "drag",
    className: "w-full max-w-md",
  },
}
