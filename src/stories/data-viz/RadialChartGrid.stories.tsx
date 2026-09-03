import type { Meta, StoryObj } from "@storybook/react"
import { RadialChartGrid } from "../../components/data-viz/radial-chart-grid"

const meta: Meta<typeof RadialChartGrid> = {
  title: "DataViz/RadialChartGrid",
  component: RadialChartGrid,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="mx-auto max-w-md p-8">
      <RadialChartGrid />
    </div>
  ),
}