import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { SearchSelect } from "../../components/forms/search-select"

const meta: Meta<typeof SearchSelect> = {
  title: "Forms/SearchSelect",
  component: SearchSelect,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const items = [
  { value: "alice", label: "Alice Johnson" },
  { value: "bob", label: "Bob Smith" },
  { value: "carol", label: "Carol White" },
  { value: "dave", label: "Dave Brown" },
  { value: "erin", label: "Erin Davis" },
  { value: "frank", label: "Frank Miller" },
  { value: "grace", label: "Grace Wilson" },
]

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<string | null>(null)
    return (
      <div className="p-8">
        <div className="w-72">
          <SearchSelect
            items={items}
            value={value}
            onValueChange={setValue}
            placeholder="Select a person"
          />
          <p className="mt-3 text-sm text-muted-foreground">
            Selected: {value ?? "none"}
          </p>
        </div>
      </div>
    )
  },
}

export const WithLabel: Story = {
  render: () => {
    const [value, setValue] = useState<string | null>("bob")
    return (
      <div className="p-8">
        <div className="w-72">
          <SearchSelect
            items={items}
            value={value}
            onValueChange={setValue}
            placeholder="Search..."
            label="Assignee"
          />
        </div>
      </div>
    )
  },
}
