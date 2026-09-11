import type { Meta, StoryObj } from "@storybook/react"
import { SpecularButton } from "../../components/buttons/specular-button"

const meta: Meta<typeof SpecularButton> = {
  title: "Buttons/SpecularButton",
  component: SpecularButton,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10">
      <SpecularButton>Get Started</SpecularButton>
    </div>
  ),
}

export const DarkTint: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10">
      <SpecularButton
        baseColor="#1e293b"
        lineColor="#94a3b8"
        tint="#0f172a"
        tintOpacity={0.6}
        blur={12}
        radius={28}
      >
        Launch Console
      </SpecularButton>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex min-h-80 flex-col items-center justify-center gap-4 bg-background p-10">
      <SpecularButton size="sm">Small</SpecularButton>
      <SpecularButton size="md">Medium</SpecularButton>
      <SpecularButton size="lg">Large</SpecularButton>
    </div>
  ),
}