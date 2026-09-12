import type { Meta, StoryObj } from "@storybook/react"
import { ChevronSteps } from "../../components/navigation/chevron-steps"

const meta: Meta<typeof ChevronSteps> = {
  title: "Navigation/ChevronSteps",
  component: ChevronSteps,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const steps = [
  { label: "Profile" },
  { label: "Contact" },
  { label: "Identity" },
  { label: "Passport" },
]

export const Default: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <ChevronSteps steps={steps} currentStep={2} />
    </div>
  ),
}

export const WithDescriptions: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <ChevronSteps
        currentStep={1}
        steps={[
          { label: "Account", description: "Create your account" },
          { label: "Billing", description: "Add payment details" },
          { label: "Confirm", description: "Review and confirm" },
        ]}
      />
    </div>
  ),
}

export const Clickable: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <ChevronSteps steps={steps} defaultValue={1} clickable />
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="flex min-h-64 items-center justify-center bg-background p-10">
      <ChevronSteps steps={steps} currentStep={3} direction="vertical" />
    </div>
  ),
}