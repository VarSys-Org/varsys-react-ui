import type { Meta, StoryObj } from "@storybook/react"
import { FlickeringGrid } from "../../components/effects/flickering-grid"
import { RetroGrid } from "../../components/effects/retro-grid"
import { DotPattern } from "../../components/effects/dot-pattern"
import { Ripple } from "../../components/effects/ripple"
import { GridPattern } from "../../components/effects/grid-pattern"

const meta: Meta = {
  title: "MagicUI/Backgrounds",
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const FlickeringGridBG: Story = {
  render: () => (
    <div className="relative h-[300px] w-full overflow-hidden rounded-lg bg-black">
      <FlickeringGrid className="absolute inset-0 z-0 [mask-image:radial-gradient(350px_circle_at_center,white,transparent)]" />
      <p className="relative z-10 flex h-full items-center justify-center text-white font-bold">Flickering Grid</p>
    </div>
  ),
  name: "Flickering Grid",
}

export const RetroGridBG: Story = {
  render: () => (
    <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
      <RetroGrid className="absolute inset-0" />
      <p className="relative z-10 flex h-full items-center justify-center text-white font-bold">Retro Grid</p>
    </div>
  ),
  name: "Retro Grid",
}

export const DotPatternBG: Story = {
  render: () => (
    <div className="relative h-[300px] w-full overflow-hidden rounded-lg bg-background">
      <DotPattern className="absolute inset-0 opacity-30 [mask-image:radial-gradient(350px_circle_at_center,black,transparent)]" />
      <p className="relative z-10 flex h-full items-center justify-center font-bold">Dot Pattern</p>
    </div>
  ),
  name: "Dot Pattern",
}

export const RippleBG: Story = {
  render: () => (
    <div className="relative h-[300px] w-full overflow-hidden rounded-lg bg-background">
      <Ripple numCircles={3} className="absolute inset-0" />
      <p className="relative z-10 flex h-full items-center justify-center font-bold">Ripple</p>
    </div>
  ),
  name: "Ripple",
}

export const GridPatternBG: Story = {
  render: () => (
    <div className="relative h-[300px] w-full overflow-hidden rounded-lg bg-background">
      <GridPattern className="absolute inset-0 opacity-30 [mask-image:radial-gradient(350px_circle_at_center,black,transparent)]" />
      <p className="relative z-10 flex h-full items-center justify-center font-bold">Grid Pattern</p>
    </div>
  ),
  name: "Grid Pattern",
}
