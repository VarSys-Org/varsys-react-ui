import type { Meta, StoryObj } from "@storybook/react"
import { NeoBadge } from "../../components/display/neo-badge"

const meta: Meta<typeof NeoBadge> = {
  title: "Display/NeoBadge",
  component: NeoBadge,
  tags: ["autodocs"],
  args: {
    children: "Info",
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-8 p-8">
      <NeoBadge {...args} variant="info" />
      <NeoBadge {...args} variant="success">
        Success
      </NeoBadge>
      <NeoBadge {...args} variant="error">
        Error
      </NeoBadge>
      <NeoBadge {...args} variant="warning">
        Warning
      </NeoBadge>
      <NeoBadge {...args} variant="neutral">
        Neutral
      </NeoBadge>
    </div>
  ),
}

export const WithDot: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-8 p-8">
      <NeoBadge {...args} variant="success" dot>
        Success
      </NeoBadge>
      <NeoBadge {...args} variant="error" dot>
        Error
      </NeoBadge>
      <NeoBadge {...args} variant="info" dot>
        Info
      </NeoBadge>
    </div>
  ),
}

export const Removable: Story = {
  render: (args) => (
    <div className="p-8">
      <NeoBadge {...args} onRemove={() => {}}>
        New Message
      </NeoBadge>
    </div>
  ),
}
