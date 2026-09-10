import type { Meta, StoryObj } from "@storybook/react"
import { DotGrid } from "../../components/effects/dot-grid"

const meta: Meta<typeof DotGrid> = {
  title: "Effects/DotGrid",
  component: DotGrid,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="h-[400px] w-full bg-background">
      <DotGrid />
    </div>
  ),
}

export const PurpleGlow: Story = {
  render: () => (
    <div className="h-[400px] w-full bg-background">
      <DotGrid
        baseColor="#6366f1"
        activeColor="#a78bfa"
        proximity={180}
        speedTrigger={80}
        shockRadius={300}
        shockStrength={8}
      />
    </div>
  ),
}

export const SmallDense: Story = {
  render: () => (
    <div className="h-[400px] w-full bg-background">
      <DotGrid dotSize={8} gap={16} proximity={120} />
    </div>
  ),
}