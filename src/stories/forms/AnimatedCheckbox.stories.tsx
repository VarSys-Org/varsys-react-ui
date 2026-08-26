import type { Meta, StoryObj } from "@storybook/react"
import { AnimatedCheckbox } from "../../components/forms/animated-checkbox"

const meta: Meta<typeof AnimatedCheckbox> = {
  title: "Forms/AnimatedCheckbox",
  component: AnimatedCheckbox,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <AnimatedCheckbox title="Accept the terms" />
    </div>
  ),
}

export const CheckedByDefault: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <AnimatedCheckbox title="Email notifications" defaultChecked />
    </div>
  ),
}

export const WithCallback: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <AnimatedCheckbox
        title="Toggle from storybook"
        onCheckedChange={(checked) => console.log("checked:", checked)}
      />
    </div>
  ),
}