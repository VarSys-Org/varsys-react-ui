import type { Meta, StoryObj } from "@storybook/react"
import { ProgressiveBlur } from "../../components/effects/progressive-blur"

const meta: Meta<typeof ProgressiveBlur> = {
  title: "Effects/ProgressiveBlur",
  component: ProgressiveBlur,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Bottom: Story = {
  render: () => (
    <div className="relative h-[300px] w-full overflow-hidden rounded-xl bg-gradient-to-b from-blue-500 to-purple-600">
      <div className="p-6 text-white">
        <h2 className="text-2xl font-bold">Content above blur</h2>
        <p>Scroll-like content with a progressive blur at the bottom.</p>
      </div>
      <ProgressiveBlur position="bottom" height="40%" />
    </div>
  ),
}

export const Top: Story = {
  render: () => (
    <div className="relative h-[300px] w-full overflow-hidden rounded-xl bg-gradient-to-b from-purple-600 to-blue-500">
      <ProgressiveBlur position="top" height="40%" />
      <div className="relative z-20 p-6 text-white">
        <h2 className="text-2xl font-bold">Content below blur</h2>
        <p>Progressive blur overlay at the top.</p>
      </div>
    </div>
  ),
}

export const Both: Story = {
  render: () => (
    <div className="relative h-[300px] w-full overflow-hidden rounded-xl bg-gradient-to-r from-green-500 to-teal-600">
      <ProgressiveBlur position="both" />
      <div className="relative z-20 flex h-full items-center justify-center p-6">
        <h2 className="text-2xl font-bold text-white">Blur on both sides</h2>
      </div>
    </div>
  ),
}
