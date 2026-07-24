import type { Meta, StoryObj } from "@storybook/react"
import { Divider } from "../../components/display/divider"

const meta: Meta<typeof Divider> = {
  title: "Display/Divider",
  component: Divider,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  render: () => (
    <div className="space-y-4">
      <p>Content above</p>
      <Divider />
      <p>Content below</p>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="flex h-12 items-center gap-4">
      <span>Left</span>
      <Divider orientation="vertical" />
      <span>Right</span>
    </div>
  ),
}
