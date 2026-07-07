import type { Meta, StoryObj } from "@storybook/react"
import { Terminal, AnimatedSpan, TypingAnimation } from "../../components/effects/terminal"

const meta: Meta<typeof Terminal> = {
  title: "Effects/Terminal",
  component: Terminal,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Terminal>
      <TypingAnimation delay={200}>npm install @varsys/ui</TypingAnimation>
      <AnimatedSpan delay={1500}>Installing packages...</AnimatedSpan>
      <AnimatedSpan delay={2500}>✓ All dependencies installed</AnimatedSpan>
      <AnimatedSpan delay={3500}>Build completed successfully</AnimatedSpan>
    </Terminal>
  ),
}
