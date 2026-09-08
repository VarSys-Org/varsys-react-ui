import type { Meta, StoryObj } from "@storybook/react"
import { TrueFocus } from "../../components/text-effects/true-focus"

const meta: Meta<typeof TrueFocus> = {
  title: "TextEffects/TrueFocus",
  component: TrueFocus,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-72 items-center justify-center bg-background p-10">
      <TrueFocus sentence="Focus flows through every word" />
    </div>
  ),
}

export const ManualMode: Story = {
  render: () => (
    <div className="flex min-h-72 items-center justify-center bg-background p-10">
      <TrueFocus sentence="Hover the words to focus" manualMode blurAmount={8} />
    </div>
  ),
}

export const CustomAccent: Story = {
  render: () => (
    <div className="flex min-h-72 items-center justify-center bg-background p-10">
      <TrueFocus
        sentence="Industrial precision"
        borderColor="var(--chart-2)"
        glowColor="color-mix(in srgb, var(--chart-2) 60%, transparent)"
        animationDuration={0.8}
        pauseBetweenAnimations={1.4}
      />
    </div>
  ),
}