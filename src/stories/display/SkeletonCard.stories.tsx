import type { Meta, StoryObj } from "@storybook/react"
import { SkeletonCard } from "../../components/display/skeleton-card"

const meta: Meta<typeof SkeletonCard> = {
  title: "Display/SkeletonCard",
  component: SkeletonCard,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="grid place-items-center bg-background p-10">
      <div className="w-full max-w-sm">
        <SkeletonCard />
      </div>
    </div>
  ),
}

export const WithAvatar: Story = {
  render: () => (
    <div className="grid place-items-center bg-background p-10">
      <div className="w-full max-w-sm">
        <SkeletonCard showAvatar lines={2} />
      </div>
    </div>
  ),
}

export const NoAction: Story = {
  render: () => (
    <div className="grid place-items-center bg-background p-10">
      <div className="w-full max-w-sm">
        <SkeletonCard showAction={false} lines={4} />
      </div>
    </div>
  ),
}
