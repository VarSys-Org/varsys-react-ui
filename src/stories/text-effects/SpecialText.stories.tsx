import type { Meta, StoryObj } from "@storybook/react"
import { SpecialText } from "../../components/text-effects/special-text"

const meta: Meta<typeof SpecialText> = {
  title: "TextEffects/SpecialText",
  component: SpecialText,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <SpecialText className="text-4xl font-bold">
        Decode this message
      </SpecialText>
    </div>
  ),
}

export const Fast: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <SpecialText speed={10} className="text-3xl font-bold">
        A rapid decode effect
      </SpecialText>
    </div>
  ),
}

export const Delayed: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <SpecialText delay={1} className="text-3xl font-bold">
        Delayed start after one second
      </SpecialText>
    </div>
  ),
}