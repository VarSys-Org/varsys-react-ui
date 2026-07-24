import type { Meta, StoryObj } from "@storybook/react"
import { GlowingEffect } from "../../components/effects/glowing-effect"

const meta: Meta<typeof GlowingEffect> = {
  title: "Effects/GlowingEffect",
  component: GlowingEffect,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="relative h-48 w-96 rounded-xl border bg-card p-8">
      <GlowingEffect glow disabled={false} />
      <div className="flex h-full items-center justify-center">
        <p className="text-lg font-medium">Glowing Effect</p>
      </div>
    </div>
  ),
}

export const White: Story = {
  render: () => (
    <div className="relative h-48 w-96 rounded-xl border bg-card p-8">
      <GlowingEffect glow disabled={false} variant="white" />
      <div className="flex h-full items-center justify-center">
        <p className="text-lg font-medium">White Glow</p>
      </div>
    </div>
  ),
}
