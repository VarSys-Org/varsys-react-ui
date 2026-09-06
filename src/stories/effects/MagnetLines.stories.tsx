import type { Meta, StoryObj } from "@storybook/react"
import { MagnetLines } from "../../components/effects/magnet-lines"

const meta: Meta<typeof MagnetLines> = {
  title: "Effects/MagnetLines",
  component: MagnetLines,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-96 items-center justify-center bg-zinc-950 p-10">
      <MagnetLines />
    </div>
  ),
}

export const Dense: Story = {
  render: () => (
    <div className="flex min-h-96 items-center justify-center bg-zinc-950 p-10">
      <MagnetLines rows={12} columns={12} lineColor="#8B5CF6" />
    </div>
  ),
}

export const Light: Story = {
  render: () => (
    <div className="flex min-h-96 items-center justify-center bg-white p-10">
      <MagnetLines rows={6} columns={6} lineColor="#334155" containerSize="60vmin" />
    </div>
  ),
}