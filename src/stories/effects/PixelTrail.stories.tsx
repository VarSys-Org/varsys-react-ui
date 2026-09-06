import type { Meta, StoryObj } from "@storybook/react"
import { PixelTrail } from "../../components/effects/pixel-trail"

const meta: Meta<typeof PixelTrail> = {
  title: "Effects/PixelTrail",
  component: PixelTrail,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="relative h-[360px] w-full overflow-hidden rounded-xl bg-zinc-950">
      <PixelTrail className="!absolute inset-0 h-full w-full" />
      <div className="relative z-10 flex h-full items-center justify-center p-6">
        <p className="text-sm font-medium text-zinc-300">Move your cursor</p>
      </div>
    </div>
  ),
}

export const PurplePixels: Story = {
  render: () => (
    <div className="relative h-[360px] w-full overflow-hidden rounded-xl bg-zinc-950">
      <PixelTrail
        className="!absolute inset-0 h-full w-full"
        color="#8B5CF6"
        gridSize={30}
        trailSize={0.12}
      />
    </div>
  ),
}

export const Gooey: Story = {
  render: () => (
    <div className="relative h-[360px] w-full overflow-hidden rounded-xl bg-zinc-950">
      <PixelTrail
        className="!absolute inset-0 h-full w-full"
        color="#22D3EE"
        gooeyFilter={{ id: "goo", strength: 12 }}
      />
    </div>
  ),
}