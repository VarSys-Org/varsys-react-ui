import type { Meta, StoryObj } from "@storybook/react"
import { AnnouncementBanner } from "../../components/layout/announcement-banner"

const meta: Meta<typeof AnnouncementBanner> = {
  title: "Layout/AnnouncementBanner",
  component: AnnouncementBanner,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <AnnouncementBanner />,
}

export const NonDismissible: Story = {
  render: () => <AnnouncementBanner dismissible={false} />,
}
