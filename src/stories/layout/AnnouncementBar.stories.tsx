import type { Meta, StoryObj } from "@storybook/react"
import { AnnouncementBar } from "../../components/layout/announcement-bar"

const meta: Meta<typeof AnnouncementBar> = {
  title: "Layout/AnnouncementBar",
  component: AnnouncementBar,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="bg-background">
      <AnnouncementBar />
    </div>
  ),
}

export const CustomMessage: Story = {
  render: () => (
    <div className="bg-background">
      <AnnouncementBar
        message="New: export dashboards as PDF"
        linkText="Read the docs"
      />
    </div>
  ),
}

export const NotDismissible: Story = {
  render: () => (
    <div className="bg-background">
      <AnnouncementBar
        message="System maintenance scheduled for Sunday 02:00 UTC."
        linkText=""
        dismissible={false}
      />
    </div>
  ),
}