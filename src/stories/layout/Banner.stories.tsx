import type { Meta, StoryObj } from "@storybook/react"
import { Bell, Rocket } from "lucide-react"
import { Banner } from "../../components/layout/banner"

const meta: Meta<typeof Banner> = {
  title: "Layout/Banner",
  component: Banner,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <Banner
        message="We just launched a new version of our library!"
        action={{ label: "Learn more", href: "#" }}
      />
    </div>
  ),
}

export const Primary: Story = {
  render: () => (
    <div className="p-8">
      <Banner
        variant="primary"
        startIcon={<Bell className="size-4" />}
        message="New security update available."
        action={{ label: "Update now", href: "#" }}
      />
    </div>
  ),
}

export const Success: Story = {
  render: () => (
    <div className="p-8">
      <Banner
        variant="success"
        startIcon={<Rocket className="size-4" />}
        message="Your deployment completed successfully."
        action={{ label: "View dashboard", href: "#" }}
      />
    </div>
  ),
}

export const Warning: Story = {
  render: () => (
    <div className="p-8">
      <Banner
        variant="warning"
        message="Your subscription renews in 3 days."
        action={{ label: "Renew now", href: "#" }}
      />
    </div>
  ),
}

export const Danger: Story = {
  render: () => (
    <div className="p-8">
      <Banner
        variant="danger"
        message="We couldn't process your last payment."
        action={{ label: "Review", href: "#" }}
      />
    </div>
  ),
}

export const NotDismissible: Story = {
  render: () => (
    <div className="p-8">
      <Banner
        dismissible={false}
        message="Pinned announcement that cannot be dismissed."
      />
    </div>
  ),
}