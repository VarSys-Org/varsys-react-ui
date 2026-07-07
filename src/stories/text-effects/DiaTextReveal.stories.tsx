import type { Meta, StoryObj } from "@storybook/react"
import { DiaTextReveal } from "../../components/text-effects/dia-text-reveal"

const meta: Meta<typeof DiaTextReveal> = {
  title: "TextEffects/DiaTextReveal",
  component: DiaTextReveal,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex items-center justify-center p-12">
      <DiaTextReveal text="Hello World" className="text-5xl font-bold" />
    </div>
  ),
}

export const MultiText: Story = {
  render: () => (
    <div className="flex items-center justify-center p-12">
      <DiaTextReveal
        text={["React", "TypeScript", "Tailwind"]}
        repeat
        className="text-5xl font-bold"
      />
    </div>
  ),
}
