import type { Meta, StoryObj } from "@storybook/react"
import { EffectButton } from "../../components/buttons/effect-button"

const meta: Meta<typeof EffectButton> = {
  title: "Buttons/EffectButton",
  component: EffectButton,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const AllEffects: Story = {
  render: () => (
    <div className="flex min-h-64 flex-wrap items-center justify-center gap-6 bg-background p-10">
      <EffectButton effect="shimmer">Shimmer</EffectButton>
      <EffectButton effect="shine">Shine</EffectButton>
      <EffectButton effect="spotlight">Spotlight</EffectButton>
      <EffectButton effect="glow">Glow</EffectButton>
      <EffectButton effect="gradient">Gradient</EffectButton>
      <EffectButton effect="glass">Glass</EffectButton>
      <EffectButton effect="ripple">Ripple</EffectButton>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div className="flex min-h-64 items-center justify-center gap-6 bg-background p-10">
      <EffectButton effect="glow">Get started</EffectButton>
      <EffectButton effect="ripple" disabled>
        Disabled
      </EffectButton>
    </div>
  ),
}