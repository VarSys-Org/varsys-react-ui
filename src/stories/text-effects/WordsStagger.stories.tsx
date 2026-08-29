import type { Meta, StoryObj } from "@storybook/react"
import { WordsStagger } from "../../components/text-effects/words-stagger"

const meta: Meta<typeof WordsStagger> = {
  title: "TextEffects/WordsStagger",
  component: WordsStagger,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <WordsStagger className="max-w-2xl text-4xl font-bold">
        Words rise into place one by one
      </WordsStagger>
    </div>
  ),
}

export const Fast: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <WordsStagger stagger={0.04} speed={0.2} className="max-w-2xl text-3xl font-semibold">
        A snappier cascade of words
      </WordsStagger>
    </div>
  ),
}

export const InView: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <WordsStagger inView className="max-w-2xl text-3xl font-semibold">
        Plays when scrolled into view
      </WordsStagger>
    </div>
  ),
}