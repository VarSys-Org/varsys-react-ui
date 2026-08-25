import type { Meta, StoryObj } from "@storybook/react"
import { TiltedCard } from "../../components/cards/tilted-card"

const meta: Meta<typeof TiltedCard> = {
  title: "Cards/TiltedCard",
  component: TiltedCard,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const image =
  "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=800&auto=format&fit=crop"

export const Default: Story = {
  render: () => (
    <div className="flex min-h-96 items-center justify-center bg-background p-10">
      <TiltedCard imageSrc={image} altText="Bottles" captionText="Glow serum" />
    </div>
  ),
}

export const WithTooltip: Story = {
  render: () => (
    <div className="flex min-h-96 items-center justify-center bg-background p-10">
      <TiltedCard
        imageSrc={image}
        altText="Bottles"
        captionText="Hover to reveal"
        containerHeight="300px"
        containerWidth="300px"
        imageHeight="300px"
        imageWidth="300px"
        rotateAmplitude={18}
      />
    </div>
  ),
}

export const WithOverlay: Story = {
  render: () => (
    <div className="flex min-h-96 items-center justify-center bg-background p-10">
      <TiltedCard
        imageSrc={image}
        altText="Bottles"
        containerHeight="300px"
        containerWidth="300px"
        displayOverlayContent
        overlayContent={
          <div className="rounded-full bg-background/80 px-4 py-2 text-sm font-semibold backdrop-blur">
            New arrival
          </div>
        }
      />
    </div>
  ),
}
