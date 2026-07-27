import type { Meta, StoryObj } from "@storybook/react"
import { Carousel, AppleCard } from "../../components/display/apple-cards-carousel"

const meta: Meta<typeof Carousel> = {
  title: "Display/AppleCardsCarousel",
  component: Carousel,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const cards = [
  {
    src: "https://images.unsplash.com/photo-1557683316-973673baf926?w=400&h=600&fit=crop",
    title: "Apple Vision Pro",
    category: "Technology",
    content: <div className="text-neutral-700 dark:text-neutral-300"><p>Experience the future of computing.</p></div>,
  },
  {
    src: "https://images.unsplash.com/photo-1557683316-973673baf926?w=400&h=600&fit=crop",
    title: "iPhone 15 Pro",
    category: "Mobile",
    content: <div className="text-neutral-700 dark:text-neutral-300"><p>The most powerful iPhone ever.</p></div>,
  },
]

export const Default: Story = {
  render: () => (
    <Carousel
      items={cards.map((card, index) => (
        <AppleCard key={index} card={card} index={index} />
      ))}
    />
  ),
}
