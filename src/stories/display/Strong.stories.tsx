import type { Meta, StoryObj } from "@storybook/react"
import { Strong } from "../../components/display/strong"

const meta: Meta<typeof Strong> = {
  title: "Display/Strong",
  component: Strong,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <p className="max-w-md text-foreground">
        This is a <Strong>very important</Strong> message with{" "}
        <Strong weight="semibold">semibold</Strong> and{" "}
        <Strong weight="extrabold">extrabold</Strong> emphasis.
      </p>
    </div>
  ),
}

export const Weights: Story = {
  render: () => (
    <div className="flex min-h-56 flex-col items-center justify-center gap-4 bg-background p-10">
      <p className="text-foreground">
        <Strong weight="semibold">Semibold</Strong>
      </p>
      <p className="text-foreground">
        <Strong>Bold</Strong>
      </p>
      <p className="text-foreground">
        <Strong weight="extrabold">Extrabold</Strong>
      </p>
    </div>
  ),
}