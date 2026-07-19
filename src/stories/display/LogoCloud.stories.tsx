import type { Meta, StoryObj } from "@storybook/react"
import { LogoCloud } from "../../components/display/logo-cloud"

const meta: Meta<typeof LogoCloud> = {
  title: "Display/LogoCloud",
  component: LogoCloud,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "Trusted by teams worldwide",
  },
}
