import { Settings, Users, CreditCard, FileText, User } from "lucide-react"
import type { Meta, StoryObj } from "@storybook/react"
import { VerticalMenu } from "../../components/navigation/vertical-menu"

const meta: Meta<typeof VerticalMenu> = {
  title: "Navigation/VerticalMenu",
  component: VerticalMenu,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const iconClass = "size-5"

export const Base: Story = {
  render: () => (
    <div className="p-8">
      <div className="w-60">
        <VerticalMenu
          items={[
            { label: "General", href: "#", active: true },
            { label: "Teams", href: "#" },
            { label: "Billing", href: "#" },
            { label: "Invoices", href: "#" },
            { label: "Account", href: "#" },
          ]}
        />
      </div>
    </div>
  ),
}

export const WithBadges: Story = {
  render: () => (
    <div className="p-8">
      <div className="w-60">
        <VerticalMenu
          items={[
            { label: "General", href: "#", active: true },
            { label: "Teams", href: "#", badge: 5 },
            { label: "Billing", href: "#" },
            { label: "Invoices", href: "#", badge: 3 },
            { label: "Account", href: "#" },
          ]}
        />
      </div>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div className="p-8">
      <div className="w-60">
        <VerticalMenu
          items={[
            {
              label: "General",
              href: "#",
              active: true,
              icon: <Settings className={iconClass} />,
            },
            {
              label: "Teams",
              href: "#",
              icon: <Users className={iconClass} />,
            },
            {
              label: "Billing",
              href: "#",
              icon: <CreditCard className={iconClass} />,
            },
            {
              label: "Invoices",
              href: "#",
              icon: <FileText className={iconClass} />,
            },
            {
              label: "Account",
              href: "#",
              icon: <User className={iconClass} />,
            },
          ]}
        />
      </div>
    </div>
  ),
}

export const BorderLeft: Story = {
  render: () => (
    <div className="p-8">
      <div className="w-64">
        <VerticalMenu
          borderLeft
          items={[
            {
              label: "General",
              href: "#",
              active: true,
              icon: <Settings className={iconClass} />,
            },
            {
              label: "Teams",
              href: "#",
              icon: <Users className={iconClass} />,
            },
            {
              label: "Billing",
              href: "#",
              icon: <CreditCard className={iconClass} />,
            },
          ]}
        />
      </div>
    </div>
  ),
}

export const Accordion: Story = {
  render: () => (
    <div className="p-8">
      <div className="w-60">
        <VerticalMenu
          items={[
            { label: "General", href: "#", active: true },
            {
              label: "Teams",
              children: [
                { label: "Banned Users", href: "#" },
                { label: "Calendar", href: "#" },
              ],
            },
            { label: "Billing", href: "#" },
            { label: "Invoices", href: "#" },
            {
              label: "Account",
              children: [
                { label: "Details", href: "#" },
                { label: "Security", href: "#" },
              ],
            },
          ]}
        />
      </div>
    </div>
  ),
}
