import type { Meta, StoryObj } from "@storybook/react"
import { StarBorder } from "../../components/buttons/star-border"

const meta: Meta<typeof StarBorder> = {
  title: "Buttons/StarBorder",
  component: StarBorder,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <StarBorder>Star Border</StarBorder>
    </div>
  ),
}

export const Purple: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <StarBorder color="#a855f7" speed="4s">Purple Glow</StarBorder>
    </div>
  ),
}

export const FastCyan: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <StarBorder color="#22d3ee" speed="2s" thickness={2}>Fast Cyan</StarBorder>
    </div>
  ),
}

export const AsDiv: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <StarBorder as="div" color="#f59e0b">Rendered as div</StarBorder>
    </div>
  ),
}