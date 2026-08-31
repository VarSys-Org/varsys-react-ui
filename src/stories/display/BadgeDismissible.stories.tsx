import type { Meta, StoryObj } from "@storybook/react"
import { Euro } from "lucide-react"
import { BadgeDismissible } from "../../components/display/badge-dismissible"

const meta: Meta<typeof BadgeDismissible> = {
  title: "Display/BadgeDismissible",
  component: BadgeDismissible,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Soft: Story = {
  render: () => (
    <div className="flex min-h-56 flex-wrap items-center justify-center gap-3 bg-background p-10">
      <BadgeDismissible tone="primary">Primary</BadgeDismissible>
      <BadgeDismissible tone="success">Success</BadgeDismissible>
      <BadgeDismissible tone="warning">Warning</BadgeDismissible>
      <BadgeDismissible tone="error">Error</BadgeDismissible>
      <BadgeDismissible tone="neutral">Neutral</BadgeDismissible>
    </div>
  ),
}

export const Outline: Story = {
  render: () => (
    <div className="flex min-h-56 flex-wrap items-center justify-center gap-3 bg-background p-10">
      <BadgeDismissible variant="outline" tone="primary">
        Primary
      </BadgeDismissible>
      <BadgeDismissible variant="outline" tone="error">
        Failed
      </BadgeDismissible>
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <BadgeDismissible icon={Euro} tone="success" onDismiss={() => {}}>
        EUR
      </BadgeDismissible>
    </div>
  ),
}