import type { Meta, StoryObj } from "@storybook/react"
import { ParallaxScroll2 } from "../../components/scroll/parallax-scroll-2"

const meta: Meta<typeof ParallaxScroll2> = {
  title: "Scroll/ParallaxScroll2",
  component: ParallaxScroll2,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const images = [
  "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=800&q=80",
]

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <ParallaxScroll2 images={images} />
    </div>
  ),
}

export const Subtle: Story = {
  render: () => (
    <div className="p-8">
      <ParallaxScroll2 images={images} translateY={80} translateX={80} rotate={8} />
    </div>
  ),
}
