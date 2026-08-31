import type { Meta, StoryObj } from "@storybook/react"
import { Em } from "../../components/display/em"

const meta: Meta<typeof Em> = {
  title: "Display/Em",
  component: Em,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <p className="max-w-md text-foreground">
        I have a dream of a scene between the green <Em>hills</Em> and the{" "}
        <Em className="text-primary">blue</Em> water.
      </p>
    </div>
  ),
}