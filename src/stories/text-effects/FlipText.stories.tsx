import type { Meta, StoryObj } from "@storybook/react"
import { FlipText } from "../../components/text-effects/flip-text"

const meta: Meta<typeof FlipText> = {
  title: "TextEffects/FlipText",
  component: FlipText,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex h-48 items-center justify-center p-8">
      <FlipText className="text-3xl font-bold text-foreground">
        FLIP ME
      </FlipText>
    </div>
  ),
}

export const Slow: Story = {
  render: () => (
    <div className="flex h-48 items-center justify-center p-8">
      <FlipText duration={0.9} delayMultiple={0.15} className="text-3xl font-bold text-foreground">
        Hello World
      </FlipText>
    </div>
  ),
}
