import type { Meta, StoryObj } from "@storybook/react"
import { HoverBorderGradient } from "../../components/buttons/hover-border-gradient"

const meta: Meta<typeof HoverBorderGradient> = {
  title: "Buttons/HoverBorderGradient",
  component: HoverBorderGradient,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <HoverBorderGradient>Button</HoverBorderGradient>
  ),
}

export const AsDiv: Story = {
  render: () => (
    <HoverBorderGradient as="div" className="px-6 py-3">
      Div with gradient
    </HoverBorderGradient>
  ),
}
