import type { Meta, StoryObj } from "@storybook/react"
import { ScrollVelocityContainer, ScrollVelocityRow } from "../../components/text-effects/scroll-based-velocity"

const meta: Meta = {
  title: "TextEffects/ScrollBasedVelocity",
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="h-[200vh]">
      <div className="sticky top-1/3">
        <ScrollVelocityContainer>
          <ScrollVelocityRow className="py-4 text-6xl font-bold">
            <span>Scroll Based Velocity </span>
          </ScrollVelocityRow>
          <ScrollVelocityRow
            direction={-1}
            baseVelocity={3}
            className="py-4 text-6xl font-bold text-muted-foreground"
          >
            <span>Reacts to your scroll speed </span>
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </div>
    </div>
  ),
}
