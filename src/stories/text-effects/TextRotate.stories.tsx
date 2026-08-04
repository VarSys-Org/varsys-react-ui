import type { Meta, StoryObj } from "@storybook/react"
import { TextRotate } from "../../components/text-effects/text-rotate"

const meta: Meta<typeof TextRotate> = {
  title: "TextEffects/TextRotate",
  component: TextRotate,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const texts = [
  "Interactive",
  "Beautiful",
  "Responsive",
  "Modern",
]

export const Default: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <TextRotate
        texts={texts}
        mainClassName="text-4xl font-bold text-foreground"
      />
    </div>
  ),
}

export const Words: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <TextRotate
        texts={["Build faster", "Ship sooner", "Scale easier"]}
        splitBy="words"
        mainClassName="text-3xl font-semibold text-foreground"
      />
    </div>
  ),
}

export const Slower: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <TextRotate
        texts={texts}
        rotationInterval={4000}
        mainClassName="text-4xl font-bold text-foreground"
      />
    </div>
  ),
}
