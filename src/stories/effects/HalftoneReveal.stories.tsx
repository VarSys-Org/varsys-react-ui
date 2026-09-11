import type { Meta, StoryObj } from "@storybook/react"
import { HalftoneReveal } from "../../components/effects/halftone-reveal"

const meta: Meta<typeof HalftoneReveal> = {
  title: "Effects/HalftoneReveal",
  component: HalftoneReveal,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const IMG =
  "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200&q=80"

export const Default: Story = {
  render: () => (
    <div className="h-[400px] w-full">
      <HalftoneReveal src={IMG} />
    </div>
  ),
}

export const Duotone: Story = {
  render: () => (
    <div className="h-[400px] w-full">
      <HalftoneReveal src={IMG} mode="duotone" inkColor="#4f46e5" paperColor="#f5f3ff" shape="diamond" />
    </div>
  ),
}

export const AlwaysRevealed: Story = {
  render: () => (
    <div className="h-[400px] w-full">
      <HalftoneReveal src={IMG} trigger="always" idleReveal={0.9} dotSize={1.4} />
    </div>
  ),
}