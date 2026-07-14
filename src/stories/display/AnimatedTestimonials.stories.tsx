import type { Meta, StoryObj } from "@storybook/react"
import { AnimatedTestimonials } from "../../components/display/animated-testimonials"

const meta: Meta<typeof AnimatedTestimonials> = {
  title: "Display/AnimatedTestimonials",
  component: AnimatedTestimonials,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    testimonials: [
      {
        quote: "This is an amazing product that changed our workflow completely.",
        name: "John Doe",
        designation: "CEO, Tech Corp",
        src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop",
      },
      {
        quote: "The best investment we've made. Highly recommended.",
        name: "Jane Smith",
        designation: "CTO, Design Co",
        src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      },
    ],
    autoplay: true,
  },
}
