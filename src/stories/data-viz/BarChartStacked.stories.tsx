import type { Meta, StoryObj } from "@storybook/react"
import { BarChartStacked } from "../../components/data-viz/bar-chart-stacked"

const meta: Meta<typeof BarChartStacked> = {
  title: "DataViz/BarChartStacked",
  component: BarChartStacked,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="mx-auto max-w-md p-8">
      <BarChartStacked />
    </div>
  ),
}
