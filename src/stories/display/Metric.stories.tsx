import type { Meta, StoryObj } from "@storybook/react"
import { Metric } from "../../components/display/metric"

const meta: Meta<typeof Metric> = {
  title: "Display/Metric",
  component: Metric,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <Metric>$23,988.05</Metric>
    </div>
  ),
}
