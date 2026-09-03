import type { Meta, StoryObj } from "@storybook/react"
import { RadarChartGridCircle } from "../../components/data-viz/radar-chart-grid-circle"

const meta: Meta<typeof RadarChartGridCircle> = {
  title: "DataViz/RadarChartGridCircle",
  component: RadarChartGridCircle,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="mx-auto max-w-md p-8">
      <RadarChartGridCircle />
    </div>
  ),
}