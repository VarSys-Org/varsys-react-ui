import type { Meta, StoryObj } from "@storybook/react"
import { BarsSpinner } from "../../components/display/bars-spinner"

const meta: Meta<typeof BarsSpinner> = {
  title: "Display/BarsSpinner",
  component: BarsSpinner,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <BarsSpinner />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex min-h-48 flex-wrap items-center justify-center gap-10 bg-background p-10">
      <BarsSpinner size={16} />
      <BarsSpinner size={24} />
      <BarsSpinner size={40} />
    </div>
  ),
}

export const Colors: Story = {
  render: () => (
    <div className="flex min-h-48 flex-wrap items-center justify-center gap-10 bg-background p-10">
      <BarsSpinner />
      <BarsSpinner color="#3b82f6" />
      <BarsSpinner color="#22c55e" />
      <BarsSpinner color="#ef4444" />
    </div>
  ),
}