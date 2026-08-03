import type { Meta, StoryObj } from "@storybook/react"
import { StatCard } from "../../components/display/stat-card"

const meta: Meta<typeof StatCard> = {
  title: "Display/StatCard",
  component: StatCard,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex h-48 items-center justify-center p-8">
      <StatCard className="w-full max-w-sm" label="Profit" value="$240.94" change={67.81} />
    </div>
  ),
}

export const Negative: Story = {
  render: () => (
    <div className="flex h-48 items-center justify-center p-8">
      <StatCard className="w-full max-w-sm" label="Churn" value="3.2%" change={-12.5} comparison="Since last month" />
    </div>
  ),
}

export const NoChange: Story = {
  render: () => (
    <div className="flex h-48 items-center justify-center p-8">
      <StatCard className="w-full max-w-sm" label="Revenue" value="$12,480" />
    </div>
  ),
}
