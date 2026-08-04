import type { Meta, StoryObj } from "@storybook/react"
import { ColorPicker } from "../../components/forms/color-picker"

const meta: Meta<typeof ColorPicker> = {
  title: "Forms/ColorPicker",
  component: ColorPicker,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <ColorPicker label="Color picker" />
    </div>
  ),
}

export const NoLabel: Story = {
  render: () => (
    <div className="p-8">
      <ColorPicker value="#16a34a" />
    </div>
  ),
}
