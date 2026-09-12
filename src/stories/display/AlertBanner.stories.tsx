import type { Meta, StoryObj } from "@storybook/react"
import { AlertBanner } from "../../components/display/alert-banner"

const meta: Meta<typeof AlertBanner> = {
  title: "Display/AlertBanner",
  component: AlertBanner,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <AlertBanner
        description="New sales from the last subscribers - 20K USD in revenue."
        action={{ label: "Details", href: "#" }}
        dismissible
      />
    </div>
  ),
}

export const Success: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <AlertBanner
        variant="success"
        title="Success"
        description="Team member has been added successfully."
        dismissible
      />
    </div>
  ),
}

export const Warning: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <AlertBanner
        variant="warning"
        title="Warning"
        description="Manage your team members permissions from your dashboard."
        appearance="linear"
      />
    </div>
  ),
}

export const Danger: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <AlertBanner
        variant="danger"
        title="Error"
        description="Sorry something wrong happened, please enter a correct email."
        appearance="bordered"
        dismissible
      />
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 bg-background p-10">
      <AlertBanner
        variant="info"
        description="This is an informational update for your attention."
      />
      <AlertBanner
        variant="success"
        description="Your changes have been saved successfully."
      />
      <AlertBanner
        variant="warning"
        description="Your storage is almost full, consider cleaning up."
      />
      <AlertBanner
        variant="danger"
        description="Unable to connect to the server, try again later."
      />
    </div>
  ),
}