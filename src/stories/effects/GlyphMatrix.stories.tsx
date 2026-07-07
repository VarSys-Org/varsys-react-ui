import type { Meta, StoryObj } from "@storybook/react"
import { GlyphMatrix } from "../../components/effects/glyph-matrix"

const meta: Meta<typeof GlyphMatrix> = {
  title: "Effects/GlyphMatrix",
  component: GlyphMatrix,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="relative h-[300px] w-full overflow-hidden rounded-xl bg-black">
      <GlyphMatrix color="#00ff00" />
      <div className="relative z-10 flex h-full items-center justify-center p-6">
        <h2 className="text-2xl font-bold text-green-400">Matrix Effect</h2>
      </div>
    </div>
  ),
}

export const Blue: Story = {
  render: () => (
    <div className="relative h-[300px] w-full overflow-hidden rounded-xl bg-black">
      <GlyphMatrix color="#4488ff" glyphs="ABCDEFGHIJKLMNOP" mutationRate={0.02} />
      <div className="relative z-10 flex h-full items-center justify-center p-6">
        <h2 className="text-2xl font-bold text-blue-400">Blue Glyphs</h2>
      </div>
    </div>
  ),
}
