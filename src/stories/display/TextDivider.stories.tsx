import type { Meta, StoryObj } from "@storybook/react"
import { TextDivider } from "../../components/display/text-divider"

const meta: Meta<typeof TextDivider> = {
  title: "Display/TextDivider",
  component: TextDivider,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Center: Story = {
  args: {
    children: "Title goes here",
  },
}

export const Left: Story = {
  args: {
    align: "left",
    children: "Title goes here",
  },
}

export const Right: Story = {
  args: {
    align: "right",
    children: "Title goes here",
  },
}

export const Gradient: Story = {
  args: {
    gradient: true,
    children: "Section heading",
  },
}

export const LargeSpacing: Story = {
  args: {
    spacing: "lg",
    children: "Wide divider",
  },
}
