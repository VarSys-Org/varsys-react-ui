import type { Meta, StoryObj } from "@storybook/react"
import { NeoSelect } from "../../components/forms/neo-select"

const meta: Meta<typeof NeoSelect> = {
  title: "Forms/NeoSelect",
  component: NeoSelect,
  tags: ["autodocs"],
  render: (args) => (
    <div className="max-w-sm p-8">
      <NeoSelect {...args}>
        <option value="">Please select</option>
        <option value="JM">John Mayer</option>
        <option value="SRV">Stevie Ray Vaughn</option>
        <option value="JH">Jimi Hendrix</option>
        <option value="EC">Eric Clapton</option>
      </NeoSelect>
    </div>
  ),
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: "Headliner",
    name: "Headline",
    defaultValue: "",
  },
}

export const WithoutLabel: Story = {
  args: {
    name: "Headline",
    defaultValue: "",
  },
}
