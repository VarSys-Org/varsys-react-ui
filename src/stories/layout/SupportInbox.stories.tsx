import type { Meta, StoryObj } from "@storybook/react"
import { SupportInbox } from "../../components/layout/support-inbox"

const meta: Meta<typeof SupportInbox> = {
  title: "Layout/SupportInbox",
  component: SupportInbox,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="bg-background p-6">
      <SupportInbox />
    </div>
  ),
}

export const CustomData: Story = {
  render: () => (
    <div className="bg-background p-6">
      <SupportInbox
        brand="Acme"
        queues={[
          { label: "Inbox", count: 12, active: true },
          { label: "Snoozed", count: 3 },
          { label: "Archived" },
        ]}
        tags={[
          { label: "Sales", color: "bg-emerald-500" },
          { label: "Support", color: "bg-sky-500" },
        ]}
        tickets={[
          {
            id: "#9001",
            title: "Discount code not applied",
            requester: "Alice Nguyen",
            status: "Open",
            priority: "Medium",
            updated: "5 minutes ago",
          },
          {
            id: "#8998",
            title: "Billing address update request",
            requester: "Tom Keller",
            status: "Pending",
            priority: "Low",
            updated: "1 hour ago",
          },
          {
            id: "#8990",
            title: "Resolved: invoice duplicates",
            requester: "Mina Sato",
            status: "Closed",
            priority: "High",
            updated: "2 days ago",
          },
        ]}
      />
    </div>
  ),
}