import type { Meta, StoryObj } from "@storybook/react"
import { Iphone15Pro } from "../../components/device-mocks/iphone-15-pro"

const meta: Meta<typeof Iphone15Pro> = {
  title: "DeviceMocks/Iphone15Pro",
  component: Iphone15Pro,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Iphone15Pro className="w-56" />
    </div>
  ),
}

export const WithImage: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Iphone15Pro
        className="w-56"
        src="https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=400&q=80"
      />
    </div>
  ),
}

export const WithVideo: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Iphone15Pro
        className="w-56"
        videoSrc="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
    </div>
  ),
}