import type { Meta, StoryObj } from "@storybook/react"
import { DonutChart } from "../../components/data-viz/donut-chart"

const meta: Meta<typeof DonutChart> = {
  title: "DataViz/DonutChart",
  component: DonutChart,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const chartdata = [
  { category: "Direct", value: 3500 },
  { category: "Organic", value: 5100 },
  { category: "Referral", value: 2800 },
  { category: "Social", value: 2100 },
  { category: "Email", value: 1400 },
]

export const Default: Story = {
  render: () => (
    <div className="flex h-64 items-center justify-center p-8">
      <DonutChart
        data={chartdata}
        category="category"
        value="value"
        valueFormatter={(number) => number.toLocaleString()}
      />
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex h-64 items-center justify-center p-8">
      <DonutChart
        data={chartdata}
        category="category"
        value="value"
        label="Total visits"
        showLabel
        valueFormatter={(number) => number.toLocaleString()}
      />
    </div>
  ),
}

export const Pie: Story = {
  render: () => (
    <div className="flex h-64 items-center justify-center p-8">
      <DonutChart
        data={chartdata}
        category="category"
        value="value"
        variant="pie"
        valueFormatter={(number) => number.toLocaleString()}
      />
    </div>
  ),
}
