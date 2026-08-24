import type { Meta, StoryObj } from "@storybook/react"
import { SegmentedProgress } from "../../components/display/segmented-progress"

const meta: Meta<typeof SegmentedProgress> = {
  title: "Display/SegmentedProgress",
  component: SegmentedProgress,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const segments = [
  { name: "Free", value: 1200 },
  { name: "Pro", value: 850 },
  { name: "Enterprise", value: 320 },
]

export const Default: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-md bg-background p-8">
      <SegmentedProgress segments={segments} valueFormatter={(value) => value.toLocaleString()} />
    </div>
  ),
}

export const CustomColors: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-md bg-background p-8">
      <SegmentedProgress
        segments={[
          { name: "Storage", value: 60, color: "#3b82f6" },
          { name: "Memory", value: 25, color: "#a855f7" },
          { name: "Compute", value: 15, color: "#ec4899" },
        ]}
        height={16}
      />
    </div>
  ),
}

export const NoLegend: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-md bg-background p-8">
      <SegmentedProgress segments={segments} showLegend={false} showTotal={false} />
    </div>
  ),
}
