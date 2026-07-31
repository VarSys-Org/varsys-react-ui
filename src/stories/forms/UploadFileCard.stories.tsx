import type { Meta, StoryObj } from "@storybook/react"
import { UploadFileCard } from "../../components/forms/upload-file-card"

const meta: Meta<typeof UploadFileCard> = {
  title: "Forms/UploadFileCard",
  component: UploadFileCard,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex h-64 items-center justify-center p-6">
      <UploadFileCard />
    </div>
  ),
}
