import type { Meta, StoryObj } from "@storybook/react"
import { StaticIcon } from "../../components/display/static-icon"

const meta: Meta<typeof StaticIcon> = {
  title: "Display/StaticIcon",
  component: StaticIcon,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex gap-4 p-8">
      <StaticIcon variant="primary" />
      <StaticIcon variant="secondary" />
      <StaticIcon variant="surface" />
      <StaticIcon variant="border" />
      <StaticIcon variant="muted" />
      <StaticIcon variant="plain" />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4 p-8">
      <StaticIcon size="sm" variant="primary" />
      <StaticIcon size="md" variant="primary" />
      <StaticIcon size="lg" variant="primary" />
    </div>
  ),
}
