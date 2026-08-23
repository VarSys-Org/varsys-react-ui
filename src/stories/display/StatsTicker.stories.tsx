import type { Meta, StoryObj } from "@storybook/react"
import { StatsTicker } from "../../components/display/stats-ticker"

const meta: Meta<typeof StatsTicker> = {
  title: "Display/StatsTicker",
  component: StatsTicker,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const items = [
  { value: 120, suffix: "+", label: "Industrial sites" },
  { value: 98.5, decimals: 1, suffix: "%", label: "Uptime SLA" },
  { value: 40, suffix: "k", label: "Live sensors" },
  { value: 12, suffix: "M+", label: "Events processed" },
]

export const Default: Story = {
  args: { items },
}

export const WithPrefix: Story = {
  args: {
    items: [
      { value: 4200, prefix: "$", label: "Avg. monthly savings" },
      { value: 3.2, prefix: "$", decimals: 1, suffix: "M", label: "Revenue driven" },
      { value: 860, suffix: "k", label: "API calls / day" },
      { value: 24, suffix: "/7", label: "Support coverage" },
    ],
  },
}

export const CustomHeading: Story = {
  args: {
    items,
    title: "Numbers that matter",
    description: "A snapshot of the platform's impact across teams.",
  },
}