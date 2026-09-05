import type { Meta, StoryObj } from "@storybook/react"
import { OnboardingTips } from "../../components/overlays/onboarding-tips"

const meta: Meta<typeof OnboardingTips> = {
  title: "Overlays/OnboardingTips",
  component: OnboardingTips,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-64 items-center justify-center bg-background p-10">
      <OnboardingTips />
    </div>
  ),
}

export const CustomTips: Story = {
  render: () => (
    <div className="flex min-h-64 items-center justify-center bg-background p-10">
      <OnboardingTips
        triggerLabel="Start the tour"
        tips={[
          {
            title: "Welcome",
            description: "Thanks for joining. Here is a quick tour of the app.",
          },
          {
            title: "Your inbox",
            description: "All your messages and notifications land here.",
          },
        ]}
      />
    </div>
  ),
}