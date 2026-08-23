import type { Meta, StoryObj } from "@storybook/react"
import { Link2 } from "lucide-react"
import { FaqDashed } from "../../components/layout/faq-dashed"

const meta: Meta<typeof FaqDashed> = {
  title: "Layout/FaqDashed",
  component: FaqDashed,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const items = [
  {
    question: "Is there a free plan?",
    answer:
      "Yes. The Starter plan is free forever for up to 3 projects and includes core analytics.",
  },
  {
    question: "Can I switch plans at any time?",
    answer:
      "Absolutely. Upgrade or downgrade whenever you like — changes are prorated automatically.",
  },
  {
    question: "Do you offer custom domains?",
    answer:
      "Custom domains are available on the Pro and Enterprise plans and can be configured in minutes.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and bank transfers for annual billing.",
  },
]

export const Default: Story = {
  args: { items },
}

export const WithAction: Story = {
  args: {
    items,
    helperText: "Still have questions?",
    helperAction: (
      <a
        href="#"
        className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
      >
        <Link2 className="size-3.5" />
        Contact support
      </a>
    ),
  },
}

export const CustomHeading: Story = {
  args: {
    items,
    title: "Common questions",
    description: "Answers to the questions we get asked the most.",
  },
}