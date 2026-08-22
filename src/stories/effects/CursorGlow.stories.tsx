import type { Meta, StoryObj } from "@storybook/react"
import { Sparkles } from "lucide-react"

import { CursorGlow } from "../../components/effects/cursor-glow"

const meta: Meta<typeof CursorGlow> = {
  title: "Effects/CursorGlow",
  component: CursorGlow,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <CursorGlow className="rounded-2xl border bg-card p-8">
        <p className="text-sm text-muted-foreground">
          Move your cursor across this card to reveal a glow that follows the
          pointer.
        </p>
      </CursorGlow>
    </div>
  ),
}

export const Colors: Story = {
  render: () => (
    <div className="grid gap-4 p-8 sm:grid-cols-3">
      <CursorGlow className="rounded-2xl border bg-card p-8" color="var(--primary)">
        <p className="text-sm">Primary glow</p>
      </CursorGlow>
      <CursorGlow className="rounded-2xl border bg-card p-8" color="rgba(16, 185, 129, 0.5)">
        <p className="text-sm">Emerald glow</p>
      </CursorGlow>
      <CursorGlow className="rounded-2xl border bg-card p-8" color="rgba(244, 63, 94, 0.5)">
        <p className="text-sm">Rose glow</p>
      </CursorGlow>
    </div>
  ),
}

export const OverContent: Story = {
  render: () => (
    <div className="p-8">
      <CursorGlow className="rounded-2xl border bg-card">
        <div className="flex items-center gap-3 p-8">
          <Sparkles aria-hidden="true" className="size-5 text-primary" />
          <p className="text-sm">
            The glow renders behind the content so it never blocks interaction.
          </p>
        </div>
      </CursorGlow>
    </div>
  ),
}