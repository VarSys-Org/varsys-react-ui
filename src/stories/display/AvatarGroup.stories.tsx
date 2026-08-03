import type { Meta, StoryObj } from "@storybook/react"
import { AvatarGroup } from "../../components/display/avatar-group"

const meta: Meta<typeof AvatarGroup> = {
  title: "Display/AvatarGroup",
  component: AvatarGroup,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const srcs = [
  "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=300&h=300&q=80",
  "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?w=300&h=300&q=80",
  "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=300&h=300&q=80",
  "https://images.unsplash.com/photo-1602452920335-6a132309c7c8?w=300&h=300&q=80",
  "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300&h=300&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&q=80",
  "https://images.unsplash.com/photo-1514222709107-a180c68d72b4?w=300&h=300&q=80",
]

export const Stack: Story = {
  render: () => (
    <div className="flex h-32 items-center justify-center p-8">
      <AvatarGroup srcs={srcs} />
    </div>
  ),
}

export const Grid: Story = {
  render: () => (
    <div className="flex h-40 items-center justify-center p-8">
      <AvatarGroup srcs={srcs} variant="grid" />
    </div>
  ),
}
