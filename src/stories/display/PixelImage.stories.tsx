import type { Meta, StoryObj } from "@storybook/react"
import { PixelImage } from "../../components/display/pixel-image"

const meta: Meta<typeof PixelImage> = {
  title: "Display/PixelImage",
  component: PixelImage,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <PixelImage
        src="https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=600&q=80"
        grid="8x8"
      />
    </div>
  ),
}
