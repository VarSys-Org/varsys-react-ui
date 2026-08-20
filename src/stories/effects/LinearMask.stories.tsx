import type { Meta, StoryObj } from "@storybook/react"
import { LinearMask } from "../../components/effects/linear-mask"

const meta: Meta<typeof LinearMask> = {
  title: "Effects/LinearMask",
  component: LinearMask,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <LinearMask className="h-40 w-full">
        <div className="grid h-full grid-cols-5 gap-2">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="rounded-lg bg-primary/60" />
          ))}
        </div>
      </LinearMask>
    </div>
  ),
}

export const TextFade: Story = {
  render: () => (
    <div className="p-8">
      <LinearMask className="max-w-md">
        <p className="text-lg leading-relaxed">
          This text fades out at the top and bottom edges, creating a soft mask
          that works beautifully over gradients, images, or busy backgrounds.
        </p>
      </LinearMask>
    </div>
  ),
}

export const TallMask: Story = {
  render: () => (
    <div className="p-8">
      <LinearMask className="h-80 w-full">
        <div className="flex h-full flex-col gap-2 overflow-hidden">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="h-10 rounded-md border border-border bg-muted"
            />
          ))}
        </div>
      </LinearMask>
    </div>
  ),
}