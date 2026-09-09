import type { Meta, StoryObj } from "@storybook/react"
import { DotField } from "../../components/effects/dot-field"

const meta: Meta<typeof DotField> = {
  title: "Effects/DotField",
  component: DotField,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="min-h-96 bg-background p-10">
      <div className="relative h-80 w-full overflow-hidden rounded-2xl border border-border">
        <DotField />
      </div>
    </div>
  ),
}

export const Sparkle: Story = {
  render: () => (
    <div className="min-h-96 bg-background p-10">
      <div className="relative h-80 w-full overflow-hidden rounded-2xl border border-border">
        <DotField sparkle gradientFrom="var(--chart-2)" gradientTo="var(--chart-1)" />
      </div>
    </div>
  ),
}

export const DenseField: Story = {
  render: () => (
    <div className="min-h-96 bg-background p-10">
      <div className="relative h-80 w-full overflow-hidden rounded-2xl border border-border">
        <DotField dotSpacing={8} dotRadius={2} bulgeStrength={90} cursorRadius={350} />
      </div>
    </div>
  ),
}