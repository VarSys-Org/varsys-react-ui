import type { Meta, StoryObj } from "@storybook/react"
import { LetterGlitch } from "../../components/effects/letter-glitch"

const meta: Meta<typeof LetterGlitch> = {
  title: "Effects/LetterGlitch",
  component: LetterGlitch,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="min-h-96 bg-background p-10">
      <div className="relative h-80 w-full overflow-hidden rounded-2xl border border-border">
        <LetterGlitch />
      </div>
    </div>
  ),
}

export const FastAndSmooth: Story = {
  render: () => (
    <div className="min-h-96 bg-background p-10">
      <div className="relative h-80 w-full overflow-hidden rounded-2xl border border-border">
        <LetterGlitch glitchSpeed={20} glitchColors={["#61dca3", "#61b3dc", "#2b4539"]} />
      </div>
    </div>
  ),
}

export const CenterVignette: Story = {
  render: () => (
    <div className="min-h-96 bg-background p-10">
      <div className="relative h-80 w-full overflow-hidden rounded-2xl border border-border">
        <LetterGlitch centerVignette outerVignette={false} characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" />
      </div>
    </div>
  ),
}