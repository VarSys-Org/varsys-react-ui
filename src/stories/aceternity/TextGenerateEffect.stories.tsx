import type { Meta, StoryObj } from "@storybook/react"
import { TextGenerateEffect } from "../../components/ui/text-generate-effect"

const meta: Meta<typeof TextGenerateEffect> = {
  title: "Aceternity/TextGenerateEffect",
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
