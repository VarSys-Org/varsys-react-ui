import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { CartDrawer, type CartItem } from "../../components/overlays/cart-drawer"

const meta: Meta<typeof CartDrawer> = {
  title: "Overlays/CartDrawer",
  component: CartDrawer,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const initialItems: CartItem[] = [
  {
    id: "1",
    title: "Basic Tee 6-Pack",
    price: 24,
    quantity: 1,
    details: [
      { label: "Size", value: "XXS" },
      { label: "Color", value: "White" },
    ],
  },
  {
    id: "2",
    title: "Basic Tee 6-Pack",
    price: 24,
    quantity: 2,
    details: [
      { label: "Size", value: "L" },
      { label: "Color", value: "Black" },
    ],
  },
]

function StoryCart() {
  const [open, setOpen] = useState(true)
  const [items, setItems] = useState<CartItem[]>(initialItems)

  return (
    <div className="p-8">
      <button
        onClick={() => setOpen(true)}
        className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
      >
        Open cart
      </button>
      <CartDrawer
        open={open}
        onOpenChange={setOpen}
        items={items}
        totals={{ vat: 25, shipping: 5 }}
        onQuantityChange={(item, quantity) =>
          setItems((prev) =>
            prev.map((i) => (i.id === item.id ? { ...i, quantity } : i))
          )
        }
        onRemove={(item) =>
          setItems((prev) => prev.filter((i) => i.id !== item.id))
        }
      />
    </div>
  )
}

export const Default: Story = {
  render: () => <StoryCart />,
}

function StoryCartEmpty() {
  const [open, setOpen] = useState(true)
  return (
    <div className="p-8">
      <button
        onClick={() => setOpen(true)}
        className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
      >
        Open cart
      </button>
      <CartDrawer open={open} onOpenChange={setOpen} items={[]} />
    </div>
  )
}

export const Empty: Story = {
  render: () => <StoryCartEmpty />,
}
