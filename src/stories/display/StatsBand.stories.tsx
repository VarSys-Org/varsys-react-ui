import type { Meta, StoryObj } from "@storybook/react"
import { StatsBand } from "../../components/display/stats-band"

const meta: Meta<typeof StatsBand> = {
  title: "Display/StatsBand",
  component: StatsBand,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <StatsBand
        items={[
          { value: "35K", label: "Customers" },
          { value: "10K+", label: "Downloads" },
          { value: "40+", label: "Countries" },
          { value: "30M+", label: "Total revenue" },
        ]}
      />
    </div>
  ),
}
