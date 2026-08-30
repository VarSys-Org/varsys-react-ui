import type { Meta, StoryObj } from "@storybook/react"
import { ClickSpark } from "../../components/effects/click-spark"

const meta: Meta<typeof ClickSpark> = {
  title: "Effects/ClickSpark",
  component: ClickSpark,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <ClickSpark sparkColor="#a855f7" sparkSize={12} sparkRadius={20} sparkCount={10}>
        <div className="rounded-xl border bg-card p-8 text-center">
          <p className="text-lg font-semibold">Click anywhere</p>
        </div>
      </ClickSpark>
    </div>
  ),
}

export const LargeBurst: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <ClickSpark
        sparkColor="#22d3ee"
        sparkSize={16}
        sparkRadius={28}
        sparkCount={16}
        duration={600}
      >
        <div className="rounded-xl border bg-card p-8 text-center">
          <p className="text-lg font-semibold">Big burst</p>
        </div>
      </ClickSpark>
    </div>
  ),
}

export const WarmTones: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <ClickSpark sparkColor="#f59e0b" sparkSize={8} sparkRadius={14} sparkCount={6}>
        <div className="rounded-xl border bg-card p-8 text-center">
          <p className="text-lg font-semibold">Subtle spark</p>
        </div>
      </ClickSpark>
    </div>
  ),
}