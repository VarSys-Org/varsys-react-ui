import type { Meta, StoryObj } from "@storybook/react"
import { TextPressure } from "../../components/text-effects/text-pressure"

const meta: Meta<typeof TextPressure> = {
  title: "TextEffects/TextPressure",
  component: TextPressure,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-72 items-center justify-center bg-zinc-950 p-10">
      <TextPressure text="Hello!" textColor="#fff" className="w-full" />
    </div>
  ),
}

export const Stroke: Story = {
  render: () => (
    <div className="flex min-h-72 items-center justify-center bg-zinc-950 p-10">
      <TextPressure
        text="Compressa"
        stroke
        strokeColor="#ff6363"
        strokeWidth={2}
        textColor="#fff"
        className="w-full"
      />
    </div>
  ),
}

export const AlphaFade: Story = {
  render: () => (
    <div className="flex min-h-72 items-center justify-center bg-zinc-950 p-10">
      <TextPressure text="Follow me" alpha width={false} flex={false} textColor="#fff" className="w-full" />
    </div>
  ),
}