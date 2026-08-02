import type { Meta, StoryObj } from "@storybook/react"
import { AreaChart } from "../../components/data-viz/area-chart"

const meta: Meta<typeof AreaChart> = {
  title: "DataViz/AreaChart",
  component: AreaChart,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const chartdata = [
  { date: "Jan 24", sales: 4200, orders: 1800 },
  { date: "Feb 24", sales: 5100, orders: 2100 },
  { date: "Mar 24", sales: 4800, orders: 1950 },
  { date: "Apr 24", sales: 6200, orders: 2600 },
  { date: "May 24", sales: 7100, orders: 2900 },
  { date: "Jun 24", sales: 6800, orders: 2750 },
  { date: "Jul 24", sales: 8300, orders: 3400 },
]

export const Default: Story = {
  render: () => (
    <div className="flex h-96 items-center justify-center p-8">
      <div className="w-full max-w-3xl">
        <AreaChart
          data={chartdata}
          categories={["sales", "orders"]}
          index="date"
          valueFormatter={(number) =>
            `$${Intl.NumberFormat("us").format(number)}`
          }
        />
      </div>
    </div>
  ),
}

export const Stacked: Story = {
  render: () => (
    <div className="flex h-96 items-center justify-center p-8">
      <div className="w-full max-w-3xl">
        <AreaChart
          data={chartdata}
          categories={["sales", "orders"]}
          index="date"
          type="stacked"
          valueFormatter={(number) =>
            `$${Intl.NumberFormat("us").format(number)}`
          }
        />
      </div>
    </div>
  ),
}

export const Percent: Story = {
  render: () => (
    <div className="flex h-96 items-center justify-center p-8">
      <div className="w-full max-w-3xl">
        <AreaChart
          data={chartdata}
          categories={["sales", "orders"]}
          index="date"
          type="percent"
          valueFormatter={(number) =>
            `$${Intl.NumberFormat("us").format(number)}`
          }
        />
      </div>
    </div>
  ),
}

export const NoLegend: Story = {
  render: () => (
    <div className="flex h-96 items-center justify-center p-8">
      <div className="w-full max-w-3xl">
        <AreaChart
          data={chartdata}
          categories={["sales"]}
          index="date"
          showLegend={false}
          startEndOnly
          valueFormatter={(number) =>
            `$${Intl.NumberFormat("us").format(number)}`
          }
        />
      </div>
    </div>
  ),
}
