import type { Meta, StoryObj } from "@storybook/react"
import { Waves } from "../../components/effects/waves"

const meta: Meta<typeof Waves> = {
  title: "Effects/Waves",
  component: Waves,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="relative min-h-96 overflow-hidden rounded-2xl border border-border bg-background p-10">
      <Waves className="absolute inset-0" />
    </div>
  ),
}

export const TightGrid: Story = {
  render: () => (
    <div className="relative min-h-96 overflow-hidden rounded-2xl border border-border bg-background p-10">
      <Waves className="absolute inset-0" lineColor="var(--chart-2)" xGap={7} yGap={22} waveAmpX={24} waveAmpY={12} />
    </div>
  ),
}

export const CalmLines: Story = {
  render: () => (
    <div className="relative min-h-96 overflow-hidden rounded-2xl border border-border bg-background p-10">
      <Waves className="absolute inset-0" lineColor="var(--muted-foreground)" waveSpeedX={0.006} waveSpeedY={0.002} tension={0.002} />
    </div>
  ),
}