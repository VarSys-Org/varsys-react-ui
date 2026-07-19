import type { Meta, StoryObj } from "@storybook/react"
import { PreviewCard, PreviewCardTrigger, PreviewCardContent } from "../../components/overlays/preview-card"
import { Button } from "../../components/buttons/button"

const meta: Meta<typeof PreviewCard> = {
  title: "Overlays/PreviewCard",
  component: PreviewCard,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <PreviewCard>
      <PreviewCardTrigger>
        <Button variant="link">Hover me</Button>
      </PreviewCardTrigger>
      <PreviewCardContent>
        <div className="space-y-2">
          <h4 className="font-medium">Preview Card</h4>
          <p className="text-sm text-muted-foreground">
            This is a preview card that appears on hover.
          </p>
        </div>
      </PreviewCardContent>
    </PreviewCard>
  ),
}
