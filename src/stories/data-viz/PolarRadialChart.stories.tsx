import type { Meta, StoryObj } from "@storybook/react"
import { PolarRadialChart } from "../../components/data-viz/radial-chart"

const meta: Meta<typeof PolarRadialChart> = {
  title: "DataViz/PolarRadialChart",
  component: PolarRadialChart,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const data = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
]

export const Default: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <PolarRadialChart
          data={data}
          dataKey="visitors"
          nameKey="browser"
          className="mx-auto aspect-square max-h-[350px]"
        />
      </div>
    </div>
  ),
}
