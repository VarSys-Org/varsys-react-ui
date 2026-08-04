import type { Meta, StoryObj } from "@storybook/react"
import { PolarRadarChart } from "../../components/data-viz/radar-chart"

const meta: Meta<typeof PolarRadarChart> = {
  title: "DataViz/PolarRadarChart",
  component: PolarRadarChart,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const data = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 273 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
]

export const Default: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <PolarRadarChart
          data={data}
          indexKey="month"
          dataKey="desktop"
          label="Desktop"
          className="mx-auto aspect-square max-h-[350px]"
        />
      </div>
    </div>
  ),
}
