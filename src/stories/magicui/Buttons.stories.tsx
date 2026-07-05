import type { Meta, StoryObj } from "@storybook/react"
import { ShimmerButton } from "../../components/buttons/shimmer-button"
import { RainbowButton } from "../../components/buttons/rainbow-button"
import { PulsatingButton } from "../../components/buttons/pulsating-button"
import { RippleButton } from "../../components/buttons/ripple-button"

const meta: Meta = {
  title: "MagicUI/Buttons",
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Shimmer: Story = {
  render: () => <ShimmerButton className="shadow-2xl"><span className="whitespace-pre-wrap text-center text-sm font-medium leading-none text-white">Shimmer Button</span></ShimmerButton>,
}

export const Rainbow: Story = {
  render: () => <RainbowButton>Rainbow Button</RainbowButton>,
}

export const Pulsating: Story = {
  render: () => <PulsatingButton>Pulsating Button</PulsatingButton>,
}

export const Ripple: Story = {
  render: () => <RippleButton>Ripple Button</RippleButton>,
}
