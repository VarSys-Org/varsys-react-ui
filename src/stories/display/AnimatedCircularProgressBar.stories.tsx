import type { Meta, StoryObj } from "@storybook/react"
import { AnimatedCircularProgressBar } from "../../components/display/animated-circular-progress-bar"

const meta: Meta<typeof AnimatedCircularProgressBar> = {
  title: "Display/AnimatedCircularProgressBar",
  component: AnimatedCircularProgressBar,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <AnimatedCircularProgressBar
      value={75}
      gaugePrimaryColor="#3b82f6"
      gaugeSecondaryColor="#e5e7eb"
    />
  ),
}

export const Half: Story = {
  render: () => (
    <AnimatedCircularProgressBar
      value={50}
      gaugePrimaryColor="#10b981"
      gaugeSecondaryColor="#e5e7eb"
    />
  ),
}

export const Complete: Story = {
  render: () => (
    <AnimatedCircularProgressBar
      value={100}
      gaugePrimaryColor="#8b5cf6"
      gaugeSecondaryColor="#e5e7eb"
    />
  ),
}
