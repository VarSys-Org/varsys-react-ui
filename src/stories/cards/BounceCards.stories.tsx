import type { Meta, StoryObj } from "@storybook/react"
import { BounceCards } from "../../components/cards/bounce-cards"

const IMAGES = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=300&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=300&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=300&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=300&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=300&auto=format&fit=crop",
]

const meta: Meta<typeof BounceCards> = {
  title: "Cards/BounceCards",
  component: BounceCards,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10">
      <BounceCards images={IMAGES} />
    </div>
  ),
}

export const HoverEnabled: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10">
      <BounceCards images={IMAGES} enableHover containerWidth={440} containerHeight={440} />
    </div>
  ),
}