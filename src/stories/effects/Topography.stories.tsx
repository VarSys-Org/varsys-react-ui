import type { Meta, StoryObj } from "@storybook/react"
import { Topography } from "../../components/effects/topography"

const meta: Meta<typeof Topography> = {
  title: "Effects/Topography",
  component: Topography,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="min-h-96 bg-background p-10">
      <Topography className="h-80 w-full rounded-2xl border border-border" />
    </div>
  ),
}

export const FilledBands: Story = {
  render: () => (
    <div className="min-h-96 bg-background p-10">
      <Topography className="h-80 w-full rounded-2xl border border-border" fillBands bands={3} glow={0.3} />
    </div>
  ),
}

export const UniformMode: Story = {
  render: () => (
    <div className="min-h-96 bg-background p-10">
      <Topography
        className="h-80 w-full rounded-2xl border border-border"
        colorMode="uniform"
        midColor="var(--chart-1)"
        bands={4}
        thickness={0.02}
      />
    </div>
  ),
}