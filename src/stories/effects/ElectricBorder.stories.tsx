import type { Meta, StoryObj } from "@storybook/react"
import { ElectricBorder } from "../../components/effects/electric-border"

const meta: Meta<typeof ElectricBorder> = {
  title: "Effects/ElectricBorder",
  component: ElectricBorder,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10">
      <ElectricBorder borderRadius={20} className="w-80 p-8">
        <div className="flex h-40 items-center justify-center text-center text-lg font-medium text-foreground">
          Electric border follows the theme accent
        </div>
      </ElectricBorder>
    </div>
  ),
}

export const IntenseChaos: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10">
      <ElectricBorder borderRadius={28} chaos={0.3} speed={2} color="var(--chart-3)" className="w-80 p-8">
        <div className="flex h-40 items-center justify-center text-center text-lg font-medium text-foreground">
          Wild and fast
        </div>
      </ElectricBorder>
    </div>
  ),
}