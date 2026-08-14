import type { Meta, StoryObj } from "@storybook/react"
import { FaqSearch } from "../../components/layout/faq-search"

const meta: Meta<typeof FaqSearch> = {
  title: "Layout/FaqSearch",
  component: FaqSearch,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <FaqSearch />,
}

export const CustomItems: Story = {
  render: () => (
    <FaqSearch
      title="Frequently asked questions"
      items={[
        {
          question: "How do I reset my password?",
          answer:
            "You can reset your password from the login page by clicking the forgot password link and following the instructions.",
        },
        {
          question: "Can I change my plan later?",
          answer:
            "Yes, you can upgrade or downgrade your plan at any time from the billing section of your account settings.",
        },
      ]}
    />
  ),
}
