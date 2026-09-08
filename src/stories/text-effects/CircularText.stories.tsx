import type { Meta, StoryObj } from "@storybook/react"
import { CircularText } from "../../components/text-effects/circular-text"

const meta: Meta<typeof CircularText> = {
  title: "TextEffects/CircularText",
  component: CircularText,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-72 items-center justify-center bg-background p-10">
      <CircularText text="VARSYS • HANDCRAFTED • UI •" />
    </div>
  ),
}

export const SlowDown: Story = {
  render: () => (
    <div className="flex min-h-72 items-center justify-center bg-background p-10">
      <CircularText text="SLOW • STEADY • FOCUS •" spinDuration={14} onHover="slowDown" />
    </div>
  ),
}

export const GoBonkers: Story = {
  render: () => (
    <div className="flex min-h-72 items-center justify-center bg-background p-10">
      <CircularText text="SPIN • FAST • GO •" spinDuration={8} onHover="goBonkers" />
    </div>
  ),
}