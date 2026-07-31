import type { Meta, StoryObj } from "@storybook/react"
import { Ratings } from "../../components/forms/ratings"

const meta: Meta<typeof Ratings> = {
  title: "Forms/Ratings",
  component: Ratings,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex h-32 items-center justify-center">
      <Ratings />
    </div>
  ),
}

export const ReadOnly: Story = {
  render: () => (
    <div className="flex h-32 items-center justify-center">
      <Ratings defaultValue={4} readOnly />
    </div>
  ),
}

export const Hearts: Story = {
  render: () => (
    <div className="flex h-32 items-center justify-center">
      <Ratings defaultValue={3} symbol="heart" />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex h-32 flex-col items-center justify-center gap-4">
      <Ratings defaultValue={3} size="sm" />
      <Ratings defaultValue={3} size="md" />
      <Ratings defaultValue={3} size="lg" />
    </div>
  ),
}
