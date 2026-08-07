import type { Meta, StoryObj } from "@storybook/react"
import { Settings, User } from "lucide-react"
import { ListGroup } from "../../components/display/list-group"

const meta: Meta<typeof ListGroup> = {
  title: "Display/ListGroup",
  component: ListGroup,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="mx-auto max-w-md p-8">
      <ListGroup
        items={[
          { label: "Profile", description: "Manage your account", active: true },
          { label: "Settings", description: "Preferences and notifications" },
          { label: "Billing", description: "Invoices and payments" },
          { label: "Disabled item", description: "Not available right now", disabled: true },
        ]}
      />
    </div>
  ),
}

export const WithIconsAndBadges: Story = {
  render: () => (
    <div className="mx-auto max-w-md p-8">
      <ListGroup
        items={[
          { label: "Profile", icon: <User className="size-4" />, badge: "New" },
          {
            label: "Settings",
            icon: <Settings className="size-4" />,
            badge: "5",
          },
          { label: "Integrations", description: "Connect external tools" },
        ]}
      />
    </div>
  ),
}

export const Flush: Story = {
  render: () => (
    <div className="mx-auto max-w-md p-8">
      <ListGroup
        flush
        items={[
          { label: "Inbox", badge: "12" },
          { label: "Sent" },
          { label: "Drafts" },
          { label: "Trash" },
        ]}
      />
    </div>
  ),
}

export const Numbered: Story = {
  render: () => (
    <div className="mx-auto max-w-md p-8">
      <ListGroup
        numbered
        items={[
          { label: "Create your account" },
          { label: "Invite your team" },
          { label: "Start building" },
        ]}
      />
    </div>
  ),
}

export const Small: Story = {
  render: () => (
    <div className="mx-auto max-w-md p-8">
      <ListGroup
        size="sm"
        items={[
          { label: "General" },
          { label: "Teams", active: true },
          { label: "Billing" },
          { label: "Invoices" },
          { label: "Account" },
        ]}
      />
    </div>
  ),
}
