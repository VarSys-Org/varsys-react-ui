import type { Meta, StoryObj } from "@storybook/react"
import { NeoTextarea } from "../../components/forms/neo-textarea"

const meta: Meta<typeof NeoTextarea> = {
  title: "Forms/NeoTextarea",
  component: NeoTextarea,
  tags: ["autodocs"],
  args: {
    label: "Notes",
    name: "Notes",
    placeholder: "Write your notes here...",
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="max-w-sm p-8">
      <NeoTextarea {...args} />
    </div>
  ),
}

export const WithoutLabel: Story = {
  render: (args) => (
    <div className="max-w-sm p-8">
      <NeoTextarea {...args} label="" placeholder="Untitled textarea..." />
    </div>
  ),
}

export const Disabled: Story = {
  render: (args) => (
    <div className="max-w-sm p-8">
      <NeoTextarea {...args} disabled />
    </div>
  ),
}
