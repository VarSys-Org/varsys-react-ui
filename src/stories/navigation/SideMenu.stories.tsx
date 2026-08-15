import type { Meta, StoryObj } from "@storybook/react"
import {
  LayoutGrid,
  Users,
  CreditCard,
  FileText,
  Settings,
  LogOut,
  Home,
  Shield,
} from "lucide-react"
import { SideMenu } from "../../components/navigation/side-menu"

const meta: Meta<typeof SideMenu> = {
  title: "Navigation/SideMenu",
  component: SideMenu,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const groups = [
  {
    label: "General",
    icon: LayoutGrid,
    items: [
      { label: "Overview", icon: Home, active: true },
      { label: "Settings", icon: Settings },
      { label: "Billing", icon: CreditCard },
    ],
  },
  {
    label: "Teams",
    icon: Users,
    defaultOpen: true,
    items: [
      { label: "Banned Users", icon: Shield },
      { label: "Calendar", icon: FileText },
    ],
  },
]

const user = {
  name: "Eric Frusciante",
  email: "eric@frusciante.com",
}

export const Expanded: Story = {
  render: () => (
    <div className="flex h-[480px] justify-center rounded-lg border border-border p-4">
      <SideMenu groups={groups} user={user} className="rounded-lg" />
    </div>
  ),
}

export const IconRail: Story = {
  render: () => (
    <div className="flex h-[480px] justify-center rounded-lg border border-border p-4">
      <SideMenu
        groups={groups}
        user={user}
        variant="icon"
        className="rounded-lg"
      />
    </div>
  ),
}

export const WithItems: Story = {
  render: () => (
    <div className="flex h-[480px] justify-center rounded-lg border border-border p-4">
      <SideMenu
        items={[
          { label: "General", icon: Home, active: true },
          { label: "Billing", icon: CreditCard },
          { label: "Invoices", icon: FileText },
          { label: "Logout", icon: LogOut },
        ]}
        user={user}
        className="rounded-lg"
      />
    </div>
  ),
}
