import type { Meta, StoryObj } from "@storybook/react"
import { NeoCheckbox } from "../../components/forms/neo-checkbox"

const meta: Meta<typeof NeoCheckbox> = {
  title: "Forms/NeoCheckbox",
  component: NeoCheckbox,
  tags: ["autodocs"],
  args: {
    children: "Option 1",
    defaultChecked: true,
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="flex flex-col items-start gap-3 p-8">
      <NeoCheckbox {...args}>Option 1</NeoCheckbox>
      <NeoCheckbox {...args} defaultChecked={false}>
        Option 2
      </NeoCheckbox>
      <NeoCheckbox {...args} defaultChecked={false}>
        Option 3
      </NeoCheckbox>
    </div>
  ),
}

export const WithDescription: Story = {
  render: (args) => (
    <div className="flex flex-col items-start gap-5 p-8">
      <NeoCheckbox
        {...args}
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, distinctio."
      >
        Option 1
      </NeoCheckbox>
      <NeoCheckbox
        {...args}
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, distinctio."
        defaultChecked={false}
      >
        Option 2
      </NeoCheckbox>
    </div>
  ),
}

export const Disabled: Story = {
  render: (args) => (
    <div className="p-8">
      <NeoCheckbox {...args} disabled>
        Disabled
      </NeoCheckbox>
    </div>
  ),
}
