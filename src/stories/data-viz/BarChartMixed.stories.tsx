import type { Meta, StoryObj } from "@storybook/react"
import { BarChartMixed } from "../../components/data-viz/bar-chart-mixed"

const meta: Meta<typeof BarChartMixed> = {
  title: "DataViz/BarChartMixed",
  component: BarChartMixed,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="mx-auto max-w-md p-8">
      <BarChartMixed />
    </div>
  ),
}