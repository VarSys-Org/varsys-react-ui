import type { Meta, StoryObj } from "@storybook/react"
import { ChartPieSimple } from "../../components/data-viz/chart-pie-simple"

const meta: Meta<typeof ChartPieSimple> = {
  title: "DataViz/ChartPieSimple",
  component: ChartPieSimple,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="mx-auto max-w-md p-8">
      <ChartPieSimple />
    </div>
  ),
}
