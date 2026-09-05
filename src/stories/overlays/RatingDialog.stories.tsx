import type { Meta, StoryObj } from "@storybook/react"
import { RatingDialog } from "../../components/overlays/rating-dialog"

const meta: Meta<typeof RatingDialog> = {
  title: "Overlays/RatingDialog",
  component: RatingDialog,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-64 items-center justify-center bg-background p-10">
      <RatingDialog />
    </div>
  ),
}

export const ShortScale: Story = {
  render: () => (
    <div className="flex min-h-64 items-center justify-center bg-background p-10">
      <RatingDialog
        question="How satisfied are you with the onboarding experience?"
        ratingCount={5}
        ratingLabels={["Very satisfied", "Very dissatisfied"]}
        triggerLabel="Leave a rating"
      />
    </div>
  ),
}