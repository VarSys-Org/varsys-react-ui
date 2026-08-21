import type { Meta, StoryObj } from "@storybook/react"
import { StatTrend } from "../../components/display/stat-trend"

const meta: Meta<typeof StatTrend> = {
  title: "Display/StatTrend",
  component: StatTrend,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-8 p-8">
      <StatTrend trend="up">12.5</StatTrend>
      <StatTrend trend="down">4.2</StatTrend>
      <StatTrend trend="flat">0</StatTrend>
    </div>
  ),
}

export const WithPercentage: Story = {
  render: () => (
    <div className="flex items-center gap-8 p-8">
      <StatTrend trend="up" percentage>
        12.5
      </StatTrend>
      <StatTrend trend="down" percentage>
        8.3
      </StatTrend>
    </div>
  ),
}

export const InStatCard: Story = {
  render: () => (
    <div className="grid max-w-md grid-cols-2 gap-4 p-8">
      <div className="rounded-lg border bg-card p-4">
        <p className="text-sm text-muted-foreground">Active users</p>
        <p className="mt-1 text-2xl font-semibold">24,890</p>
        <StatTrend trend="up" className="mt-2">
          6.1
        </StatTrend>
      </div>
      <div className="rounded-lg border bg-card p-4">
        <p className="text-sm text-muted-foreground">Churn</p>
        <p className="mt-1 text-2xl font-semibold">312</p>
        <StatTrend trend="down" className="mt-2">
          2.4
        </StatTrend>
      </div>
    </div>
  ),
}
