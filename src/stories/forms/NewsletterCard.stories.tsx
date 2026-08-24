import type { Meta, StoryObj } from "@storybook/react"
import { NewsletterCard } from "../../components/forms/newsletter-card"

const meta: Meta<typeof NewsletterCard> = {
  title: "Forms/NewsletterCard",
  component: NewsletterCard,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="grid place-items-center bg-background p-10">
      <div className="w-full max-w-md">
        <NewsletterCard
          footnote="No spam, unsubscribe at any time."
        />
      </div>
    </div>
  ),
}

export const NoIcon: Story = {
  render: () => (
    <div className="grid place-items-center bg-background p-10">
      <div className="w-full max-w-md">
        <NewsletterCard
          showIcon={false}
          title="Stay in the loop"
          description="Product updates and roadmap news, monthly."
          buttonLabel="Sign me up"
        />
      </div>
    </div>
  ),
}
