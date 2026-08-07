import type { Meta, StoryObj } from "@storybook/react"
import { FilterGroup } from "../../components/forms/filter-group"

const meta: Meta<typeof FilterGroup> = {
  title: "Forms/FilterGroup",
  component: FilterGroup,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const filters = [
  {
    id: "availability",
    label: "Availability",
    type: "checkbox" as const,
    options: [
      { label: "In stock", value: "in-stock" },
      { label: "Pre-order", value: "pre-order" },
      { label: "Backorder", value: "backorder" },
    ],
  },
  {
    id: "category",
    label: "Category",
    type: "radio" as const,
    options: [
      { label: "All", value: "all" },
      { label: "Tops", value: "tops" },
      { label: "Bottoms", value: "bottoms" },
    ],
  },
  {
    id: "price",
    label: "Price",
    type: "price" as const,
    min: 0,
    max: 600,
  },
]

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <FilterGroup
        filters={filters}
        onChange={(filterId, value) => console.log(filterId, value)}
      />
    </div>
  ),
}

export const CheckboxesOnly: Story = {
  render: () => (
    <div className="p-8">
      <FilterGroup
        filters={[
          {
            id: "brand",
            label: "Brand",
            type: "checkbox",
            options: [
              { label: "Nike", value: "nike" },
              { label: "Adidas", value: "adidas" },
              { label: "Puma", value: "puma" },
            ],
          },
          {
            id: "size",
            label: "Size",
            type: "checkbox",
            options: [
              { label: "XS", value: "xs" },
              { label: "S", value: "s" },
              { label: "M", value: "m" },
              { label: "L", value: "l" },
            ],
          },
        ]}
      />
    </div>
  ),
}
