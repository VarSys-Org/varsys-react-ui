import type { Meta, StoryObj } from "@storybook/react"
import { SkipLink } from "../../components/navigation/skip-link"

const meta: Meta<typeof SkipLink> = {
  title: "Navigation/SkipLink",
  component: SkipLink,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="relative h-48 p-8">
      <SkipLink />
      <p className="text-sm text-muted-foreground">
        Focus the link by tabbing or clicking it — it slides into view.
      </p>
    </div>
  ),
}

export const Multi: Story = {
  render: () => (
    <div className="relative h-48 p-8">
      <SkipLink variant="multi" />
      <p className="text-sm text-muted-foreground">
        Multi skip-link nav with sections.
      </p>
    </div>
  ),
}
