import type { Meta, StoryObj } from "@storybook/react"
import { FollowingPointer } from "../../components/effects/following-pointer"

const meta: Meta<typeof FollowingPointer> = {
  title: "Effects/FollowingPointer",
  component: FollowingPointer,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex h-64 items-center justify-center">
      <FollowingPointer title="Tooltip text" className="p-8">
        <div className="h-32 w-64 rounded-xl border bg-card flex items-center justify-center">
          <p className="text-sm text-muted-foreground">Hover over me</p>
        </div>
      </FollowingPointer>
    </div>
  ),
}
