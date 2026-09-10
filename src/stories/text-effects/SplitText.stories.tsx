import type { Meta, StoryObj } from "@storybook/react"
import { SplitText } from "../../components/text-effects/split-text"

const meta: Meta<typeof SplitText> = {
  title: "TextEffects/SplitText",
  component: SplitText,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10">
      <SplitText text="Reveal me on scroll" className="text-4xl font-bold text-foreground" />
    </div>
  ),
}

export const Words: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10">
      <SplitText
        text="Word by word reveal"
        splitType="words"
        delay={100}
        className="text-4xl font-bold text-foreground"
      />
    </div>
  ),
}

export const Lines: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10">
      <SplitText
        text="Split across multiple lines with a staggered entrance"
        splitType="lines"
        delay={80}
        className="text-3xl font-semibold text-foreground"
      />
    </div>
  ),
}