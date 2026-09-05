import type { Meta, StoryObj } from "@storybook/react"
import { SettingsAccordion } from "../../components/display/settings-accordion"

const meta: Meta<typeof SettingsAccordion> = {
  title: "Display/SettingsAccordion",
  component: SettingsAccordion,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const items = [
  {
    id: "connected-accounts",
    title: "Connected accounts",
    sub: "Manage your linked social and work accounts",
    content:
      "Connect your accounts from Google, GitHub, or Microsoft to enable single sign-on and streamline your workflow. Connected accounts can be used for quick login and importing your preferences across platforms. You can revoke access to any connected account at any time.",
  },
  {
    id: "notifications",
    title: "Notifications",
    sub: "Customize your notification preferences",
    content:
      "Choose which updates you want to receive. You can get notifications for: security alerts, billing updates, newsletter and product announcements, usage reports, and scheduled maintenance. Notifications can be delivered via email, SMS, or push notifications on your devices.",
  },
  {
    id: "verification",
    title: "2-step verification",
    sub: "Add an extra layer of security to your account",
    content:
      "Protect your account with two-factor authentication. You can use authenticator apps like Google Authenticator or Authy, receive SMS codes, or use security keys like YubiKey. We recommend using an authenticator app for the most secure experience.",
  },
]

export const Default: Story = {
  render: () => (
    <div className="flex min-h-64 items-center justify-center bg-background p-10">
      <SettingsAccordion className="max-w-xl" items={items} />
    </div>
  ),
}