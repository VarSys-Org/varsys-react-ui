import type { Meta, StoryObj } from "@storybook/react"
import { StepsLine } from "../../components/display/steps-line"

const meta: Meta<typeof StepsLine> = {
  title: "Display/StepsLine",
  component: StepsLine,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <div className="w-full max-w-3xl">
        <StepsLine current={2} steps={["Profile", "Contact", "Identity", "Passport"]} />
      </div>
    </div>
  ),
}

export const FirstStep: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <div className="w-full max-w-3xl">
        <StepsLine current={1} steps={["Account", "Billing", "Team", "Done"]} />
      </div>
    </div>
  ),
}