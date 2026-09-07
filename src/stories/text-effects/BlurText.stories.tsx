import type { Meta, StoryObj } from "@storybook/react"
import { BlurText } from "../../components/text-effects/blur-text"

const meta: Meta<typeof BlurText> = {
  title: "TextEffects/BlurText",
  component: BlurText,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Words: Story = {
  render: () => (
    <div className="flex min-h-72 items-center justify-center bg-background p-10">
      <BlurText
        text="Words rise into focus"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-3xl font-bold text-foreground"
      />
    </div>
  ),
}

export const Letters: Story = {
  render: () => (
    <div className="flex min-h-72 items-center justify-center bg-background p-10">
      <BlurText
        text="Letter by letter"
        delay={80}
        animateBy="letters"
        direction="bottom"
        className="text-3xl font-semibold text-foreground"
      />
    </div>
  ),
}

export const FastStagger: Story = {
  render: () => (
    <div className="flex min-h-72 items-center justify-center bg-background p-10">
      <BlurText
        text="Fast and smooth"
        delay={30}
        stepDuration={0.25}
        className="text-4xl font-bold text-foreground"
      />
    </div>
  ),
}