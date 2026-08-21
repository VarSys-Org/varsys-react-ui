import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { SegmentedControl } from "../../components/forms/segmented-control"

const items = ["Overview", "Analytics", "Reports"]

const meta: Meta<typeof SegmentedControl> = {
  title: "Forms/SegmentedControl",
  component: SegmentedControl,
  tags: ["autodocs"],
  args: { items },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <SegmentedControl {...args} />,
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col items-start gap-4 p-8">
      <SegmentedControl {...args} size="sm" />
      <SegmentedControl {...args} size="default" />
      <SegmentedControl {...args} size="lg" />
    </div>
  ),
}

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number>("Overview")
    return (
      <div className="p-8">
        <SegmentedControl
          {...args}
          value={value}
          onValueChange={setValue}
        />
        <p className="mt-4 text-sm text-muted-foreground">
          Selected: {String(value)}
        </p>
      </div>
    )
  },
}

export const WithValues: Story = {
  render: () => (
    <div className="p-8">
      <SegmentedControl
        items={[
          { label: "List", value: "list" },
          { label: "Grid", value: "grid" },
          { label: "Board", value: "board" },
        ]}
        defaultValue="grid"
      />
    </div>
  ),
}
