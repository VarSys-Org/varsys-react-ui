import type { Meta, StoryObj } from "@storybook/react"
import { UsersIcon } from "lucide-react"
import { KpiCard } from "../../components/display/kpi-card"

const meta: Meta<typeof KpiCard> = {
  title: "Display/KpiCard",
  component: KpiCard,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Simple: Story = {
  args: {
    label: "Total users",
    value: "72,540",
    change: 12.5,
    hint: "The number of daily users",
  },
}

export const NegativeTrend: Story = {
  args: {
    label: "New customers",
    value: "1,234",
    change: -20,
    hint: "Acquisition needs attention",
  },
}

export const WithIcon: Story = {
  args: {
    label: "Active accounts",
    value: "45,678",
    change: 3.2,
    icon: <UsersIcon className="size-5" />,
  },
}

export const WithLink: Story = {
  args: {
    label: "Total revenue",
    value: "$1,250.00",
    change: 12.5,
    href: "#",
  },
}

export const NoChange: Story = {
  args: {
    label: "Total users",
    value: "72,540",
    hint: "The number of daily users",
  },
}
