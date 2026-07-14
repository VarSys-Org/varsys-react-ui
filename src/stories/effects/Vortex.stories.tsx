import type { Meta, StoryObj } from "@storybook/react"
import { Vortex } from "../../components/effects/vortex"

const meta: Meta<typeof Vortex> = {
  title: "Effects/Vortex",
  component: Vortex,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="h-[500px] w-full rounded-lg overflow-hidden">
      <Vortex className="flex items-center justify-center">
        <h2 className="text-4xl font-bold text-white">Vortex Effect</h2>
      </Vortex>
    </div>
  ),
}
