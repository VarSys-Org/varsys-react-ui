import type { Meta, StoryObj } from "@storybook/react"
import { TestimonialSlider } from "../../components/display/testimonial-slider"

const meta: Meta<typeof TestimonialSlider> = {
  title: "Display/TestimonialSlider",
  component: TestimonialSlider,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <TestimonialSlider
      testimonials={[
        {
          avatar: "https://randomuser.me/api/portraits/women/79.jpg",
          name: "Angela stian",
          title: "Product designer",
          quote:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout, that the point of using Lorem Ipsum.",
        },
        {
          avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
          name: "Martin escobar",
          title: "Founder of meta",
          quote:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae, gravida justo.",
        },
        {
          avatar: "https://randomuser.me/api/portraits/men/86.jpg",
          name: "Karim ahmed",
          title: "DevOp engineer",
          quote:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
        },
      ]}
    />
  ),
}

export const CustomHeading: Story = {
  render: () => (
    <TestimonialSlider
      heading="Loved by teams everywhere"
      testimonials={[
        {
          avatar: "https://randomuser.me/api/portraits/men/46.jpg",
          name: "Simon andrew",
          title: "Software engineer",
          quote: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.",
        },
        {
          avatar: "https://randomuser.me/api/portraits/women/65.jpg",
          name: "Maria lopez",
          title: "Marketing lead",
          quote:
            "There is no one who loves pain itself, who seeks after it and wants to have it.",
        },
      ]}
    />
  ),
}
