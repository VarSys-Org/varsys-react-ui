import type { Meta, StoryObj } from "@storybook/react"
import { LiquidMetalButton } from "../../components/buttons/liquid-metal-button"

const meta: Meta<typeof LiquidMetalButton> = {
  title: "Buttons/LiquidMetalButton",
  component: LiquidMetalButton,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex items-center justify-center bg-slate-100 p-8">
      <LiquidMetalButton label="Get Started" />
    </div>
  ),
}

export const IconMode: Story = {
  render: () => (
    <div className="flex items-center justify-center bg-slate-100 p-8">
      <LiquidMetalButton viewMode="icon" />
    </div>
  ),
}
