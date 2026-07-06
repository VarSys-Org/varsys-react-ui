import type { Meta, StoryObj } from "@storybook/react"
import { Spinner } from "../../components/display/spinner"

const meta: Meta<typeof Spinner> = {
  title: "Display/Spinner",
  component: Spinner,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
