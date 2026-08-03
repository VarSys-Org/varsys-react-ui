import type { Meta, StoryObj } from "@storybook/react"
import { BoxReveal } from "../../components/text-effects/box-reveal"

const meta: Meta<typeof BoxReveal> = {
  title: "TextEffects/BoxReveal",
  component: BoxReveal,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-64 items-center justify-center p-8">
      <div className="space-y-2 text-center">
        <BoxReveal width="100%">
          <h1 className="text-3xl font-bold text-foreground">Box Reveal</h1>
        </BoxReveal>
        <BoxReveal width="100%" duration={0.7}>
          <p className="text-muted-foreground">
            The content slides up while the box color wipes across.
          </p>
        </BoxReveal>
      </div>
    </div>
  ),
}
