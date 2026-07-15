import type { Meta, StoryObj } from "@storybook/react"
import { DatePicker } from "../../components/forms/date-picker"

const meta: Meta<typeof DatePicker> = {
  title: "Forms/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof DatePicker>

export const Default: Story = {
  render: () => <DatePicker />,
}

export const WithValue: Story = {
  render: () => <DatePicker value={new Date()} />,
}
