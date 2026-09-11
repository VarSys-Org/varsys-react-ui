import type { Meta, StoryObj } from "@storybook/react"
import { MaskedHeading } from "../../components/text-effects/masked-heading"

const meta: Meta<typeof MaskedHeading> = {
  title: "TextEffects/MaskedHeading",
  component: MaskedHeading,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10">
      <MaskedHeading
        text="Designed in the details"
        src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1600&q=80"
        align="center"
      />
    </div>
  ),
}

export const WipeReveal: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10">
      <MaskedHeading
        text="Industrial precision"
        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80"
        reveal="wipe"
        align="center"
      />
    </div>
  ),
}

export const HoverTrigger: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10">
      <MaskedHeading
        text="Hover to reveal"
        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&q=80"
        reveal="fade"
        trigger="hover"
        align="center"
      />
    </div>
  ),
}