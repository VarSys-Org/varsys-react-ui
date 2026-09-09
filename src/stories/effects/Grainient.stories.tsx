import type { Meta, StoryObj } from "@storybook/react"
import { Grainient } from "../../components/effects/grainient"

const meta: Meta<typeof Grainient> = {
  title: "Effects/Grainient",
  component: Grainient,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="min-h-96 bg-background p-10">
      <Grainient className="h-80 w-full rounded-2xl border border-border" />
    </div>
  ),
}

export const CalmWaves: Story = {
  render: () => (
    <div className="min-h-96 bg-background p-10">
      <Grainient
        className="h-80 w-full rounded-2xl border border-border"
        timeSpeed={0.12}
        warpStrength={0.6}
        warpFrequency={3}
        grainAmount={0.05}
      />
    </div>
  ),
}

export const CustomPalette: Story = {
  render: () => (
    <div className="min-h-96 bg-background p-10">
      <Grainient
        className="h-80 w-full rounded-2xl border border-border"
        color1="var(--chart-1)"
        color2="var(--chart-2)"
        color3="var(--chart-3)"
        rotationAmount={250}
      />
    </div>
  ),
}