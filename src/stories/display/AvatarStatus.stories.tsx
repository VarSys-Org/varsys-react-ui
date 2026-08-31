import type { Meta, StoryObj } from "@storybook/react"
import { AvatarStatus } from "../../components/display/avatar-status"

const meta: Meta<typeof AvatarStatus> = {
  title: "Display/AvatarStatus",
  component: AvatarStatus,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Statuses: Story = {
  render: () => (
    <div className="flex min-h-56 flex-wrap items-center justify-center gap-6 bg-background p-10">
      <AvatarStatus fallback="SA" status="online" size="lg" />
      <AvatarStatus fallback="CT" status="away" size="md" />
      <AvatarStatus fallback="AL" status="busy" size="md" />
      <AvatarStatus fallback="MC" status="offline" size="md" />
    </div>
  ),
}

export const WithImage: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <AvatarStatus
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
        alt="Portrait"
        fallback="JD"
        status="online"
        size="lg"
      />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center gap-6 bg-background p-10">
      <AvatarStatus fallback="SM" status="online" size="sm" />
      <AvatarStatus fallback="MD" status="online" size="md" />
      <AvatarStatus fallback="LG" status="online" size="lg" />
    </div>
  ),
}