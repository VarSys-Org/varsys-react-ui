import type { Meta, StoryObj } from "@storybook/react"
import { Kbd } from "../../components/display/kbd"

const meta: Meta<typeof Kbd> = {
  title: "Display/Kbd",
  component: Kbd,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof Kbd>

export const Default: Story = {
  render: () => <Kbd>⌘K</Kbd>,
}

export const WithText: Story = {
  render: () => (
    <div className="flex items-center gap-2 text-sm">
      Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to search
    </div>
  ),
}
