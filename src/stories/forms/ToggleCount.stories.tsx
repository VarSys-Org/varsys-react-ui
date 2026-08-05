import type { Meta, StoryObj } from "@storybook/react"
import { ToggleCount } from "../../components/forms/toggle-count"

const meta: Meta<typeof ToggleCount> = {
  title: "Forms/ToggleCount",
  component: ToggleCount,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const plans = [
  { name: "Basic", monthly: 15, annual: 150 },
  { name: "Pro", monthly: 30, annual: 300 },
  { name: "Enterprise", monthly: 60, annual: 600 },
]

export const Default: Story = {
  render: () => (
    <div className="max-w-2xl p-8">
      <ToggleCount plans={plans} />
    </div>
  ),
}
