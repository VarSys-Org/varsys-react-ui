import type { Meta, StoryObj } from "@storybook/react"
import { RelativeTimeCard } from "../../components/display/relative-time-card"

const meta: Meta<typeof RelativeTimeCard> = {
  title: "Display/RelativeTimeCard",
  component: RelativeTimeCard,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex h-64 items-center justify-center px-8">
      <RelativeTimeCard date={new Date(Date.now() - 1000 * 60 * 42)} />
    </div>
  ),
}

export const MinutesAgo: Story = {
  render: () => (
    <div className="flex h-64 items-center justify-center px-8">
      <RelativeTimeCard date={new Date(Date.now() - 1000 * 60 * 5)} />
    </div>
  ),
}

export const HoursAgo: Story = {
  render: () => (
    <div className="flex h-64 items-center justify-center px-8">
      <RelativeTimeCard date={new Date(Date.now() - 1000 * 60 * 60 * 3)} />
    </div>
  ),
}

export const MultipleTimezones: Story = {
  render: () => (
    <div className="flex h-64 items-center justify-center px-8">
      <RelativeTimeCard
        date={new Date(Date.now() - 1000 * 60 * 60 * 5)}
        timezones={["America/New_York", "Europe/London", "Asia/Tokyo"]}
      />
    </div>
  ),
}