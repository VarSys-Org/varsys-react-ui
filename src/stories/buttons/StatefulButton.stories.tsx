import type { Meta, StoryObj } from "@storybook/react"
import { StatefulButton } from "../../components/buttons/stateful-button"

const meta: Meta<typeof StatefulButton> = {
  title: "Buttons/StatefulButton",
  component: StatefulButton,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Click me",
  },
}
