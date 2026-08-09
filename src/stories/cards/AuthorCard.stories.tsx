import type { Meta, StoryObj } from "@storybook/react"
import { AuthorCard } from "../../components/cards/author-card"

const meta: Meta<typeof AuthorCard> = {
  title: "Cards/AuthorCard",
  component: AuthorCard,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const IMAGE =
  "https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80"

export const Default: Story = {
  render: () => (
    <div className="mx-auto flex w-full max-w-sm items-center justify-center p-8">
      <AuthorCard
        image={IMAGE}
        name="Manu Arora"
        readTime="2 min read"
        title="Author Card"
        description="Card with Author avatar, complete name and time to read - most suitable for blogs."
      />
    </div>
  ),
}
