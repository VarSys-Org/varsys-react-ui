import type { Meta, StoryObj } from "@storybook/react"
import { Mail } from "lucide-react"

import { AnimatedInput } from "../../components/forms/animated-input"

const meta: Meta<typeof AnimatedInput> = {
  title: "Forms/AnimatedInput",
  component: AnimatedInput,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { label: "Email address" },
}

export const Filled: Story = {
  args: { label: "Email address", defaultValue: "ada@example.com" },
}

export const WithIcon: Story = {
  render: () => (
    <div className="relative w-72 p-8">
      <Mail
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-4 z-10 size-4 -translate-y-1/2 text-muted-foreground"
      />
      <AnimatedInput label="Work email" className="[&_input]:pl-10" />
    </div>
  ),
}

export const Types: Story = {
  render: () => (
    <div className="grid w-72 gap-6 p-8">
      <AnimatedInput label="Full name" />
      <AnimatedInput label="Email address" type="email" />
      <AnimatedInput label="Password" type="password" />
    </div>
  ),
}