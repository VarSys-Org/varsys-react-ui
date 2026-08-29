import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { Rating } from "../../components/forms/rating"

const meta: Meta<typeof Rating> = {
  title: "Forms/Rating",
  component: Rating,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const ReadOnly: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <Rating value={4} />
    </div>
  ),
}

export const Fractional: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <Rating value={3.7} size="lg" />
    </div>
  ),
}

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState(3)
    return (
      <div className="flex min-h-48 flex-col items-center justify-center gap-4 bg-background p-10">
        <Rating value={value} onChange={setValue} />
        <p className="text-sm text-muted-foreground">Current: {value}</p>
      </div>
    )
  },
}

export const HalfSteps: Story = {
  render: () => {
    const [value, setValue] = useState(3.5)
    return (
      <div className="flex min-h-48 flex-col items-center justify-center gap-4 bg-background p-10">
        <Rating value={value} onChange={setValue} allowHalf />
        <p className="text-sm text-muted-foreground">Current: {value}</p>
      </div>
    )
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex min-h-48 flex-col items-center justify-center gap-4 bg-background p-10">
      <Rating value={4} size="sm" />
      <Rating value={4} size="md" />
      <Rating value={4} size="lg" />
    </div>
  ),
}