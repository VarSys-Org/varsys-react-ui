import type { Meta, StoryObj } from "@storybook/react"
import { BackgroundOverlayCard } from "../../components/cards/background-overlay-card"

const meta: Meta<typeof BackgroundOverlayCard> = {
  title: "Cards/BackgroundOverlayCard",
  component: BackgroundOverlayCard,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const IMAGE =
  "https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
const HOVER_IMAGE =
  "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif"

export const Default: Story = {
  render: () => (
    <div className="mx-auto flex w-full max-w-sm items-center justify-center p-8">
      <BackgroundOverlayCard
        image={IMAGE}
        hoverImage={HOVER_IMAGE}
        title="Background Overlays"
        description="This card is for some special elements, like displaying background gifs on hover only."
      />
    </div>
  ),
}
