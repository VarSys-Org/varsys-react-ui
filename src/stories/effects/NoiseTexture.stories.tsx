import type { Meta, StoryObj } from "@storybook/react"
import { NoiseTexture } from "../../components/effects/noise-texture"

const meta: Meta<typeof NoiseTexture> = {
  title: "Effects/NoiseTexture",
  component: NoiseTexture,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="relative h-[300px] w-full overflow-hidden rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
      <NoiseTexture />
      <div className="relative z-10 flex h-full items-center justify-center p-6">
        <h2 className="text-2xl font-bold text-white">Noise Texture Overlay</h2>
      </div>
    </div>
  ),
}

export const Subtle: Story = {
  render: () => (
    <div className="relative h-[300px] w-full overflow-hidden rounded-xl bg-gradient-to-br from-sky-400 to-indigo-600">
      <NoiseTexture frequency={0.8} octaves={3} noiseOpacity={0.3} />
      <div className="relative z-10 flex h-full items-center justify-center p-6">
        <h2 className="text-2xl font-bold text-white">Subtle Grain</h2>
      </div>
    </div>
  ),
}
