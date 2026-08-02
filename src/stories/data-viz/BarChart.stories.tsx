import type { Meta, StoryObj } from "@storybook/react"
import { BarChart } from "../../components/data-viz/bar-chart"

const meta: Meta<typeof BarChart> = {
  title: "DataViz/BarChart",
  component: BarChart,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const chartdata = [
  { channel: "Organic", visitors: 8400, leads: 2900 },
  { channel: "Paid", visitors: 6200, leads: 2200 },
  { channel: "Social", visitors: 5100, leads: 1800 },
  { channel: "Email", visitors: 3800, leads: 1400 },
  { channel: "Referral", visitors: 2900, leads: 950 },
  { channel: "Direct", visitors: 2300, leads: 700 },
]

export const Default: Story = {
  render: () => (
    <div className="flex h-96 items-center justify-center p-8">
      <div className="w-full max-w-3xl">
        <BarChart
          data={chartdata}
          categories={["visitors", "leads"]}
          index="channel"
          valueFormatter={(number) => number.toLocaleString()}
        />
      </div>
    </div>
  ),
}

export const Stacked: Story = {
  render: () => (
    <div className="flex h-96 items-center justify-center p-8">
      <div className="w-full max-w-3xl">
        <BarChart
          data={chartdata}
          categories={["visitors", "leads"]}
          index="channel"
          type="stacked"
          valueFormatter={(number) => number.toLocaleString()}
        />
      </div>
    </div>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <div className="flex h-96 items-center justify-center p-8">
      <div className="w-full max-w-3xl">
        <BarChart
          data={chartdata}
          categories={["visitors"]}
          index="channel"
          layout="vertical"
          showLegend={false}
          valueFormatter={(number) => number.toLocaleString()}
        />
      </div>
    </div>
  ),
}

export const NoLegend: Story = {
  render: () => (
    <div className="flex h-96 items-center justify-center p-8">
      <div className="w-full max-w-3xl">
        <BarChart
          data={chartdata}
          categories={["visitors"]}
          index="channel"
          showLegend={false}
          valueFormatter={(number) => number.toLocaleString()}
        />
      </div>
    </div>
  ),
}
