import type { Meta, StoryObj } from "@storybook/react"
import { RotatingText } from "../../components/text-effects/rotating-text"

const meta: Meta<typeof RotatingText> = {
  title: "TextEffects/RotatingText",
  component: RotatingText,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-72 items-center justify-center bg-background p-10">
      <RotatingText texts={["Industrial", "Precision", "Handcrafted", "Reliable"]} />
    </div>
  ),
}

export const Words: Story = {
  render: () => (
    <div className="flex min-h-72 items-center justify-center bg-background p-10">
      <RotatingText
        texts={["Driven by data", "Built for scale", "Designed for operators"]}
        splitBy="words"
        staggerDuration={0.06}
        rotationInterval={2600}
        mainClassName="text-2xl font-semibold text-foreground"
      />
    </div>
  ),
}

export const CustomTransition: Story = {
  render: () => (
    <div className="flex min-h-72 items-center justify-center bg-background p-10">
      <RotatingText
        texts={["Fade", "Slide", "Warp", "Morph"]}
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        rotationInterval={1800}
      />
    </div>
  ),
}

export const ManualControl: Story = {
  render: () => (
    <div className="flex min-h-72 flex-col items-center justify-center gap-6 bg-background p-10">
      <RotatingText texts={["Alpha", "Beta", "Gamma", "Delta"]} auto={false} />
      <p className="text-sm text-muted-foreground">Set auto=false to step through manually.</p>
    </div>
  ),
}