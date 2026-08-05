import type { Meta, StoryObj } from "@storybook/react"
import { Magnetic } from "../../components/effects/magnetic"

const meta: Meta<typeof Magnetic> = {
  title: "Effects/Magnetic",
  component: Magnetic,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex h-64 items-center justify-center p-8">
      <Magnetic intensity={0.6}>
        <div className="flex h-24 w-40 items-center justify-center rounded-2xl bg-zinc-900 text-sm font-medium text-white shadow-lg">
          Magnetic
        </div>
      </Magnetic>
    </div>
  ),
}
