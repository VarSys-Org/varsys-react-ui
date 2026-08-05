import type { Meta, StoryObj } from "@storybook/react"
import { Clipboard } from "../../components/display/clipboard"

const meta: Meta<typeof Clipboard> = {
  title: "Display/Clipboard",
  component: Clipboard,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <Clipboard value="https://example.com/shortlink" />
    </div>
  ),
}
