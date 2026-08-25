import type { Meta, StoryObj } from "@storybook/react"
import { CircularGallery } from "../../components/display/circular-gallery"

const meta: Meta<typeof CircularGallery> = {
  title: "Display/CircularGallery",
  component: CircularGallery,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const items = [
  { image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=500&auto=format&fit=crop" },
  { image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=500&auto=format&fit=crop" },
  { image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500&auto=format&fit=crop" },
  { image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=500&auto=format&fit=crop" },
  { image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=500&auto=format&fit=crop" },
  { image: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?q=80&w=500&auto=format&fit=crop" },
  { image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500&auto=format&fit=crop" },
]

export const Default: Story = {
  render: () => (
    <div className="w-full bg-background p-10">
      <CircularGallery items={items} />
    </div>
  ),
}

export const Tall: Story = {
  render: () => (
    <div className="w-full bg-background p-10">
      <CircularGallery items={items} height={520} amplitude={220} gap={260} />
    </div>
  ),
}
