import type { Meta, StoryObj } from "@storybook/react"
import { FileUploader } from "../../components/forms/file-uploader"

const meta: Meta<typeof FileUploader> = {
  title: "Forms/FileUploader",
  component: FileUploader,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <div className="w-full max-w-md">
        <FileUploader />
      </div>
    </div>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <div className="p-8">
      <div className="w-full max-w-md">
        <FileUploader
          label="Drop files here"
          description="PNG, JPG or PDF up to 10MB"
          accept="image/png,image/jpeg,application/pdf"
        />
      </div>
    </div>
  ),
}

export const SingleFile: Story = {
  render: () => (
    <div className="p-8">
      <div className="w-full max-w-md">
        <FileUploader multiple={false} label="Upload an avatar" />
      </div>
    </div>
  ),
}
