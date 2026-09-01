import type { Meta, StoryObj } from "@storybook/react"
import { RadialChartText } from "../../components/data-viz/radial-chart-text"

const meta: Meta<typeof RadialChartText> = {
  title: "DataViz/RadialChartText",
  component: RadialChartText,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="mx-auto max-w-md p-8">
      <RadialChartText />
    </div>
  ),
}
