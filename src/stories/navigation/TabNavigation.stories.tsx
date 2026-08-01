import type { Meta, StoryObj } from "@storybook/react"
import { TabNavigation } from "../../components/navigation/tab-navigation"

const meta: Meta<typeof TabNavigation> = {
  title: "Navigation/TabNavigation",
  component: TabNavigation,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const overviewItems = [
  { label: "Overview", value: "overview" },
  { label: "Reports", value: "reports" },
  { label: "Forecast", value: "forecast" },
  { label: "Settings", value: "settings" },
]

export const Default: Story = {
  render: () => (
    <div className="flex h-32 items-start justify-center pt-10">
      <div className="w-full max-w-lg px-4">
        <TabNavigation items={overviewItems} defaultValue="overview" />
      </div>
    </div>
  ),
}

export const WithDisabled: Story = {
  render: () => (
    <div className="flex h-32 items-start justify-center pt-10">
      <div className="w-full max-w-lg px-4">
        <TabNavigation
          items={[
            { label: "Overview", value: "overview" },
            { label: "Reports", value: "reports", disabled: true },
            { label: "Forecast", value: "forecast" },
          ]}
          defaultValue="overview"
        />
      </div>
    </div>
  ),
}

export const WithLinks: Story = {
  render: () => (
    <div className="flex h-32 items-start justify-center pt-10">
      <div className="w-full max-w-lg px-4">
        <TabNavigation
          items={[
            { label: "Overview", value: "overview", href: "#overview" },
            { label: "Reports", value: "reports", href: "#reports" },
            { label: "Forecast", value: "forecast", href: "#forecast" },
          ]}
          defaultValue="overview"
        />
      </div>
    </div>
  ),
}
