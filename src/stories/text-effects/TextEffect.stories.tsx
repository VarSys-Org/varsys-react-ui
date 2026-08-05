import type { Meta, StoryObj } from "@storybook/react"
import { TextEffect } from "../../components/text-effects/text-effect"

const meta: Meta<typeof TextEffect> = {
  title: "TextEffects/TextEffect",
  component: TextEffect,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="max-w-xl p-8 text-2xl font-semibold">
      <TextEffect preset="fade-in-blur" per="word">
        Animated text effect by word.
      </TextEffect>
    </div>
  ),
}

export const ByCharacter: Story = {
  render: () => (
    <div className="max-w-xl p-8 text-2xl font-semibold">
      <TextEffect preset="blur" per="char">
        Animated text effect by character.
      </TextEffect>
    </div>
  ),
}
