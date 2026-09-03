import type { Meta, StoryObj } from "@storybook/react"
import { CountdownBanner } from "../../components/layout/countdown-banner"

const meta: Meta<typeof CountdownBanner> = {
  title: "Layout/CountdownBanner",
  component: CountdownBanner,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <CountdownBanner />
    </div>
  ),
}

export const CustomEndDate: Story = {
  render: () => (
    <div className="p-8">
      <CountdownBanner
        endDate={Date.now() + 2 * 60 * 60 * 1000}
        title="Flash Sale Ends Soon"
        description="Get up to 40% off select items before the timer runs out."
        ctaLabel="Shop sale"
      />
    </div>
  ),
}