import type { Meta, StoryObj } from "@storybook/react"
import { GradientWaves } from "../../components/effects/gradient-waves"

const meta: Meta<typeof GradientWaves> = {
  title: "Effects/GradientWaves",
  component: GradientWaves,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="min-h-96 bg-background p-10">
      <GradientWaves className="h-80 w-full rounded-2xl border border-border" />
    </div>
  ),
}

export const CoolPalette: Story = {
  render: () => (
    <div className="min-h-96 bg-background p-10">
      <GradientWaves
        className="h-80 w-full rounded-2xl border border-border"
        horizonColor="#1e3a5f"
        waveColor="#2dd4bf"
        crestColor="#e0f2fe"
      />
    </div>
  ),
}

export const LowDetail: Story = {
  render: () => (
    <div className="min-h-96 bg-background p-10">
      <GradientWaves className="h-80 w-full rounded-2xl border border-border" detail="low" grain={false} speed={0.6} />
    </div>
  ),
}