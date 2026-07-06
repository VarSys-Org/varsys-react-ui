import type { Meta, StoryObj } from "@storybook/react"
import { BlurFade } from "../../components/effects/blur-fade"

const meta: Meta<typeof BlurFade> = {
  title: "Effects/BlurFade",
  component: BlurFade,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const items = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  title: `Item ${i + 1}`,
  description: "This item fades in with a blur effect when it enters the viewport.",
}))

export const Default: Story = {
  render: () => (
    <div className="space-y-4">
      {items.map((item, index) => (
        <BlurFade key={item.id} delay={index * 0.1} inView className="rounded-xl border bg-card p-6">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-muted-foreground">{item.description}</p>
        </BlurFade>
      ))}
    </div>
  ),
}

export const DirectionUp: Story = {
  render: () => (
    <div className="space-y-4">
      {items.slice(0, 4).map((item, index) => (
        <BlurFade key={item.id} delay={index * 0.15} direction="up" offset={12} inView className="rounded-xl border bg-card p-6">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-muted-foreground">{item.description}</p>
        </BlurFade>
      ))}
    </div>
  ),
}
