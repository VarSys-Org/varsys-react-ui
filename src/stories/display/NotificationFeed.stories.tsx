import type { Meta, StoryObj } from "@storybook/react"
import { NotificationFeed } from "../../components/display/notification-feed"

const meta: Meta<typeof NotificationFeed> = {
  title: "Display/NotificationFeed",
  component: NotificationFeed,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const items = [
  {
    id: "1",
    initials: "AK",
    title: "Aisha Khan",
    description: "commented on your latest design revision",
    time: "2 min ago",
    unread: true,
  },
  {
    id: "2",
    initials: "JM",
    title: "Jonas Meyer",
    description: "invited you to the 'Q3 Planning' workspace",
    time: "18 min ago",
    unread: true,
  },
  {
    id: "3",
    initials: "SR",
    title: "Sofia Reyes",
    description: "approved your pull request #482",
    time: "1 hour ago",
  },
  {
    id: "4",
    initials: "DL",
    title: "Devon Liu",
    description: "mentioned you in a thread: 'Can you review this?'",
    time: "3 hours ago",
  },
  {
    id: "5",
    initials: "NW",
    title: "Nina Walters",
    description: "sent you a message",
    time: "Yesterday",
  },
]

export const Default: Story = {
  render: () => (
    <div className="flex justify-center bg-background p-10">
      <NotificationFeed items={items} />
    </div>
  ),
}

export const WithoutFilters: Story = {
  render: () => (
    <div className="flex justify-center bg-background p-10">
      <NotificationFeed items={items} showFilters={false} />
    </div>
  ),
}

export const WithAvatars: Story = {
  render: () => (
    <div className="flex justify-center bg-background p-10">
      <NotificationFeed
        title="Activity"
        footerText="Open activity log"
        items={[
          {
            id: "1",
            avatar: "https://i.pravatar.cc/80?img=5",
            title: "Priya Sharma",
            description: "shared a file with you",
            time: "Just now",
            unread: true,
          },
          {
            id: "2",
            avatar: "https://i.pravatar.cc/80?img=12",
            title: "Marco Rossi",
            description: "scheduled a meeting for tomorrow",
            time: "25 min ago",
          },
        ]}
      />
    </div>
  ),
}
