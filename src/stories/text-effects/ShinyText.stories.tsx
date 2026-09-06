import type { Meta, StoryObj } from "@storybook/react"
import { ShinyText } from "../../components/text-effects/shiny-text"

const meta: Meta<typeof ShinyText> = {
  title: "TextEffects/ShinyText",
  component: ShinyText,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-zinc-950 p-10">
      <ShinyText text="Shiny Text" className="text-4xl font-bold" />
    </div>
  ),
}

export const Yoyo: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-zinc-950 p-10">
      <ShinyText
        text="Bounce shine"
        yoyo
        speed={1.5}
        className="text-3xl font-semibold"
      />
    </div>
  ),
}

export const RightDirection: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-zinc-950 p-10">
      <ShinyText
        text="Sweeping right"
        direction="right"
        color="#64748b"
        shineColor="#f8fafc"
        className="text-3xl font-semibold"
      />
    </div>
  ),
}