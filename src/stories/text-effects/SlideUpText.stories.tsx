import type { Meta, StoryObj } from "@storybook/react"
import { SlideUpText } from "../../components/text-effects/slide-up-text"

const meta: Meta<typeof SlideUpText> = {
  title: "TextEffects/SlideUpText",
  component: SlideUpText,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Words: Story = {
  render: () => (
    <div className="flex min-h-72 items-center justify-center bg-background p-10">
      <SlideUpText className="text-4xl font-bold text-foreground">
        Build fast, ship beautiful interfaces
      </SlideUpText>
    </div>
  ),
}

export const Characters: Story = {
  render: () => (
    <div className="flex min-h-72 items-center justify-center bg-background p-10">
      <SlideUpText
        split="characters"
        stagger={0.035}
        className="text-4xl font-semibold text-foreground"
      >
        VARSYS
      </SlideUpText>
    </div>
  ),
}

export const FromCenter: Story = {
  render: () => (
    <div className="flex min-h-72 items-center justify-center bg-background p-10">
      <SlideUpText
        split="characters"
        from="center"
        stagger={0.06}
        className="text-3xl font-bold text-foreground"
      >
        Center burst
      </SlideUpText>
    </div>
  ),
}