import type { Meta, StoryObj } from "@storybook/react"
import { NewsletterGradient } from "../../components/layout/newsletter-gradient"

const meta: Meta<typeof NewsletterGradient> = {
  title: "Layout/NewsletterGradient",
  component: NewsletterGradient,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <NewsletterGradient />,
}

export const CustomCopy: Story = {
  render: () => (
    <NewsletterGradient
      title="Subscribe to stay in the loop."
      placeholder="you@company.com"
      subscribeLabel="Sign me up"
    />
  ),
}
