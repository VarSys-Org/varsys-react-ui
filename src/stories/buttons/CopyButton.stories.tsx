import type { Meta, StoryObj } from "@storybook/react"
import { CopyButton } from "../../components/buttons/copy-button"

const meta: Meta<typeof CopyButton> = {
  title: "Buttons/CopyButton",
  component: CopyButton,
  tags: ["autodocs"],
  args: { value: "https://example.com" },
}
export default meta
type Story = StoryObj<typeof meta>

export const Icon: Story = {
  render: (args) => <CopyButton {...args} />,
}

export const WithLabel: Story = {
  render: (args) => <CopyButton {...args} label="Copy link" />,
}

export const Variants: Story = {
  render: (args) => (
    <div className="flex items-center gap-4 p-8">
      <CopyButton {...args} variant="outline" />
      <CopyButton {...args} variant="ghost" />
      <CopyButton {...args} variant="secondary" />
      <CopyButton {...args} variant="default" />
    </div>
  ),
}
