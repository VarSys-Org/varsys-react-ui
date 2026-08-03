import type { Meta, StoryObj } from "@storybook/react"
import { Testimonial } from "../../components/display/testimonial"

const meta: Meta<typeof Testimonial> = {
  title: "Display/Testimonial",
  component: Testimonial,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <Testimonial
        quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna lorem, euismod volutpat arcu volutpat et."
        author="Martin Escobar"
        role="Founder of Meta"
        avatar="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
      />
    </div>
  ),
}

export const WithoutAvatar: Story = {
  render: () => (
    <div className="p-8">
      <Testimonial
        quote="The best component library we have ever used. It saved us weeks of work."
        author="Sarah Chen"
        role="Engineering Manager"
      />
    </div>
  ),
}
