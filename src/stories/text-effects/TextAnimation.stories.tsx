import type { Meta, StoryObj } from "@storybook/react"
import { HyperText } from "../../components/text-effects/hyper-text"
import { NumberTicker } from "../../components/text-effects/number-ticker"

const meta: Meta = {
  title: "TextEffects/Animations",
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Hyper: Story = {
  render: () => <div className="flex items-center justify-center py-20"><HyperText>Hyper Text Effect</HyperText></div>
}

export const Number: Story = {
  render: () => <div className="flex items-center justify-center py-20"><NumberTicker value={123456} /></div>
}
