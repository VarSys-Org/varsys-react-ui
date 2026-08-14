import type { Meta, StoryObj } from "@storybook/react"
import { StatsImage } from "../../components/display/stats-image"

const meta: Meta<typeof StatsImage> = {
  title: "Display/StatsImage",
  component: StatsImage,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <StatsImage
      stats={[
        { value: "35K", label: "Customers" },
        { value: "10K+", label: "Downloads" },
        { value: "40+", label: "Countries" },
        { value: "30M+", label: "Total revenue" },
      ]}
    />
  ),
}

export const CustomStats: Story = {
  render: () => (
    <StatsImage
      title="Metrics that move the needle"
      stats={[
        { value: "99.9%", label: "Uptime SLA" },
        { value: "250ms", label: "Median latency" },
        { value: "2M+", label: "Events / day" },
        { value: "48", label: "Integrations" },
      ]}
    />
  ),
}
