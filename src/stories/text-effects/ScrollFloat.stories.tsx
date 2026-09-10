import type { Meta, StoryObj } from "@storybook/react"
import { ScrollFloat } from "../../components/text-effects/scroll-float"

const meta: Meta<typeof ScrollFloat> = {
  title: "TextEffects/ScrollFloat",
  component: ScrollFloat,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-80 flex-col items-center justify-center bg-background p-10">
      <ScrollFloat>Scroll to float me</ScrollFloat>
    </div>
  ),
}

export const SlowStagger: Story = {
  render: () => (
    <div className="flex min-h-80 flex-col items-center justify-center bg-background p-10">
      <ScrollFloat
        animationDuration={1.5}
        stagger={0.06}
        textClassName="font-bold text-foreground"
      >
        A softer, slower float
      </ScrollFloat>
    </div>
  ),
}