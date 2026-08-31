import type { Meta, StoryObj } from "@storybook/react"
import { WaterRippleImage } from "../../components/effects/water-ripple-image"

const meta: Meta<typeof WaterRippleImage> = {
  title: "Effects/WaterRippleImage",
  component: WaterRippleImage,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const IMG =
  "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=80"

export const Default: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <WaterRippleImage
        src={IMG}
        className="h-[70vh] w-full max-w-4xl rounded-2xl"
        blueish={0.4}
        scale={1.05}
      />
    </div>
  ),
}

export const WithOverlay: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <WaterRippleImage src={IMG} className="h-[70vh] w-full max-w-4xl rounded-2xl">
        <div className="flex h-full items-center justify-center">
          <h1 className="text-4xl font-bold text-white drop-shadow-lg">Underwater Hero</h1>
        </div>
      </WaterRippleImage>
    </div>
  ),
}