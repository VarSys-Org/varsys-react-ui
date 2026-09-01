import type { Meta, StoryObj } from "@storybook/react"
import { BarChartInteractive } from "../../components/data-viz/bar-chart-interactive"

const meta: Meta<typeof BarChartInteractive> = {
  title: "DataViz/BarChartInteractive",
  component: BarChartInteractive,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="mx-auto max-w-lg p-8">
      <BarChartInteractive />
    </div>
  ),
}
