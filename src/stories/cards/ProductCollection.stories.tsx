import type { Meta, StoryObj } from "@storybook/react"
import { ProductCollection } from "../../components/cards/product-collection"

const meta: Meta<typeof ProductCollection> = {
  title: "Cards/ProductCollection",
  component: ProductCollection,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const products = [
  { title: "Basic Tee", price: "£24.00 GBP" },
  { title: "Hooded Sweatshirt", price: "£60.00 GBP" },
  { title: "Canvas Backpack", price: "£75.00 GBP" },
  { title: "Recycled Sneakers", price: "£95.00 GBP" },
]

export const Default: Story = {
  render: () => (
    <ProductCollection
      title="Product Collection"
      description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit natus?"
      items={products}
    />
  ),
}

export const ThreeColumns: Story = {
  render: () => (
    <ProductCollection
      title="New Arrivals"
      items={[...products, { title: "Wool Beanie", price: "£20.00 GBP" }, { title: "Denim Jacket", price: "£120.00 GBP" }]}
      columns={3}
    />
  ),
}

export const WithBadges: Story = {
  render: () => (
    <ProductCollection
      items={products.map((p, i) => ({
        ...p,
        badge: i === 0 ? "New" : i === 1 ? "Sale" : undefined,
      }))}
    />
  ),
}
