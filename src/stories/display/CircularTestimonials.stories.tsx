import type { Meta, StoryObj } from "@storybook/react"
import { CircularTestimonials } from "../../components/display/circular-testimonials"

const testimonials = [
  {
    id: "1",
    quote:
      "VarSys transformed how our ops team works. The dashboards are beautiful and the API is a joy to integrate with.",
    name: "Tamar Chen",
    designation: "Head of Operations",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "2",
    quote:
      "The most polished industrial UI kit we have ever used. Every component feels hand-crafted and production ready.",
    name: "Joe Rivera",
    designation: "Engineering Lead",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "3",
    quote:
      "Shipping a full control room interface in weeks instead of months. The theming and charting are second to none.",
    name: "Amelia Clarke",
    designation: "Product Manager",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
  },
]

const meta: Meta<typeof CircularTestimonials> = {
  title: "Display/CircularTestimonials",
  component: CircularTestimonials,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="min-h-56 bg-background p-10">
      <CircularTestimonials testimonials={testimonials} autoplay autoplayInterval={4000} />
    </div>
  ),
}

export const NoAutoplay: Story = {
  render: () => (
    <div className="min-h-56 bg-background p-10">
      <CircularTestimonials testimonials={testimonials} autoplay={false} />
    </div>
  ),
}