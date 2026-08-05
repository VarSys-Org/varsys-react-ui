import type { Meta, StoryObj } from "@storybook/react"
import ToolbarExpandable from "../../components/navigation/toolbar-expandable"

const meta: Meta<typeof ToolbarExpandable> = {
  title: "Navigation/ToolbarExpandable",
  component: ToolbarExpandable,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="relative flex h-96 items-end justify-center p-8">
      <ToolbarExpandable />
    </div>
  ),
}
