import type { Meta, StoryObj } from "@storybook/react"
import { GitPullRequest, MessageCircle, Package } from "lucide-react"

import { Notifications } from "../../components/overlays/notifications"

const meta: Meta<typeof Notifications> = {
  title: "Overlays/Notifications",
  component: Notifications,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const ITEMS = [
  {
    id: "1",
    title: "Deploy completed",
    description: "Production build v2.4.1 is now live.",
    time: "2 minutes ago",
    unread: true,
    icon: <Package className="size-4" />,
  },
  {
    id: "2",
    title: "Ada replied to your comment",
    description: "Nice catch — fixed in the latest commit.",
    time: "1 hour ago",
    unread: true,
    icon: <MessageCircle className="size-4" />,
  },
  {
    id: "3",
    title: "Pull request #482 approved",
    description: "feat: add currency input component.",
    time: "Yesterday",
    icon: <GitPullRequest className="size-4" />,
  },
  {
    id: "4",
    title: "Weekly report is ready",
    description: "Your usage digest for this week.",
    time: "2 days ago",
  },
]

export const Default: Story = {
  args: { items: ITEMS },
}

export const Empty: Story = {
  args: { items: [] },
}

export const AllRead: Story = {
  args: {
    items: ITEMS.map((item) => ({ ...item, unread: false })),
  },
}