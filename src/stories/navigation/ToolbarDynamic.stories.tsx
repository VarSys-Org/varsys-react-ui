import type { Meta, StoryObj } from "@storybook/react"
import ToolbarDynamic from "../../components/navigation/toolbar-dynamic"

const meta: Meta<typeof ToolbarDynamic> = {
  title: "Navigation/ToolbarDynamic",
  component: ToolbarDynamic,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="relative flex h-64 items-end justify-center p-8">
      <ToolbarDynamic />
    </div>
  ),
}
