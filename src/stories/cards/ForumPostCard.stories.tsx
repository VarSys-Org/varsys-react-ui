import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { ForumPostCard } from "../../components/cards/forum-post-card"

const meta: Meta<typeof ForumPostCard> = {
  title: "Cards/ForumPostCard",
  component: ForumPostCard,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10">
      <div className="w-full max-w-3xl">
        <ForumPostCard />
      </div>
    </div>
  ),
}

export const Solved: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10">
      <div className="w-full max-w-3xl">
        <ForumPostCard
          solved
          question="How to memoize a server component?"
          comments={32}
          author="Priya"
          authorImage="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1160"
        />
      </div>
    </div>
  ),
}

export const Interactive: Story = {
  render: () => {
    const [solved, setSolved] = useState(false)
    return (
      <div className="flex min-h-80 items-center justify-center bg-background p-10">
        <div className="w-full max-w-3xl">
          <ForumPostCard
            solved={solved}
            onToggleSolved={() => setSolved((value) => !value)}
          />
        </div>
      </div>
    )
  },
}