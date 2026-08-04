import type { Meta, StoryObj } from "@storybook/react"
import { BlogCard } from "../../components/cards/blog-card"

const meta: Meta<typeof BlogCard> = {
  title: "Cards/BlogCard",
  component: BlogCard,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="mx-auto max-w-md p-8">
      <BlogCard
        title="How to position your furniture for positivity"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem."
      />
    </div>
  ),
}

export const NoDescription: Story = {
  render: () => (
    <div className="mx-auto max-w-md p-8">
      <BlogCard title="A short update from the team" />
    </div>
  ),
}
