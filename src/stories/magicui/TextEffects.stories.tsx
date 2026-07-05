import type { Meta, StoryObj } from "@storybook/react"
import { TextAnimate } from "../../components/text-effects/text-animate"
import { HyperText } from "../../components/text-effects/hyper-text"
import { TypingAnimation } from "../../components/text-effects/typing-animation"
import { MorphingText } from "../../components/text-effects/morphing-text"
import { SparklesText } from "../../components/text-effects/sparkles-text"
import { NumberTicker } from "../../components/text-effects/number-ticker"

const meta: Meta = {
  title: "MagicUI/TextEffects",
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Animate: Story = {
  render: () => <TextAnimate className="text-2xl font-bold">Text animate effect</TextAnimate>,
}

export const Hyper: Story = {
  render: () => <HyperText className="text-3xl font-bold">Hyper text decoding</HyperText>,
}

export const Typing: Story = {
  render: () => <TypingAnimation className="text-2xl font-bold" duration={50}>Typing animation effect</TypingAnimation>,
}

export const Morphing: Story = {
  render: () => <MorphingText texts={["Hello World", "Welcome", "Morphing Text", "Magic UI"]} className="text-2xl font-bold" />,
}

export const Sparkles: Story = {
  render: () => <SparklesText className="text-2xl font-bold">Sparkles text effect</SparklesText>,
}

export const NumberTickerUp: Story = {
  render: () => <div className="flex items-center gap-2"><NumberTicker value={1000} className="text-4xl font-bold" /><span className="text-muted-foreground">users</span></div>,
}
