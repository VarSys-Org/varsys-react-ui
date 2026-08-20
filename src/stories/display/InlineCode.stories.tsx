import type { Meta, StoryObj } from "@storybook/react"
import { InlineCode } from "../../components/display/inline-code"

const meta: Meta<typeof InlineCode> = {
  title: "Display/InlineCode",
  component: InlineCode,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="space-y-4 p-8">
      <p>
        Run <InlineCode>npm install @varsys/ui</InlineCode> to get started.
      </p>
      <p>
        Use <InlineCode>cn()</InlineCode> to merge class names.
      </p>
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4 p-8">
      <InlineCode>default</InlineCode>
      <InlineCode variant="outline">outline</InlineCode>
      <InlineCode variant="ghost">ghost</InlineCode>
    </div>
  ),
}

export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4 p-8">
      <InlineCode color="primary">primary</InlineCode>
      <InlineCode color="destructive">destructive</InlineCode>
      <InlineCode color="success">success</InlineCode>
      <InlineCode color="warning">warning</InlineCode>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4 p-8">
      <InlineCode size="xs">xs</InlineCode>
      <InlineCode size="sm">sm</InlineCode>
      <InlineCode size="lg">lg</InlineCode>
    </div>
  ),
}