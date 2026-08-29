import type { Meta, StoryObj } from "@storybook/react"
import { LabelInput } from "../../components/forms/label-input"

const meta: Meta<typeof LabelInput> = {
  title: "Forms/LabelInput",
  component: LabelInput,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <div className="w-full max-w-sm">
        <LabelInput label="Email address" placeholder="you@example.com" />
      </div>
    </div>
  ),
}

export const Password: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <div className="w-full max-w-sm">
        <LabelInput label="Password" type="password" placeholder="••••••••" />
      </div>
    </div>
  ),
}

export const ColoredRing: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <LabelInput label="Primary ring" ringColor="primary" placeholder="Focus me" />
        <LabelInput label="Green ring" ringColor="green" placeholder="Focus me" />
        <LabelInput label="Red ring" ringColor="red" placeholder="Focus me" />
      </div>
    </div>
  ),
}

export const WithDefaultValue: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <div className="w-full max-w-sm">
        <LabelInput label="Project name" defaultValue="Acme Dashboard" />
      </div>
    </div>
  ),
}