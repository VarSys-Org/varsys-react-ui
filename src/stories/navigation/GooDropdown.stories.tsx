import type { Meta, StoryObj } from "@storybook/react"
import { GooDropdown } from "../../components/navigation/gooey-dropdown"

const meta: Meta<typeof GooDropdown> = {
  title: "Navigation/GooDropdown",
  component: GooDropdown,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const items = [
  { label: "Copy link" },
  { label: "Share on X" },
  { label: "Embed" },
  { label: "Report" },
]

export const Default: Story = {
  render: () => (
    <div className="flex h-72 items-center justify-center p-8">
      <GooDropdown trigger="Share" items={items} />
    </div>
  ),
}

export const StartAligned: Story = {
  render: () => (
    <div className="flex h-72 items-center justify-center p-8">
      <GooDropdown trigger="Share" items={items} align="start" />
    </div>
  ),
}

export const Narrow: Story = {
  render: () => (
    <div className="flex h-72 items-center justify-center p-8">
      <GooDropdown trigger="Menu" items={items} width={160} />
    </div>
  ),
}
