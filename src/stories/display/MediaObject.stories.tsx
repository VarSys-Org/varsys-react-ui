import type { Meta, StoryObj } from "@storybook/react"
import { MediaObject } from "../../components/display/media-object"

const meta: Meta<typeof MediaObject> = {
  title: "Display/MediaObject",
  component: MediaObject,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="max-w-md p-8">
      <MediaObject
        title="Title goes here"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptas distinctio nesciunt quas non animi."
      />
    </div>
  ),
}
