import type { Meta, StoryObj } from "@storybook/react"
import { SmartPagination } from "../../components/navigation/smart-pagination"

const meta: Meta<typeof SmartPagination> = {
  title: "Navigation/SmartPagination",
  component: SmartPagination,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Split: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <SmartPagination currentPage={5} totalPages={20} />
    </div>
  ),
}

export const Attached: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <SmartPagination currentPage={3} totalPages={20} variant="attached" showFirstLast />
    </div>
  ),
}

export const FewPages: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <SmartPagination currentPage={2} totalPages={4} />
    </div>
  ),
}