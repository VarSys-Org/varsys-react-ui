import type { Meta, StoryObj } from "@storybook/react"
import { HandwritingSvg } from "../../components/text-effects/handwriting-svg"

const meta: Meta<typeof HandwritingSvg> = {
  title: "TextEffects/HandwritingSvg",
  component: HandwritingSvg,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Text: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <HandwritingSvg
        text="Hello VarSys"
        width={340}
        height={160}
        fontSize={64}
        className="text-primary"
      />
    </div>
  ),
}

export const Path: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <HandwritingSvg
        path="M20 80 C40 20 80 20 100 80 C120 40 160 60 180 30"
        duration={3}
        strokeWidth={3}
        className="text-foreground"
      />
    </div>
  ),
}

export const SlowDraw: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <HandwritingSvg text="Welcome" width={360} height={150} fontSize={56} duration={4} delay={0.2} />
    </div>
  ),
}