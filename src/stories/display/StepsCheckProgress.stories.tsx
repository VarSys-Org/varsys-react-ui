import type { Meta, StoryObj } from "@storybook/react"
import { User, MapPin, CreditCard } from "lucide-react"
import { StepsCheckProgress } from "../../components/display/steps-check-progress"

const meta: Meta<typeof StepsCheckProgress> = {
  title: "Display/StepsCheckProgress",
  component: StepsCheckProgress,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <div className="w-full max-w-2xl">
        <StepsCheckProgress
          current={1}
          steps={[
            { label: "Details", icon: User },
            { label: "Address", icon: MapPin },
            { label: "Payment", icon: CreditCard },
          ]}
        />
      </div>
    </div>
  ),
}

export const WithoutIcons: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <div className="w-full max-w-2xl">
        <StepsCheckProgress
          current={2}
          steps={[{ label: "Basics" }, { label: "Style" }, { label: "Publish" }, { label: "Share" }]}
        />
      </div>
    </div>
  ),
}