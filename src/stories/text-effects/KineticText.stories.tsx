import type { Meta, StoryObj } from "@storybook/react"
import { KineticText } from "../../components/text-effects/kinetic-text"

const meta: Meta<typeof KineticText> = {
  title: "TextEffects/KineticText",
  component: KineticText,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <KineticText text="Hover over me" className="text-4xl font-bold" />,
}

export const LongText: Story = {
  render: () => <KineticText text="Kinetic Typography Effect" className="text-4xl font-bold" />,
}
