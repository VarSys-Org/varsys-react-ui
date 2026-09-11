import type { Meta, StoryObj } from "@storybook/react"
import { Ferrofluid } from "../../components/effects/ferrofluid"

const meta: Meta<typeof Ferrofluid> = {
  title: "Effects/Ferrofluid",
  component: Ferrofluid,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="h-[400px] w-full rounded-xl border border-border bg-background">
      <Ferrofluid colors={["#4F46E5", "#06B6D4", "#E0F2FE"]} />
    </div>
  ),
}

export const WarmFlow: Story = {
  render: () => (
    <div className="h-[400px] w-full rounded-xl border border-border bg-background">
      <Ferrofluid
        colors={["#ff4d6d", "#ff8fa3", "#ffb3c1"]}
        flowDirection="up"
        speed={0.8}
        fluidity={0.2}
        glow={3}
      />
    </div>
  ),
}

export const SubtleRim: Story = {
  render: () => (
    <div className="h-[400px] w-full rounded-xl border border-border bg-background">
      <Ferrofluid colors={["#0ea5e9", "#22d3ee", "#a5f3fc"]} rimWidth={0.1} sharpness={1.5} shimmer={0.8} />
    </div>
  ),
}