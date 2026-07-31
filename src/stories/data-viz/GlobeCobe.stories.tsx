import type { Meta, StoryObj } from "@storybook/react"
import { GlobeCobe } from "../../components/data-viz/globe-cobe"

const meta: Meta<typeof GlobeCobe> = {
  title: "DataViz/GlobeCobe",
  component: GlobeCobe,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="relative flex h-96 w-full items-center justify-center overflow-hidden rounded-lg bg-zinc-950">
      <GlobeCobe className="max-w-xl" />
    </div>
  ),
}
