import type { Meta, StoryObj } from "@storybook/react"
import { ScatterChart } from "../../components/data-viz/scatter-chart"

const meta: Meta<typeof ScatterChart> = {
  title: "Data Viz/ScatterChart",
  component: ScatterChart,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const data = [
  { x: 10, y: 30, size: 20, category: "Product A" },
  { x: 20, y: 55, size: 40, category: "Product A" },
  { x: 35, y: 25, size: 30, category: "Product A" },
  { x: 50, y: 70, size: 50, category: "Product A" },
  { x: 65, y: 45, size: 60, category: "Product B" },
  { x: 75, y: 80, size: 45, category: "Product B" },
  { x: 85, y: 60, size: 70, category: "Product B" },
  { x: 30, y: 85, size: 35, category: "Product C" },
  { x: 45, y: 40, size: 55, category: "Product C" },
  { x: 60, y: 20, size: 25, category: "Product C" },
  { x: 90, y: 90, size: 80, category: "Product C" },
]

export const Default: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-2xl p-8">
      <ScatterChart data={data} x="x" y="y" category="category" />
    </div>
  ),
}

export const WithSize: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-2xl p-8">
      <ScatterChart
        data={data}
        x="x"
        y="y"
        size="size"
        category="category"
        valueFormatter={{
          x: (v) => `$${v}K`,
          y: (v) => `${v}%`,
          size: (v) => `${v} units`,
        }}
      />
    </div>
  ),
}

export const NoCategories: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-2xl p-8">
      <ScatterChart data={data} x="x" y="y" size="size" />
    </div>
  ),
}

export const WithAxesLabels: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-2xl p-8">
      <ScatterChart
        data={data}
        x="x"
        y="y"
        category="category"
        xAxisLabel="Budget (K$)"
        yAxisLabel="Growth (%)"
        valueFormatter={{
          x: (v) => `$${v}K`,
          y: (v) => `${v}%`,
        }}
      />
    </div>
  ),
}

export const StartEndOnly: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-2xl p-8">
      <ScatterChart data={data} x="x" y="y" category="category" startEndOnly />
    </div>
  ),
}

export const NoData: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-2xl p-8">
      <ScatterChart data={[]} x="x" y="y" category="category" />
    </div>
  ),
}
