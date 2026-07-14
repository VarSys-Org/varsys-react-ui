import type { Meta, StoryObj } from "@storybook/react"
import { TypewriterEffect, TypewriterEffectSmooth } from "../../components/text-effects/typewriter-effect"

const meta: Meta<typeof TypewriterEffect> = {
  title: "Text Effects/TypewriterEffect",
  component: TypewriterEffect,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const words = [
  { text: "Build" },
  { text: "amazing" },
  { text: "things", className: "text-blue-500" },
  { text: "with" },
  { text: "Typewriter.", className: "text-purple-500" },
]

export const Default: Story = {
  args: { words },
}

export const Smooth: Story = {
  render: () => <TypewriterEffectSmooth words={words} />,
}
