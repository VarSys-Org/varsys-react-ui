import type { Meta, StoryObj } from "@storybook/react"
import { OptionWheel } from "../../components/forms/option-wheel"

const meta: Meta<typeof OptionWheel> = {
  title: "Forms/OptionWheel",
  component: OptionWheel,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-96 items-center justify-center bg-background p-10">
      <div className="relative h-80 w-full max-w-sm overflow-hidden rounded-2xl border border-border">
        <OptionWheel />
      </div>
    </div>
  ),
}

export const RightSide: Story = {
  render: () => (
    <div className="flex min-h-96 items-center justify-center bg-background p-10">
      <div className="relative h-80 w-full max-w-sm overflow-hidden rounded-2xl border border-border">
        <OptionWheel side="right" fontSize={2} defaultSelected={5} />
      </div>
    </div>
  ),
}

export const Compact: Story = {
  render: () => (
    <div className="flex min-h-96 items-center justify-center bg-background p-10">
      <div className="relative h-80 w-full max-w-sm overflow-hidden rounded-2xl border border-border">
        <OptionWheel
          items={["Low", "Medium", "High", "Critical"]}
          fontSize={1.8}
          spacing={1.2}
          tilt={4}
          blur={1}
          defaultSelected={1}
        />
      </div>
    </div>
  ),
}