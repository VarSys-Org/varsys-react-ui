import type { Meta, StoryObj } from "@storybook/react"
import { AnimatedContent } from "../../components/effects/animated-content"

const meta: Meta<typeof AnimatedContent> = {
  title: "Effects/AnimatedContent",
  component: AnimatedContent,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-80 flex-col items-center justify-center gap-6 bg-background p-10">
      <AnimatedContent className="rounded-xl border border-border bg-card p-8 text-card-foreground">
        Slides up on scroll
      </AnimatedContent>
      <AnimatedContent distance={200} className="rounded-xl border border-border bg-card p-8 text-card-foreground">
        Slides further
      </AnimatedContent>
    </div>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <div className="flex min-h-80 flex-col items-center justify-center gap-6 bg-background p-10">
      <AnimatedContent direction="horizontal" distance={120} className="rounded-xl border border-border bg-card p-8 text-card-foreground">
        Drifts in from the side
      </AnimatedContent>
    </div>
  ),
}

export const Scaled: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10">
      <AnimatedContent scale={0.6} className="rounded-xl border border-border bg-card p-8 text-card-foreground">
        Grows from scale
      </AnimatedContent>
    </div>
  ),
}