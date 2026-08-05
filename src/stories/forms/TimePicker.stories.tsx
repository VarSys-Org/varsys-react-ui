import type { Meta, StoryObj } from "@storybook/react"
import { TimePicker } from "../../components/forms/time-picker"

const meta: Meta<typeof TimePicker> = {
  title: "Forms/TimePicker",
  component: TimePicker,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <TimePicker />
    </div>
  ),
}
