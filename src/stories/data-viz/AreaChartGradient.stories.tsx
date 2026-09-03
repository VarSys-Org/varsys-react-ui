import type { Meta, StoryObj } from "@storybook/react"
import { AreaChartGradient } from "../../components/data-viz/area-chart-gradient"

const meta: Meta<typeof AreaChartGradient> = {
  title: "DataViz/AreaChartGradient",
  component: AreaChartGradient,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="mx-auto max-w-md p-8">
      <AreaChartGradient />
    </div>
  ),
}