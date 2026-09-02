import type { Meta, StoryObj } from "@storybook/react"
import { PinnableTable } from "../../components/data-viz/pinnable-table"

const meta: Meta<typeof PinnableTable> = {
  title: "DataViz/PinnableTable",
  component: PinnableTable,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="overflow-hidden rounded-lg border">
      <PinnableTable />
    </div>
  ),
}