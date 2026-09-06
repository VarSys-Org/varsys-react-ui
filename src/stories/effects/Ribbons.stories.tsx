import type { Meta, StoryObj } from "@storybook/react"
import { Ribbons } from "../../components/effects/ribbons"

const meta: Meta<typeof Ribbons> = {
  title: "Effects/Ribbons",
  component: Ribbons,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="h-[420px] w-full overflow-hidden rounded-xl bg-zinc-950">
      <Ribbons />
    </div>
  ),
}

export const Pastel: Story = {
  render: () => (
    <div className="h-[420px] w-full overflow-hidden rounded-xl bg-zinc-950">
      <Ribbons
        colors={["#f472b6", "#c084fc", "#818cf8", "#38bdf8"]}
        baseThickness={40}
        pointCount={70}
      />
    </div>
  ),
}

export const FadeAndShader: Story = {
  render: () => (
    <div className="h-[420px] w-full overflow-hidden rounded-xl bg-zinc-950">
      <Ribbons enableFade enableShaderEffect effectAmplitude={4} speedMultiplier={1} />
    </div>
  ),
}