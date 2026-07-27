import type { Meta, StoryObj } from "@storybook/react"
import { Cover } from "../../components/effects/cover"

const meta: Meta<typeof Cover> = {
  title: "Effects/Cover",
  component: Cover,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex h-96 items-center justify-center">
      <Cover>
        <span className="text-4xl font-bold md:text-7xl">Cover Effect</span>
      </Cover>
    </div>
  ),
}
