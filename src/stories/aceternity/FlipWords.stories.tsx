import type { Meta, StoryObj } from "@storybook/react"
import { FlipWords } from "../../components/text-effects/flip-words"

const meta: Meta<typeof FlipWords> = {
  title: "Aceternity/FlipWords",
  component: FlipWords,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    words: ["modern", "premium", "animated", "beautiful", "elegant"],
    className: "text-4xl font-bold text-white",
  },
}
