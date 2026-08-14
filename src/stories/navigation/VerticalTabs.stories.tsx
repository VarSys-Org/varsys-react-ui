import type { Meta, StoryObj } from "@storybook/react"
import { VerticalTabs } from "../../components/navigation/vertical-tabs"

const tabs = [
  { value: "Overview" },
  { value: "Integration" },
  { value: "Billing" },
  { value: "Transactions" },
  { value: "Plans" },
]

const meta: Meta<typeof VerticalTabs> = {
  title: "Navigation/VerticalTabs",
  component: VerticalTabs,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Bordered: Story = {
  render: () => (
    <div className="flex justify-center p-8">
      <VerticalTabs tabs={tabs} />
    </div>
  ),
}

export const Soft: Story = {
  render: () => (
    <div className="flex justify-center p-8">
      <VerticalTabs tabs={tabs} variant="soft" />
    </div>
  ),
}

export const WithContent: Story = {
  render: () => (
    <div className="flex justify-center p-8">
      <VerticalTabs
        tabs={[
          { value: "Profile" },
          { value: "Settings" },
          { value: "Security" },
        ]}
        defaultValue="Settings"
      />
    </div>
  ),
}
