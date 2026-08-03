import type { Meta, StoryObj } from "@storybook/react"
import {
  Cropper,
  CropperCropArea,
  CropperDescription,
  CropperImage,
} from "../../components/forms/cropper"

const meta: Meta<typeof Cropper> = {
  title: "Forms/Cropper",
  component: Cropper,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex h-96 items-center justify-center p-8">
      <Cropper
        className="h-72 w-full max-w-lg rounded-lg border border-border bg-black"
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80"
        aspectRatio={16 / 9}
      >
        <CropperImage />
        <CropperCropArea />
        <CropperDescription>Drag to pan and scroll to zoom.</CropperDescription>
      </Cropper>
    </div>
  ),
}
