import type { Meta, StoryObj } from "@storybook/react"
import { LayoutGrid } from "../../components/cards/layout-grid"

const meta: Meta<typeof LayoutGrid> = {
  title: "Cards/LayoutGrid",
  component: LayoutGrid,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const cards = [
  {
    id: 1,
    content: <div className="p-4 text-white"><h3 className="text-xl font-bold">Card 1</h3><p>Description</p></div>,
    className: "md:col-span-2",
    thumbnail: "https://images.unsplash.com/photo-1470071459604-3b9a55d8b5b5?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    content: <div className="p-4 text-white"><h3 className="text-xl font-bold">Card 2</h3><p>Description</p></div>,
    className: "md:col-span-1",
    thumbnail: "https://images.unsplash.com/photo-1470071459604-3b9a55d8b5b5?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    content: <div className="p-4 text-white"><h3 className="text-xl font-bold">Card 3</h3><p>Description</p></div>,
    className: "md:col-span-1",
    thumbnail: "https://images.unsplash.com/photo-1470071459604-3b9a55d8b5b5?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    content: <div className="p-4 text-white"><h3 className="text-xl font-bold">Card 4</h3><p>Description</p></div>,
    className: "md:col-span-2",
    thumbnail: "https://images.unsplash.com/photo-1470071459604-3b9a55d8b5b5?w=600&h=400&fit=crop",
  },
]

export const Default: Story = {
  render: () => <LayoutGrid cards={cards} />,
}
