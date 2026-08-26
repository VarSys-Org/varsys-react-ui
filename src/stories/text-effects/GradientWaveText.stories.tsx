import type { Meta, StoryObj } from "@storybook/react"
import { GradientWaveText } from "../../components/text-effects/gradient-wave-text"

const meta: Meta<typeof GradientWaveText> = {
  title: "TextEffects/GradientWaveText",
  component: GradientWaveText,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <GradientWaveText className="text-4xl font-bold">
        Gradient Wave
      </GradientWaveText>
    </div>
  ),
}

export const Linear: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <GradientWaveText radial={false} className="text-4xl font-bold">
        Linear Wave
      </GradientWaveText>
    </div>
  ),
}

export const CustomColors: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <GradientWaveText
        customColors={["#22d3ee", "#818cf8", "#c084fc"]}
        bandCount={6}
        className="text-4xl font-bold"
      >
        Indigo Dream
      </GradientWaveText>
    </div>
  ),
}

export const Looping: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <GradientWaveText repeat className="text-4xl font-bold">
        Endless Wave
      </GradientWaveText>
    </div>
  ),
}