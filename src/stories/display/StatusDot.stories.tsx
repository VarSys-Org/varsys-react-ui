import type { Meta, StoryObj } from "@storybook/react"
import { StatusDot } from "../../components/display/status-dot"

const meta: Meta<typeof StatusDot> = {
  title: "Display/StatusDot",
  component: StatusDot,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-6 p-8">
      <StatusDot variant="default" label="Default" />
      <StatusDot variant="success" label="Online" />
      <StatusDot variant="warning" label="Degraded" />
      <StatusDot variant="danger" label="Offline" />
      <StatusDot variant="info" label="Syncing" />
      <StatusDot variant="neutral" label="Idle" />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-6 p-8">
      <StatusDot size="sm" label="Small" />
      <StatusDot size="md" label="Medium" />
      <StatusDot size="lg" label="Large" />
    </div>
  ),
}

export const Pulsing: Story = {
  render: () => (
    <div className="flex items-center gap-6 p-8">
      <StatusDot pulse variant="success" label="Live" />
      <StatusDot pulse variant="danger" label="Critical" />
      <StatusDot pulse variant="info" label="Processing" />
    </div>
  ),
}
