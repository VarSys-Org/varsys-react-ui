import type { Meta, StoryObj } from "@storybook/react"
import { PlasmaWave } from "../../components/effects/plasma-wave"

const meta: Meta<typeof PlasmaWave> = {
  title: "Effects/PlasmaWave",
  component: PlasmaWave,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="min-h-96 bg-background p-10">
      <PlasmaWave className="h-80 w-full rounded-2xl border border-border" />
    </div>
  ),
}

export const SlowRipple: Story = {
  render: () => (
    <div className="min-h-96 bg-background p-10">
      <PlasmaWave className="h-80 w-full rounded-2xl border border-border" speed1={0.02} speed2={0.02} bend1={0.6} bend2={0.4} />
    </div>
  ),
}

export const CyanPurple: Story = {
  render: () => (
    <div className="min-h-96 bg-background p-10">
      <PlasmaWave className="h-80 w-full rounded-2xl border border-border" colors={["var(--chart-1)", "var(--chart-2)"]} rotationDeg={20} />
    </div>
  ),
}