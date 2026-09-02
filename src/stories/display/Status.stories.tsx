import type { Meta, StoryObj } from "@storybook/react"
import { Status, StatusIndicator, StatusLabel } from "../../components/display/status"

const meta: Meta<typeof Status> = {
  title: "Display/Status",
  component: Status,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex h-32 items-center justify-center px-8">
      <Status>
        <StatusIndicator />
        <StatusLabel>Default</StatusLabel>
      </Status>
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="flex h-40 items-center justify-center px-8">
      <div className="flex flex-wrap items-center gap-3">
        <Status>
          <StatusIndicator />
          <StatusLabel>Default</StatusLabel>
        </Status>
        <Status variant="success">
          <StatusIndicator />
          <StatusLabel>Success</StatusLabel>
        </Status>
        <Status variant="error">
          <StatusIndicator />
          <StatusLabel>Error</StatusLabel>
        </Status>
        <Status variant="warning">
          <StatusIndicator />
          <StatusLabel>Warning</StatusLabel>
        </Status>
        <Status variant="info">
          <StatusIndicator />
          <StatusLabel>Info</StatusLabel>
        </Status>
      </div>
    </div>
  ),
}

export const StaticIndicator: Story = {
  render: () => (
    <div className="flex h-32 items-center justify-center px-8">
      <Status variant="success">
        <div className="size-2 rounded-full bg-green-600 dark:bg-green-400" />
        <StatusLabel>Static dot</StatusLabel>
      </Status>
    </div>
  ),
}