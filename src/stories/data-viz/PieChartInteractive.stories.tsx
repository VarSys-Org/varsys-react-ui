import type { Meta, StoryObj } from "@storybook/react"
import { PieChartInteractive } from "../../components/data-viz/pie-chart-interactive"

const meta: Meta<typeof PieChartInteractive> = {
  title: "DataViz/PieChartInteractive",
  component: PieChartInteractive,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="mx-auto max-w-md p-8">
      <PieChartInteractive />
    </div>
  ),
}
