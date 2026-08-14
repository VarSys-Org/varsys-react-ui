import type { Meta, StoryObj } from "@storybook/react"
import { TestimonialGrid } from "../../components/display/testimonial-grid"

const meta: Meta<typeof TestimonialGrid> = {
  title: "Display/TestimonialGrid",
  component: TestimonialGrid,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <TestimonialGrid
      testimonials={[
        {
          avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
          name: "Martin escobar",
          title: "Founder of meta",
          quote:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae.",
        },
        {
          avatar: "https://randomuser.me/api/portraits/men/46.jpg",
          name: "Simon andrew",
          title: "Software engineer",
          quote:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
        },
        {
          avatar: "https://randomuser.me/api/portraits/men/86.jpg",
          name: "Micheal worin",
          title: "Product designer",
          quote:
            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.",
        },
      ]}
    />
  ),
}

export const SixColumns: Story = {
  render: () => (
    <TestimonialGrid
      title="Trusted by 10,000+ companies"
      testimonials={[
        {
          avatar: "https://randomuser.me/api/portraits/women/79.jpg",
          name: "Angela stian",
          title: "Product designer",
          quote: "The best tool we have adopted in years. Incredible results.",
        },
        {
          avatar: "https://randomuser.me/api/portraits/women/65.jpg",
          name: "Maria lopez",
          title: "Marketing lead",
          quote: "Our conversion rates doubled within the first quarter.",
        },
        {
          avatar: "https://randomuser.me/api/portraits/men/86.jpg",
          name: "Karim ahmed",
          title: "DevOp engineer",
          quote: "Rock solid infrastructure and a delightful DX.",
        },
      ]}
    />
  ),
}
