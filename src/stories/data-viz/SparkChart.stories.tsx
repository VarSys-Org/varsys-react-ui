import type { Meta, StoryObj } from "@storybook/react"
import {
  SparkAreaChart,
  SparkBarChart,
  SparkLineChart,
} from "../../components/data-viz/spark-chart"

const meta: Meta<typeof SparkAreaChart> = {
  title: "DataViz/SparkChart",
  component: SparkAreaChart,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const chartdata = [
  { month: "Jan 24", sales: 110, orders: 40, refunds: 5 },
  { month: "Feb 24", sales: 180, orders: 70, refunds: 12 },
  { month: "Mar 24", sales: 140, orders: 55, refunds: 8 },
  { month: "Apr 24", sales: 220, orders: 90, refunds: 15 },
  { month: "May 24", sales: 260, orders: 110, refunds: 20 },
  { month: "Jun 24", sales: 210, orders: 85, refunds: 14 },
  { month: "Jul 24", sales: 300, orders: 130, refunds: 22 },
]

export const Area: Story = {
  render: () => (
    <div className="flex h-40 items-center justify-center gap-8">
      <SparkAreaChart data={chartdata} categories={["sales"]} index="month" />
      <SparkAreaChart data={chartdata} categories={["sales"]} index="month" fill="solid" />
      <SparkAreaChart data={chartdata} categories={["sales"]} index="month" fill="none" />
    </div>
  ),
}

export const AreaStacked: Story = {
  render: () => (
    <div className="flex h-40 items-center justify-center gap-8">
      <SparkAreaChart data={chartdata} categories={["sales", "orders"]} index="month" type="stacked" />
      <SparkAreaChart data={chartdata} categories={["sales", "orders"]} index="month" type="percent" />
    </div>
  ),
}

export const Line: Story = {
  render: () => (
    <div className="flex h-40 items-center justify-center gap-8">
      <SparkLineChart data={chartdata} categories={["sales"]} index="month" />
      <SparkLineChart data={chartdata} categories={["sales", "orders"]} index="month" />
    </div>
  ),
}

export const Bar: Story = {
  render: () => (
    <div className="flex h-40 items-center justify-center gap-8">
      <SparkBarChart data={chartdata} categories={["sales"]} index="month" />
      <SparkBarChart data={chartdata} categories={["sales", "orders"]} index="month" type="stacked" />
    </div>
  ),
}
