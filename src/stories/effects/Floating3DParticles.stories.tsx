import type { Meta, StoryObj } from "@storybook/react"
import { Floating3DParticles } from "../../components/effects/floating-3d-particles"

const meta: Meta<typeof Floating3DParticles> = {
  title: "Effects/Floating3DParticles",
  component: Floating3DParticles,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="relative h-[320px] w-full overflow-hidden rounded-xl bg-zinc-950">
      <Floating3DParticles />
      <div className="relative z-10 flex h-full items-center justify-center p-6">
        <p className="text-sm font-medium text-zinc-300">
          Floating 3D particles field
        </p>
      </div>
    </div>
  ),
}

export const PurpleDrift: Story = {
  render: () => (
    <div className="relative h-[320px] w-full overflow-hidden rounded-xl bg-zinc-950">
      <Floating3DParticles
        color="#8B5CF6"
        depth={1}
        drift={1.2}
        opacity={0.4}
        quantity={500}
        size={4}
      />
    </div>
  ),
}

export const CyanField: Story = {
  render: () => (
    <div className="relative h-[320px] w-full overflow-hidden rounded-xl bg-zinc-950">
      <Floating3DParticles
        color="#22D3EE"
        depth={0.2}
        drift={-0.8}
        opacity={0.35}
        quantity={300}
        size={6}
      />
    </div>
  ),
}