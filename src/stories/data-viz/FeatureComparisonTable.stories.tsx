import type { Meta, StoryObj } from "@storybook/react"
import { FeatureComparisonTable } from "../../components/data-viz/feature-comparison-table"

const meta: Meta<typeof FeatureComparisonTable> = {
  title: "DataViz/FeatureComparisonTable",
  component: FeatureComparisonTable,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="min-h-56 bg-background p-10">
      <FeatureComparisonTable
        plans={[
          { id: "free", name: "Free", price: "$0", period: "/mo", cta: "Start" },
          { id: "pro", name: "Pro", price: "$29", period: "/mo", cta: "Upgrade", featured: true },
          { id: "ent", name: "Enterprise", price: "Custom", cta: "Contact" },
        ]}
        groups={[
          {
            title: "Analytics",
            rows: [
              { label: "Unlimited page views", values: [true, true, true] },
              { label: "Real-time dashboards", values: [false, true, true] },
              { label: "Custom metrics", values: [false, true, "Up to 20"] },
            ],
          },
          {
            title: "Collaboration",
            rows: [
              { label: "Team members", values: ["1", "10", "Unlimited"] },
              { label: "Role-based access", values: [false, true, true] },
              { label: "SSO", values: [false, false, true] },
            ],
          },
        ]}
      />
    </div>
  ),
}