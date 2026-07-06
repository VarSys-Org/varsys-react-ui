import type { Meta, StoryObj } from "@storybook/react"
import { Alert, AlertTitle, AlertDescription, AlertAction } from "../../components/display/alert"
import { Button } from "../../components/buttons/button"
import { InfoIcon, AlertCircleIcon, CheckCircle2Icon } from "lucide-react"

const meta: Meta<typeof Alert> = {
  title: "Display/Alert",
  component: Alert,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Alert>
      <InfoIcon />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the CLI.</AlertDescription>
    </Alert>
  ),
}

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive">
      <AlertCircleIcon />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
    </Alert>
  ),
}

export const Success: Story = {
  render: () => (
    <Alert>
      <CheckCircle2Icon />
      <AlertTitle>Payment successful</AlertTitle>
      <AlertDescription>Your payment has been processed. A receipt has been sent to your email.</AlertDescription>
    </Alert>
  ),
}

export const WithAction: Story = {
  render: () => (
    <Alert>
      <InfoIcon />
      <AlertTitle>New feature available</AlertTitle>
      <AlertDescription>Dark mode is now available under your profile settings.</AlertDescription>
      <AlertAction>
        <Button variant="outline" size="sm">Enable</Button>
      </AlertAction>
    </Alert>
  ),
}
