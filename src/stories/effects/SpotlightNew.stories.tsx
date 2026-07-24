import type { Meta, StoryObj } from "@storybook/react"
import { SpotlightNew } from "../../components/effects/spotlight-new"

const meta: Meta<typeof SpotlightNew> = {
  title: "Effects/SpotlightNew",
  component: SpotlightNew,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="relative h-64 w-full overflow-hidden rounded-xl bg-black">
      <SpotlightNew />
      <div className="relative z-50 flex h-full items-center justify-center">
        <h2 className="text-3xl font-bold text-white">Spotlight Effect</h2>
      </div>
    </div>
  ),
}
