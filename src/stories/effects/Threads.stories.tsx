import type { Meta, StoryObj } from "@storybook/react"
import { Threads } from "../../components/effects/threads"

const meta: Meta<typeof Threads> = {
  title: "Effects/Threads",
  component: Threads,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="min-h-96 bg-background p-10">
      <div className="flex h-80 w-full items-center justify-center rounded-2xl border border-border bg-zinc-950">
        <Threads className="h-full w-full" color={[1, 1, 1]} />
      </div>
    </div>
  ),
}

export const Interactive: Story = {
  render: () => (
    <div className="min-h-96 bg-background p-10">
      <div className="flex h-80 w-full items-center justify-center rounded-2xl border border-border bg-zinc-950">
        <Threads className="h-full w-full" color={[0.5, 0.8, 1]} amplitude={2} distance={0.15} enableMouseInteraction />
      </div>
    </div>
  ),
}

export const ThemeAccent: Story = {
  render: () => (
    <div className="min-h-96 bg-background p-10">
      <div className="flex h-80 w-full items-center justify-center rounded-2xl border border-border bg-zinc-950">
        <Threads className="h-full w-full" color={[0.3, 0.9, 0.5]} amplitude={1.5} />
      </div>
    </div>
  ),
}