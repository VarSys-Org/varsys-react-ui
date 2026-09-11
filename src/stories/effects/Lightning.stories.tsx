import type { Meta, StoryObj } from "@storybook/react"
import { Lightning } from "../../components/effects/lightning"

const meta: Meta<typeof Lightning> = {
  title: "Effects/Lightning",
  component: Lightning,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="h-[400px] w-full rounded-xl border border-border bg-black">
      <Lightning />
    </div>
  ),
}

export const Cyan: Story = {
  render: () => (
    <div className="h-[400px] w-full rounded-xl border border-border bg-black">
      <Lightning hue={190} intensity={1.4} speed={1.2} />
    </div>
  ),
}

export const WideBolts: Story = {
  render: () => (
    <div className="h-[400px] w-full rounded-xl border border-border bg-black">
      <Lightning hue={280} size={2.2} speed={0.6} />
    </div>
  ),
}