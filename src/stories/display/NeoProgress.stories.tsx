import type { Meta, StoryObj } from "@storybook/react"
import { NeoProgress } from "../../components/display/neo-progress"

const meta: Meta<typeof NeoProgress> = {
  title: "Display/NeoProgress",
  component: NeoProgress,
  tags: ["autodocs"],
  args: {
    value: 25,
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="flex max-w-md flex-col gap-8 p-8">
      <NeoProgress {...args} value={25} />
      <NeoProgress {...args} value={50} />
      <NeoProgress {...args} value={75} />
      <NeoProgress {...args} value={100} />
    </div>
  ),
}

export const Striped: Story = {
  render: (args) => (
    <div className="max-w-md p-8">
      <NeoProgress {...args} value={60} tone="striped" />
    </div>
  ),
}

export const Yellow: Story = {
  render: (args) => (
    <div className="max-w-md p-8">
      <NeoProgress {...args} value={60} tone="yellow" />
    </div>
  ),
}
