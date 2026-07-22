import type { Meta, StoryObj } from "@storybook/react"
import { DirectionAwareHover } from "../../components/effects/direction-aware-hover"

const meta: Meta<typeof DirectionAwareHover> = {
  title: "Effects/DirectionAwareHover",
  component: DirectionAwareHover,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex h-[30rem] w-full items-center justify-center">
      <DirectionAwareHover
        imageUrl="https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop"
        className=""
      >
        <p className="font-bold text-xl">Direction Aware Hover</p>
        <p className="font-normal text-sm">Hover from any direction</p>
      </DirectionAwareHover>
    </div>
  ),
}
