import * as React from "react"
import type { DateRange } from "react-day-picker"
import type { Meta, StoryObj } from "@storybook/react"
import { ChartFilter } from "../../components/data-viz/chart-filter"

const meta: Meta<typeof ChartFilter> = {
  title: "DataViz/ChartFilter",
  component: ChartFilter,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const chartData = [
  { date: "2026-06-01", visitors: 178 },
  { date: "2026-06-02", visitors: 470 },
  { date: "2026-06-03", visitors: 103 },
  { date: "2026-06-04", visitors: 439 },
  { date: "2026-06-05", visitors: 88 },
  { date: "2026-06-06", visitors: 294 },
  { date: "2026-06-07", visitors: 323 },
  { date: "2026-06-08", visitors: 385 },
  { date: "2026-06-09", visitors: 438 },
  { date: "2026-06-10", visitors: 155 },
  { date: "2026-06-11", visitors: 92 },
  { date: "2026-06-12", visitors: 492 },
  { date: "2026-06-13", visitors: 81 },
  { date: "2026-06-14", visitors: 426 },
  { date: "2026-06-15", visitors: 307 },
  { date: "2026-06-16", visitors: 371 },
  { date: "2026-06-17", visitors: 475 },
  { date: "2026-06-18", visitors: 107 },
  { date: "2026-06-19", visitors: 341 },
  { date: "2026-06-20", visitors: 408 },
  { date: "2026-06-21", visitors: 169 },
  { date: "2026-06-22", visitors: 317 },
  { date: "2026-06-23", visitors: 480 },
  { date: "2026-06-24", visitors: 132 },
  { date: "2026-06-25", visitors: 141 },
  { date: "2026-06-26", visitors: 434 },
  { date: "2026-06-27", visitors: 448 },
  { date: "2026-06-28", visitors: 149 },
  { date: "2026-06-29", visitors: 103 },
  { date: "2026-06-30", visitors: 446 },
]

const total = chartData.reduce((acc, curr) => acc + curr.visitors, 0)

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <ChartFilter
        data={chartData}
        title="Web Analytics"
        description="Showing total visitors for this month."
        valueKey="visitors"
        valueFormatter={(value) => value.toLocaleString()}
        footer={
          <div className="text-sm">
            You had{" "}
            <span className="font-semibold">{total.toLocaleString()}</span>{" "}
            visitors for the month of June.
          </div>
        }
      />
    </div>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [range, setRange] = React.useState<DateRange | undefined>({
      from: new Date(2026, 5, 5),
      to: new Date(2026, 5, 20),
    })
    return (
      <div className="flex flex-col items-start gap-4 p-8">
        <ChartFilter
          data={chartData}
          title="Visitors"
          valueKey="visitors"
          range={range}
          onRangeChange={setRange}
        />
        <p className="text-sm text-muted-foreground">
          {range?.from
            ? `${range.from.toLocaleDateString()} – ${range.to?.toLocaleDateString() ?? "…"}`
            : "All time"}
        </p>
      </div>
    )
  },
}