import type { Meta, StoryObj } from "@storybook/react"
import { PieChartStacked } from "../../components/data-viz/pie-chart-stacked"

const meta: Meta<typeof PieChartStacked> = {
  title: "DataViz/PieChartStacked",
  component: PieChartStacked,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="mx-auto max-w-md p-8">
      <PieChartStacked />
    </div>
  ),
}
