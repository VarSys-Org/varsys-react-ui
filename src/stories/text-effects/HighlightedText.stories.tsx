import type { Meta, StoryObj } from "@storybook/react"
import { HighlightedText } from "../../components/text-effects/highlighted-text"

const meta: Meta<typeof HighlightedText> = {
  title: "TextEffects/HighlightedText",
  component: HighlightedText,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <p className="max-w-xl text-center text-3xl font-bold">
        This sentence has a{" "}
        <HighlightedText>highlighted phrase</HighlightedText> in the middle.
      </p>
    </div>
  ),
}

export const FromLeft: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <p className="max-w-xl text-center text-3xl font-bold">
        Sweep in from the <HighlightedText from="left">left side</HighlightedText>.
      </p>
    </div>
  ),
}

export const FromTop: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <p className="max-w-xl text-center text-3xl font-bold">
        Drop down from <HighlightedText from="top">the top edge</HighlightedText>.
      </p>
    </div>
  ),
}

export const Delayed: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <p className="max-w-xl text-center text-3xl font-bold">
        Wait a beat, then <HighlightedText delay={1}>highlight this</HighlightedText>.
      </p>
    </div>
  ),
}