import type { Meta, StoryObj } from "@storybook/react"
import { SectionHeader } from "../../components/layout/section-header"

const meta: Meta<typeof SectionHeader> = {
  title: "Layout/SectionHeader",
  component: SectionHeader,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Center: Story = {
  args: {
    title: "Features",
    description: "Everything you need to build amazing products.",
    align: "center",
  },
}

export const Left: Story = {
  args: {
    title: "Features",
    description: "Everything you need to build amazing products.",
    align: "left",
  },
}
