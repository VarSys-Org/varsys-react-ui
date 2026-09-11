import type { Meta, StoryObj } from "@storybook/react"
import { ParticleText } from "../../components/effects/particle-text"

const meta: Meta<typeof ParticleText> = {
  title: "Effects/ParticleText",
  component: ParticleText,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex h-[400px] w-full items-center justify-center bg-background">
      <ParticleText text="VarSys UI" />
    </div>
  ),
}

export const HoverGather: Story = {
  render: () => (
    <div className="flex h-[400px] w-full items-center justify-center bg-background">
      <ParticleText
        text="Hover me"
        trigger="hover"
        color="var(--chart-1)"
        highlightColor="var(--chart-2)"
        scatter={240}
      />
    </div>
  ),
}

export const ClickGather: Story = {
  render: () => (
    <div className="flex h-[400px] w-full items-center justify-center bg-background">
      <ParticleText
        text="Click me"
        trigger="click"
        color="var(--foreground)"
        highlightColor="var(--primary)"
        density={6}
        glow={false}
      />
    </div>
  ),
}