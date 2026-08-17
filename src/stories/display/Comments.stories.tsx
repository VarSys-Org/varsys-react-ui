import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { Comments } from "../../components/display/comments"

const meta: Meta<typeof Comments> = {
  title: "Display/Comments",
  component: Comments,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const currentUser = { id: "you", name: "Ada Lovelace" }

const initialComments = [
  {
    id: "1",
    author: { id: "a", name: "Grace Hopper", avatar: undefined },
    content:
      "This is an excellent component! The API is clean and the theming works perfectly in both light and dark mode.",
    timestamp: "2 hours ago",
    likes: 12,
    replies: [
      {
        id: "1-1",
        author: { id: "b", name: "Margaret Hamilton" },
        content: "Agreed — the accessibility support is top notch too.",
        timestamp: "1 hour ago",
        likes: 4,
      },
      {
        id: "1-2",
        author: { id: "c", name: "Katherine Johnson" },
        content: "Would love to see keyboard navigation for the reply flow.",
        timestamp: "30 minutes ago",
        likes: 2,
      },
    ],
  },
  {
    id: "2",
    author: { id: "d", name: "Alan Turing" },
    content: "Just shipped this to production. Works flawlessly with React 19.",
    timestamp: "45 minutes ago",
    likes: 8,
  },
]

function Demo() {
  const [comments, setComments] = useState(initialComments)
  return (
    <div className="p-8">
      <Comments
        comments={comments}
        currentUser={currentUser}
        onSubmit={(content, parentId) => {
          if (parentId) return
          setComments((prev) => [
            {
              id: `new-${Date.now()}`,
              author: currentUser,
              content,
              timestamp: "Just now",
              likes: 0,
            },
            ...prev,
          ])
        }}
      />
    </div>
  )
}

export const Default: Story = {
  render: () => <Demo />,
}

export const Readonly: Story = {
  render: () => (
    <div className="p-8">
      <Comments comments={initialComments} />
    </div>
  ),
}

export const Empty: Story = {
  render: () => (
    <div className="p-8">
      <Comments comments={[]} currentUser={currentUser} />
    </div>
  ),
}

export const DeepThreads: Story = {
  render: () => (
    <div className="p-8">
      <Comments comments={initialComments} currentUser={currentUser} maxDepth={4} />
    </div>
  ),
}