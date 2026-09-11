import type { Meta, StoryObj } from "@storybook/react"
import { FoldText } from "../../components/text-effects/fold-text"

const meta: Meta<typeof FoldText> = {
  title: "TextEffects/FoldText",
  component: FoldText,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10">
      <FoldText text="Design unfolds" trigger="loop" />
    </div>
  ),
}

export const ScrollReveal: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10">
      <FoldText text="Scroll to unfold" splitBy="word" hinge="left" trigger="scroll" color="var(--primary)" />
    </div>
  ),
}

export const SideHinge: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10">
      <FoldText text="Fold from the side" splitBy="line" hinge="right" trigger="loop" fontSize={48} />
    </div>
  ),
}