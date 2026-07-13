import type { Meta, StoryObj } from "@storybook/react"
import { InboxIcon, SearchXIcon } from "lucide-react"

import { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyContent } from "../../components/display/empty"
import { Button } from "../../components/buttons/button"

const meta: Meta<typeof Empty> = {
  title: "Display/Empty",
  component: Empty,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Empty>
      <EmptyHeader>
        <InboxIcon className="size-12 text-muted-foreground" />
        <EmptyTitle>No items found</EmptyTitle>
        <EmptyDescription>Get started by creating your first item.</EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
}

export const WithAction: Story = {
  render: () => (
    <Empty>
      <EmptyHeader>
        <SearchXIcon className="size-12 text-muted-foreground" />
        <EmptyTitle>No results</EmptyTitle>
        <EmptyDescription>Try adjusting your search to find what you are looking for.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline">Clear search</Button>
      </EmptyContent>
    </Empty>
  ),
}
