import type { Meta, StoryObj } from "@storybook/react"
import { Galaxy } from "../../components/effects/galaxy"

const meta: Meta<typeof Galaxy> = {
  title: "Effects/Galaxy",
  component: Galaxy,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="min-h-96 p-10">
      <Galaxy tone="foreground" className="h-96 w-full rounded-2xl border border-border bg-zinc-950" />
    </div>
  ),
}

export const PrimaryTone: Story = {
  render: () => (
    <div className="min-h-96 p-10">
      <Galaxy tone="primary" count={600} className="h-96 w-full rounded-2xl border border-border bg-zinc-950" />
    </div>
  ),
}

export const EdgeOn: Story = {
  render: () => (
    <div className="min-h-96 p-10">
      <Galaxy tone="foreground" tilt={78} arms={2} winding={0.5} className="h-96 w-full rounded-2xl border border-border bg-zinc-950" />
    </div>
  ),
}