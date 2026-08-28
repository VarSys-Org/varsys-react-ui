import type { Meta, StoryObj } from "@storybook/react"
import { FallbackAvatar } from "../../components/display/fallback-avatar"

const meta: Meta<typeof FallbackAvatar> = {
  title: "Display/FallbackAvatar",
  component: FallbackAvatar,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <FallbackAvatar name="Ada Lovelace" size={64} />
    </div>
  ),
}

export const Static: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <FallbackAvatar name="Ada Lovelace" size={64} animated={false} />
    </div>
  ),
}

export const Row: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center gap-4 bg-background p-10">
      <FallbackAvatar name="Grace Hopper" size={48} />
      <FallbackAvatar name="Alan Turing" size={48} />
      <FallbackAvatar name="Katherine Johnson" size={48} />
      <FallbackAvatar name="Margaret Hamilton" size={48} />
    </div>
  ),
}