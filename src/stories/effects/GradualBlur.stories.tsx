import type { Meta, StoryObj } from "@storybook/react"
import { GradualBlur } from "../../components/effects/gradual-blur"

const meta: Meta<typeof GradualBlur> = {
  title: "Effects/GradualBlur",
  component: GradualBlur,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const FooterFade: Story = {
  render: () => (
    <div className="min-h-96 bg-background p-10">
      <div className="relative h-80 overflow-hidden rounded-2xl border border-border bg-muted">
        <div className="flex h-full items-center justify-center p-10 text-2xl font-semibold text-foreground">
          Content below fades out
        </div>
        <GradualBlur position="bottom" height="6rem" divCount={6} strength={2} />
      </div>
    </div>
  ),
}

export const SidebarFade: Story = {
  render: () => (
    <div className="min-h-96 bg-background p-10">
      <div className="relative h-80 overflow-hidden rounded-2xl border border-border bg-muted">
        <div className="flex h-full items-center justify-center p-10 text-2xl font-semibold text-foreground">
          Content fades on the right edge
        </div>
        <GradualBlur position="right" width="6rem" divCount={5} strength={1.5} />
      </div>
    </div>
  ),
}

export const ScrollReveal: Story = {
  render: () => (
    <div className="min-h-96 bg-background p-10">
      <div className="relative h-80 overflow-hidden rounded-2xl border border-border bg-muted">
        <div className="flex h-full items-center justify-center p-10 text-2xl font-semibold text-foreground">
          Blur animates on scroll into view
        </div>
        <GradualBlur preset="intense" animated="scroll" onAnimationComplete={() => undefined} />
      </div>
    </div>
  ),
}