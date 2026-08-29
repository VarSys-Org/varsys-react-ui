import type { Meta, StoryObj } from "@storybook/react"
import { RandomizedText } from "../../components/text-effects/randomized-text"

const meta: Meta<typeof RandomizedText> = {
  title: "TextEffects/RandomizedText",
  component: RandomizedText,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <RandomizedText className="text-3xl font-bold">
        Each word fades in at random
      </RandomizedText>
    </div>
  ),
}

export const Characters: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <RandomizedText split="chars" className="text-3xl font-bold">
        Character by character
      </RandomizedText>
    </div>
  ),
}

export const Fast: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <RandomizedText delay={0.05} className="text-3xl font-bold">
        A quicker cascade
      </RandomizedText>
    </div>
  ),
}

export const InView: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <RandomizedText inView className="text-3xl font-bold">
        Triggers on scroll
      </RandomizedText>
    </div>
  ),
}