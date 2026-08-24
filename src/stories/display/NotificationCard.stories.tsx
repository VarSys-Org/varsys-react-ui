import type { Meta, StoryObj } from "@storybook/react"
import { NotificationCard } from "../../components/display/notification-card"

const meta: Meta<typeof NotificationCard> = {
  title: "Display/NotificationCard",
  component: NotificationCard,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const items = [
  {
    title: "New comment on your post",
    description: "Jordan replied: 'This is exactly what I needed, thanks!'",
    time: "2m ago",
    type: "info" as const,
    unread: true,
  },
  {
    title: "Deployment successful",
    description: "Production build v2.4.1 shipped successfully.",
    time: "1h ago",
    type: "success" as const,
  },
  {
    title: "Payment failed",
    description: "We couldn't process your last invoice. Check your billing details.",
    time: "3h ago",
    type: "error" as const,
    unread: true,
  },
  {
    title: "Weekly report ready",
    description: "Your analytics digest for the past 7 days is available.",
    time: "Yesterday",
    type: "default" as const,
  },
]

export const Default: Story = {
  render: () => (
    <div className="grid place-items-center bg-background p-10">
      <div className="w-full max-w-md">
        <NotificationCard items={items} />
      </div>
    </div>
  ),
}

export const WithImages: Story = {
  render: () => (
    <div className="grid place-items-center bg-background p-10">
      <div className="w-full max-w-md">
        <NotificationCard
          title="Activity"
          items={[
            {
              title: "Sarah started following you",
              description: "Follow back to see their updates.",
              time: "5m ago",
              image: "https://i.pravatar.cc/80?img=5",
            },
            {
              title: "Alex liked your comment",
              description: "Your comment on 'Design systems' got a like.",
              time: "20m ago",
              image: "https://i.pravatar.cc/80?img=12",
            },
          ]}
          showFooter={false}
        />
      </div>
    </div>
  ),
}
