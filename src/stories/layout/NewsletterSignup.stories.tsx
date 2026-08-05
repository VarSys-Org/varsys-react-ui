import type { Meta, StoryObj } from "@storybook/react"
import { NewsletterSignup } from "../../components/layout/newsletter-signup"

const meta: Meta<typeof NewsletterSignup> = {
  title: "Layout/NewsletterSignup",
  component: NewsletterSignup,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: () => <NewsletterSignup variant="primary" />,
}

export const Banner: Story = {
  render: () => <NewsletterSignup variant="banner" />,
}

export const Gradient: Story = {
  render: () => <NewsletterSignup variant="gradient" />,
}
