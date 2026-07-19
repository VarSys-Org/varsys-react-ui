import type { Meta, StoryObj } from "@storybook/react"
import { FAQ } from "../../components/layout/faq"

const faqItems = [
  {
    question: "How do I get started?",
    answer: "Sign up for a free account and follow our quick start guide to set up your first project.",
  },
  {
    question: "What are the pricing plans?",
    answer: "We offer flexible plans starting from free, with premium features available on our Pro and Enterprise tiers.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, you can cancel your subscription at any time. No questions asked.",
  },
]

const meta: Meta<typeof FAQ> = {
  title: "Layout/FAQ",
  component: FAQ,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "Frequently asked questions",
    description: "Everything you need to know about our platform.",
    items: faqItems,
  },
}
