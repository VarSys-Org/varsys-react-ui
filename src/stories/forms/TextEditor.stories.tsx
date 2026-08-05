import type { Meta, StoryObj } from "@storybook/react"
import { TextEditor } from "../../components/forms/text-editor"

const meta: Meta<typeof TextEditor> = {
  title: "Forms/TextEditor",
  component: TextEditor,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="max-w-2xl p-8">
      <TextEditor />
    </div>
  ),
}
