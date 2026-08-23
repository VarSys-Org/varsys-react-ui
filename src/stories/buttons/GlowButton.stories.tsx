import type { Meta, StoryObj } from "@storybook/react"
import { ArrowRight } from "lucide-react"
import { GlowButton } from "../../components/buttons/glow-button"

const meta: Meta<typeof GlowButton> = {
  title: "Buttons/GlowButton",
  component: GlowButton,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-48 flex-wrap items-center justify-center gap-8 bg-background p-10">
      <GlowButton>Get Started</GlowButton>
      <GlowButton>
        Learn more <ArrowRight />
      </GlowButton>
    </div>
  ),
}

export const Modes: Story = {
  render: () => (
    <div className="flex min-h-64 flex-wrap items-center justify-center gap-8 bg-background p-10">
      <GlowButton mode="rotate">Rotate</GlowButton>
      <GlowButton mode="pulse">Pulse</GlowButton>
      <GlowButton mode="breathe">Breathe</GlowButton>
      <GlowButton mode="color-shift">Color shift</GlowButton>
      <GlowButton mode="flow">Flow</GlowButton>
      <GlowButton mode="static">Static</GlowButton>
    </div>
  ),
}

export const CustomColors: Story = {
  render: () => (
    <div className="flex min-h-48 flex-wrap items-center justify-center gap-8 bg-background p-10">
      <GlowButton colors={["#FF5733", "#3357FF", "#F1C40F"]}>
        Sunset glow
      </GlowButton>
      <GlowButton colors={["#00C9FF", "#92FE9D"]} blur="soft">
        Aqua glow
      </GlowButton>
    </div>
  ),
}