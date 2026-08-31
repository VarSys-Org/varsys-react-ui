import type { Meta, StoryObj } from "@storybook/react"
import { ImageUpload } from "../../components/forms/image-upload"

const meta: Meta<typeof ImageUpload> = {
  title: "Forms/ImageUpload",
  component: ImageUpload,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <div className="w-full max-w-md">
        <ImageUpload maxSizeMB={5} onImageChange={(file) => console.log(file)} />
      </div>
    </div>
  ),
}

export const Preseeded: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <div className="w-full max-w-md">
        <ImageUpload
          initialUrl="https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?auto=format&fit=crop&w=1200&q=80"
          initialName="preview.jpg"
        />
      </div>
    </div>
  ),
}