import type { Meta, StoryObj } from "@storybook/react"
import { CurvedInput } from "../../components/forms/curved-input"

const meta: Meta<typeof CurvedInput> = {
  title: "Forms/CurvedInput",
  component: CurvedInput,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <CurvedInput width={420} theme="dark" />
    </div>
  ),
}

export const Light: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <CurvedInput width={420} theme="light" placeholder="Your work email" buttonText="Join" />
    </div>
  ),
}

export const GentleBend: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <CurvedInput
        width={460}
        bend={12}
        cornerRadius={24}
        theme="dark"
        placeholder="Almost straight"
      />
    </div>
  ),
}

export const NoButton: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <CurvedInput width={380} showButton={false} theme="dark" placeholder="No button" />
    </div>
  ),
}