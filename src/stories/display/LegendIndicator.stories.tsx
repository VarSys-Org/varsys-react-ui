import type { Meta, StoryObj } from "@storybook/react"
import { LegendIndicator } from "../../components/display/legend-indicator"

const meta: Meta<typeof LegendIndicator> = {
  title: "Display/LegendIndicator",
  component: LegendIndicator,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const trafficItems = [
  { label: "Organic Search", color: "bg-primary", value: "48%" },
  { label: "Direct", color: "bg-green-500", value: "27%" },
  { label: "Referral", color: "bg-yellow-500", value: "15%" },
  { label: "Social", color: "bg-purple-500", value: "10%" },
]

export const Default: Story = {
  render: () => (
    <div className="flex h-48 items-center justify-center">
      <LegendIndicator items={trafficItems} />
    </div>
  ),
}

export const WithValues: Story = {
  render: () => (
    <div className="flex h-48 w-72 items-center justify-center">
      <LegendIndicator items={trafficItems} showValues />
    </div>
  ),
}
