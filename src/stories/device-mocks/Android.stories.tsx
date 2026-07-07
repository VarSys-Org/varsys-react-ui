import type { Meta, StoryObj } from "@storybook/react"
import { Android } from "../../components/device-mocks/android"

const meta: Meta<typeof Android> = {
  title: "DeviceMocks/Android",
  component: Android,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Android
        src="https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=400&q=80"
        className="w-48"
      />
    </div>
  ),
}
