import type { Meta, StoryObj } from "@storybook/react"
import { Bell, Home, Settings, User } from "lucide-react"
import { TabNav } from "../../components/navigation/tab-nav"

const meta: Meta<typeof TabNav> = {
  title: "Navigation/TabNav",
  component: TabNav,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const items = [
  { value: "overview", label: "Overview" },
  { value: "analytics", label: "Analytics", badge: 12 },
  { value: "reports", label: "Reports" },
  { value: "settings", label: "Settings" },
]

export const Default: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <TabNav items={items} defaultValue="analytics" />
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <TabNav
        items={[
          { value: "home", label: "Home", icon: <Home className="size-4" /> },
          { value: "profile", label: "Profile", icon: <User className="size-4" /> },
          { value: "notifications", label: "Alerts", icon: <Bell className="size-4" />, badge: 3 },
          { value: "settings", label: "Settings", icon: <Settings className="size-4" /> },
        ]}
      />
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <TabNav
        items={[
          { value: "active", label: "Active" },
          { value: "disabled", label: "Disabled", disabled: true },
          { value: "coming", label: "Coming soon", disabled: true },
        ]}
      />
    </div>
  ),
}
