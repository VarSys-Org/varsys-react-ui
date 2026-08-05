import type { Meta, StoryObj } from "@storybook/react"
import { DetailsList } from "../../components/display/details-list"

const meta: Meta<typeof DetailsList> = {
  title: "Display/DetailsList",
  component: DetailsList,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const items = [
  { term: "Title", description: "Mr" },
  { term: "Name", description: "John Frusciante" },
  { term: "Occupation", description: "Guitarist" },
  { term: "Salary", description: "$1,000,000+" },
]

export const Default: Story = {
  render: () => (
    <div className="max-w-lg p-8">
      <DetailsList items={items} />
    </div>
  ),
}

export const Bordered: Story = {
  render: () => (
    <div className="max-w-lg p-8">
      <DetailsList items={items} variant="bordered" />
    </div>
  ),
}

export const Striped: Story = {
  render: () => (
    <div className="max-w-lg p-8">
      <DetailsList items={items} variant="striped" />
    </div>
  ),
}
