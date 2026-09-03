import type { Meta, StoryObj } from "@storybook/react"
import { LineChartMultiple } from "../../components/data-viz/line-chart-multiple"

const meta: Meta<typeof LineChartMultiple> = {
  title: "DataViz/LineChartMultiple",
  component: LineChartMultiple,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="mx-auto max-w-md p-8">
      <LineChartMultiple />
    </div>
  ),
}