import type { Meta, StoryObj } from "@storybook/react"
import { GlitchText } from "../../components/text-effects/glitch-text"

const meta: Meta<typeof GlitchText> = {
  title: "TextEffects/GlitchText",
  component: GlitchText,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Continuous: Story = {
  render: () => (
    <div className="flex min-h-72 items-center justify-center bg-background p-10">
      <GlitchText>Glitch Text</GlitchText>
    </div>
  ),
}

export const OnHover: Story = {
  render: () => (
    <div className="flex min-h-72 items-center justify-center bg-background p-10">
      <GlitchText enableOnHover>Hover me</GlitchText>
    </div>
  ),
}

export const Slow: Story = {
  render: () => (
    <div className="flex min-h-72 items-center justify-center bg-background p-10">
      <GlitchText speed={1.2}>Slow glitch</GlitchText>
    </div>
  ),
}