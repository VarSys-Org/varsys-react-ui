import type { Meta, StoryObj } from "@storybook/react"
import { TextGenerateEffect } from "../../components/text-effects/text-generate-effect"

const meta: Meta<typeof TextGenerateEffect> = {
  title: "TextEffects/TextGenerate",
  component: TextGenerateEffect,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    words: "Build premium interfaces with animated components and modern design patterns.",
    className: "text-white",
  },
}
