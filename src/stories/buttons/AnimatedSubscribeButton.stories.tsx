import type { Meta, StoryObj } from "@storybook/react"
import { AnimatedSubscribeButton } from "../../components/buttons/animated-subscribe-button"

const meta: Meta<typeof AnimatedSubscribeButton> = {
  title: "Buttons/AnimatedSubscribeButton",
  component: AnimatedSubscribeButton,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <AnimatedSubscribeButton>
      <span>Subscribe</span>
      <span>Subscribed</span>
    </AnimatedSubscribeButton>
  ),
}

export const Controlled: Story = {
  render: () => (
    <AnimatedSubscribeButton subscribeStatus>
      <span>Subscribe</span>
      <span>Subscribed</span>
    </AnimatedSubscribeButton>
  ),
}
