import type { Meta, StoryObj } from "@storybook/react"
import { Badge } from "../../components/display/badge"
import { PerspectiveBook, BookHeader, BookTitle, BookDescription } from "../../components/cards/perspective-book"

const meta: Meta<typeof PerspectiveBook> = {
  title: "Cards/PerspectiveBook",
  component: PerspectiveBook,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-72 items-center justify-center bg-background p-10">
      <PerspectiveBook>
        <BookHeader>
          <Badge>React</Badge>
          <Badge variant="outline">Design System</Badge>
        </BookHeader>
        <BookTitle>Building for the long run</BookTitle>
        <BookDescription>
          A curated set of hand-crafted components for industrial dashboards and
          bento-style interfaces.
        </BookDescription>
      </PerspectiveBook>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex min-h-72 flex-wrap items-center justify-center gap-12 bg-background p-10">
      <PerspectiveBook size="sm">
        <BookTitle>Small</BookTitle>
        <BookDescription>Compact book cover.</BookDescription>
      </PerspectiveBook>
      <PerspectiveBook>
        <BookTitle>Default</BookTitle>
        <BookDescription>Standard size book cover.</BookDescription>
      </PerspectiveBook>
      <PerspectiveBook size="lg">
        <BookTitle>Large</BookTitle>
        <BookDescription>Large poster-style cover.</BookDescription>
      </PerspectiveBook>
    </div>
  ),
}

export const Textured: Story = {
  render: () => (
    <div className="flex min-h-72 items-center justify-center bg-background p-10">
      <PerspectiveBook textured>
        <BookHeader>
          <Badge>Volume 01</Badge>
        </BookHeader>
        <BookTitle>The VarSys Field Guide</BookTitle>
        <BookDescription>
          Textured cover with a paper-grain finish.
        </BookDescription>
      </PerspectiveBook>
    </div>
  ),
}