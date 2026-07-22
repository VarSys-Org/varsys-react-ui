import type { Meta, StoryObj } from "@storybook/react"
import { FileUpload } from "../../components/forms/file-upload"

const meta: Meta<typeof FileUpload> = {
  title: "Forms/FileUpload",
  component: FileUpload,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex w-full justify-center">
      <div className="w-full max-w-2xl">
        <FileUpload />
      </div>
    </div>
  ),
}
