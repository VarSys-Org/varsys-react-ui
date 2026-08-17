import type { Meta, StoryObj } from "@storybook/react"
import { ScrollToTop } from "../../components/scroll/scroll-to-top"

const meta: Meta = {
  title: "Scroll/ScrollToTop",
  component: ScrollToTop,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithLabel: Story = {
  args: {
    showLabel: true,
  },
}

export const BottomLeft: Story = {
  args: {
    position: "bottom-left",
    showAfter: 0,
  },
}

export const BottomCenter: Story = {
  args: {
    position: "bottom-center",
    showAfter: 0,
  },
}