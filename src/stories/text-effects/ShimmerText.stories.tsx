import type { Meta, StoryObj } from "@storybook/react"
import { ShimmerText } from "../../components/text-effects/shimmer-text"

const meta: Meta<typeof ShimmerText> = {
  title: "TextEffects/ShimmerText",
  component: ShimmerText,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <ShimmerText className="text-4xl font-bold">Shimmering Text</ShimmerText>
    </div>
  ),
}

export const Colored: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <div className="flex flex-col items-center gap-8">
        <ShimmerText variant="blue" className="text-3xl font-bold">
          Blue shimmer
        </ShimmerText>
        <ShimmerText variant="pink" className="text-3xl font-bold">
          Pink shimmer
        </ShimmerText>
        <ShimmerText variant="emerald" className="text-3xl font-bold">
          Emerald shimmer
        </ShimmerText>
      </div>
    </div>
  ),
}

export const Fast: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <ShimmerText duration={0.6} delay={0} className="text-4xl font-bold">
        Fast shimmer
      </ShimmerText>
    </div>
  ),
}