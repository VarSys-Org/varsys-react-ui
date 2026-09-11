import type { Meta, StoryObj } from "@storybook/react"
import { TextType } from "../../components/text-effects/text-type"

const meta: Meta<typeof TextType> = {
  title: "TextEffects/TextType",
  component: TextType,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10 text-3xl font-semibold">
      <TextType text={["Built for operators.", "Built for speed.", "Built for VarSys."]} loop />
    </div>
  ),
}

export const NoCursor: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10 text-3xl font-semibold">
      <TextType text="Typing without a cursor" showCursor={false} typingSpeed={90} />
    </div>
  ),
}

export const Colored: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10 text-3xl font-semibold">
      <TextType text={["Alpha", "Beta", "Gamma"]} textColors={["var(--chart-1)", "var(--chart-2)", "var(--chart-3)"]} />
    </div>
  ),
}