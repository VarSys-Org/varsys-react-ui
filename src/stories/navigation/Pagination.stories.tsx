import type { Meta, StoryObj } from "@storybook/react"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../../components/navigation/pagination"

const meta: Meta<typeof Pagination> = {
  title: "Navigation/Pagination",
  component: Pagination,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
}

export const Simple: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        {[1, 2, 3, 4, 5].map((page) => (
          <PaginationItem key={page}>
            <PaginationLink href="#" isActive={page === 1}>{page}</PaginationLink>
          </PaginationItem>
        ))}
      </PaginationContent>
    </Pagination>
  ),
}

export const IconsOnly: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
}
