import type { Meta, StoryObj } from "@storybook/react"
import { ContactSection } from "../../components/layout/contact-section"

const meta: Meta<typeof ContactSection> = {
  title: "Layout/ContactSection",
  component: ContactSection,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <ContactSection />
    </div>
  ),
}
