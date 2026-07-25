import type { Meta, StoryObj } from "@storybook/react"
import { NativeSelect } from "../../components/forms/native-select"

const meta: Meta<typeof NativeSelect> = {
  title: "Forms/NativeSelect",
  component: NativeSelect,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <NativeSelect>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </NativeSelect>
  ),
}

export const Small: Story = {
  render: () => (
    <NativeSelect size="sm" defaultValue="1">
      <option value="1">Small</option>
      <option value="2">Option 2</option>
    </NativeSelect>
  ),
}

export const Disabled: Story = {
  render: () => (
    <NativeSelect disabled>
      <option>Disabled</option>
    </NativeSelect>
  ),
}
