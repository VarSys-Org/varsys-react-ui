import type { Meta, StoryObj } from "@storybook/react"
import { ImagesSlider } from "../../components/display/images-slider"

const meta: Meta<typeof ImagesSlider> = {
  title: "Display/ImagesSlider",
  component: ImagesSlider,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    images: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
    ],
    children: <div className="relative z-50 text-center text-white"><h2 className="text-4xl font-bold">Hero Title</h2></div>,
    className: "h-[400px] w-full",
  },
}
