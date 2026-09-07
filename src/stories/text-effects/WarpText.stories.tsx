import type { Meta, StoryObj } from "@storybook/react"
import { WarpText } from "../../components/text-effects/warp-text"

const meta: Meta<typeof WarpText> = {
  title: "TextEffects/WarpText",
  component: WarpText,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-zinc-950 p-10">
      <WarpText text="Bend the moment" color="#f8f5ff" />
    </div>
  ),
}

export const Subtle: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-zinc-950 p-10">
      <WarpText
        text="Ripple"
        warpStrength={0.04}
        warpScale={1.2}
        speed={0.35}
        pointerInfluence={0.3}
        className="w-full"
      />
    </div>
  ),
}

export const NoRipple: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-zinc-950 p-10">
      <WarpText text="Still water" ripple={false} color="#ffd166" />
    </div>
  ),
}