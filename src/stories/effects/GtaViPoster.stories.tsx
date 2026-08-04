import type { Meta, StoryObj } from "@storybook/react"
import { GtaViPoster } from "../../components/effects/gta-vi-poster"

const meta: Meta<typeof GtaViPoster> = {
  title: "Effects/GtaViPoster",
  component: GtaViPoster,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="h-[30rem] overflow-hidden">
      <GtaViPoster />
    </div>
  ),
}
