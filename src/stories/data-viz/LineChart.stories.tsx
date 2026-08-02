import type { Meta, StoryObj } from "@storybook/react"
import { LineChart } from "../../components/data-viz/line-chart"

const meta: Meta<typeof LineChart> = {
  title: "DataViz/LineChart",
  component: LineChart,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const chartdata = [
  { month: "Jan 24", sales: 4200, orders: 1800 },
  { month: "Feb 24", sales: 5100, orders: 2100 },
  { month: "Mar 24", sales: 4800, orders: 1950 },
  { month: "Apr 24", sales: 6200, orders: 2600 },
  { month: "May 24", sales: 7100, orders: 2900 },
  { month: "Jun 24", sales: 6800, orders: 2750 },
  { month: "Jul 24", sales: 8300, orders: 3400 },
]

export const Default: Story = {
  render: () => (
    <div className="flex h-96 items-center justify-center p-8">
      <div className="w-full max-w-3xl">
        <LineChart
          data={chartdata}
          categories={["sales", "orders"]}
          index="month"
          valueFormatter={(number) =>
            `$${Intl.NumberFormat("us").format(number)}`
          }
        />
      </div>
    </div>
  ),
}

export const StartEndOnly: Story = {
  render: () => (
    <div className="flex h-96 items-center justify-center p-8">
      <div className="w-full max-w-3xl">
        <LineChart
          data={chartdata}
          categories={["sales"]}
          index="month"
          startEndOnly
          showLegend={false}
          valueFormatter={(number) =>
            `$${Intl.NumberFormat("us").format(number)}`
          }
        />
      </div>
    </div>
  ),
}

export const NoGridLines: Story = {
  render: () => (
    <div className="flex h-96 items-center justify-center p-8">
      <div className="w-full max-w-3xl">
        <LineChart
          data={chartdata}
          categories={["sales", "orders"]}
          index="month"
          showGridLines={false}
          valueFormatter={(number) =>
            `$${Intl.NumberFormat("us").format(number)}`
          }
        />
      </div>
    </div>
  ),
}
