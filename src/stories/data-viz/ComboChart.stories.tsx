import type { Meta, StoryObj } from "@storybook/react"
import { ComboChart } from "../../components/data-viz/combo-chart"

const meta: Meta<typeof ComboChart> = {
  title: "DataViz/ComboChart",
  component: ComboChart,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const chartdata = [
  { month: "Jan 24", revenue: 4200, profit: 1200, churn: 3.2 },
  { month: "Feb 24", revenue: 5100, profit: 1600, churn: 3.5 },
  { month: "Mar 24", revenue: 4800, profit: 1500, churn: 3.1 },
  { month: "Apr 24", revenue: 6200, profit: 2100, churn: 2.9 },
  { month: "May 24", revenue: 7100, profit: 2500, churn: 2.6 },
  { month: "Jun 24", revenue: 6800, profit: 2300, churn: 2.8 },
  { month: "Jul 24", revenue: 8300, profit: 3100, churn: 2.4 },
]

export const Default: Story = {
  render: () => (
    <div className="flex h-96 items-center justify-center p-8">
      <div className="w-full max-w-3xl">
        <ComboChart
          data={chartdata}
          index="month"
          barSeries={{
            categories: ["revenue"],
            valueFormatter: (number) =>
              `$${Intl.NumberFormat("us").format(number)}`,
          }}
          lineSeries={{
            categories: ["profit"],
            valueFormatter: (number) =>
              `$${Intl.NumberFormat("us").format(number)}`,
          }}
        />
      </div>
    </div>
  ),
}

export const Biaxial: Story = {
  render: () => (
    <div className="flex h-96 items-center justify-center p-8">
      <div className="w-full max-w-3xl">
        <ComboChart
          data={chartdata}
          index="month"
          enableBiaxial
          barSeries={{
            categories: ["revenue"],
            valueFormatter: (number) =>
              `$${Intl.NumberFormat("us").format(number)}`,
          }}
          lineSeries={{
            categories: ["churn"],
            yAxisLabel: "Churn (%)",
            valueFormatter: (number) => `${number}%`,
          }}
        />
      </div>
    </div>
  ),
}

export const StackedBars: Story = {
  render: () => (
    <div className="flex h-96 items-center justify-center p-8">
      <div className="w-full max-w-3xl">
        <ComboChart
          data={chartdata}
          index="month"
          barSeries={{
            type: "stacked",
            categories: ["revenue", "profit"],
            valueFormatter: (number) =>
              `$${Intl.NumberFormat("us").format(number)}`,
          }}
          lineSeries={{
            categories: ["churn"],
            yAxisLabel: "Churn (%)",
            valueFormatter: (number) => `${number}%`,
          }}
        />
      </div>
    </div>
  ),
}
