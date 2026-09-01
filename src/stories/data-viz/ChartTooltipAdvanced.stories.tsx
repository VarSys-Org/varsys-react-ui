import type { Meta, StoryObj } from "@storybook/react"
import { ChartTooltipAdvanced } from "../../components/data-viz/chart-tooltip-advanced"

const meta: Meta<typeof ChartTooltipAdvanced> = {
  title: "DataViz/ChartTooltipAdvanced",
  component: ChartTooltipAdvanced,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="mx-auto max-w-md p-8">
      <ChartTooltipAdvanced />
    </div>
  ),
}
