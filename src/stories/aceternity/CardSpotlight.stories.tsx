import type { Meta, StoryObj } from "@storybook/react"
import { CardSpotlight } from "../../components/ui/card-spotlight"

const meta: Meta = {
  title: "Aceternity/Spotlight",
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const CardSpotlightEffect: Story = {
  render: () => (
    <div className="max-w-md mx-auto">
      <CardSpotlight className="min-h-[200px]">
        <h3 className="text-xl font-bold relative z-20 text-white">Spotlight Card</h3>
        <p className="text-neutral-300 mt-2 relative z-20">Move your mouse to see the spotlight effect follow your cursor across this card.</p>
      </CardSpotlight>
    </div>
  ),
}
