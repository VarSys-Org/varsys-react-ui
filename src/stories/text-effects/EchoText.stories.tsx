import type { Meta, StoryObj } from "@storybook/react"
import { EchoText } from "../../components/text-effects/echo-text"

const meta: Meta<typeof EchoText> = {
  title: "TextEffects/EchoText",
  component: EchoText,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10">
      <EchoText text="Echo" />
    </div>
  ),
}

export const PointerMode: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10">
      <EchoText text="Follow me" mode="pointer" echoes={16} offset={44} />
    </div>
  ),
}

export const EntranceOnly: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10">
      <EchoText text="Arrival" mode="entrance" direction="up" tint={false} />
    </div>
  ),
}