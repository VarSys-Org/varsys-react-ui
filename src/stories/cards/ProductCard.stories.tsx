import type { Meta, StoryObj } from "@storybook/react"
import { ProductCard } from "../../components/cards/product-card"

const meta: Meta<typeof ProductCard> = {
  title: "Cards/ProductCard",
  component: ProductCard,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="mx-auto max-w-md p-8">
      <ProductCard title="Limited Edition Sports Trainer" price="$189.99" />
    </div>
  ),
}
