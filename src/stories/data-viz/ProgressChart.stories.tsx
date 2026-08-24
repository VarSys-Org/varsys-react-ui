import type { Meta, StoryObj } from "@storybook/react"
import { ProgressChart } from "../../components/data-viz/progress-chart"

const meta: Meta<typeof ProgressChart> = {
  title: "Data Viz/ProgressChart",
  component: ProgressChart,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="grid place-items-center bg-background p-8">
      <div className="w-full max-w-sm">
        <ProgressChart
          data={[
            { name: "Storage", value: 42, target: 100 },
            { name: "Compute", value: 18, target: 100 },
            { name: "Bandwidth", value: 25, target: 100 },
          ]}
        />
      </div>
    </div>
  ),
}

export const WithCustomColors: Story = {
  render: () => (
    <div className="grid place-items-center bg-background p-8">
      <div className="w-full max-w-sm">
        <ProgressChart
          size={160}
          strokeWidth={14}
          data={[
            { name: "Completed", value: 68, color: "#22c55e" },
            { name: "In progress", value: 24, color: "#eab308" },
            { name: "Blocked", value: 8, color: "#ef4444" },
          ]}
        />
      </div>
    </div>
  ),
}
