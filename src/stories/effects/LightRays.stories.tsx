import type { Meta, StoryObj } from "@storybook/react"
import { LightRays } from "../../components/effects/light-rays"

const meta: Meta<typeof LightRays> = {
  title: "Effects/LightRays",
  component: LightRays,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="relative h-[400px] w-full overflow-hidden rounded-xl bg-gradient-to-b from-sky-950 to-slate-900">
      <LightRays />
      <div className="relative z-10 flex h-full items-center justify-center p-6">
        <h2 className="text-3xl font-bold text-white">Light Rays Effect</h2>
      </div>
    </div>
  ),
}

export const Warm: Story = {
  render: () => (
    <div className="relative h-[400px] w-full overflow-hidden rounded-xl bg-gradient-to-b from-amber-950 to-orange-900">
      <LightRays color="rgba(255, 200, 100, 0.3)" count={5} />
      <div className="relative z-10 flex h-full items-center justify-center p-6">
        <h2 className="text-3xl font-bold text-white">Warm Light Rays</h2>
      </div>
    </div>
  ),
}
