import type { Meta, StoryObj } from "@storybook/react"
import { Safari } from "../../components/ui/safari"
import { Iphone } from "../../components/ui/iphone"

const meta: Meta = {
  title: "MagicUI/DeviceMocks",
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const SafariBrowser: Story = {
  render: () => (
    <div className="flex justify-center p-4">
      <Safari url="varsys.co.in" className="max-w-lg">
        <div className="flex h-[300px] items-center justify-center bg-gradient-to-br from-purple-500 to-blue-500 text-white font-bold text-xl">
          Safari Browser Mockup
        </div>
      </Safari>
    </div>
  ),
  name: "Safari",
}

export const IPhone15: Story = {
  render: () => (
    <div className="flex justify-center p-4">
      <Iphone className="h-[500px]">
        <div className="flex h-full items-center justify-center bg-gradient-to-br from-green-500 to-emerald-500 text-white font-bold">
          iPhone Mockup
        </div>
      </Iphone>
    </div>
  ),
  name: "iPhone",
}
