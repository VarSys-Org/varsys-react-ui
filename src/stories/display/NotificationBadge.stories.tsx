import type { Meta, StoryObj } from "@storybook/react"
import { Bell } from "lucide-react"
import { NotificationBadge } from "../../components/display/notification-badge"

const meta: Meta<typeof NotificationBadge> = {
  title: "Display/NotificationBadge",
  component: NotificationBadge,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-8 p-8">
      <NotificationBadge count={0} />
      <NotificationBadge count={3} />
      <NotificationBadge count={12} />
      <NotificationBadge count={99} />
    </div>
  ),
}

export const OnIcon: Story = {
  render: () => (
    <div className="relative inline-flex p-8">
      <Bell className="size-6" />
      <NotificationBadge
        count={5}
        className="absolute -top-1 -right-1"
      />
    </div>
  ),
}

export const Dot: Story = {
  render: () => (
    <div className="flex items-center gap-8 p-8">
      <NotificationBadge dot active />
      <NotificationBadge dot />
      <NotificationBadge dot active className="scale-125" />
    </div>
  ),
}
