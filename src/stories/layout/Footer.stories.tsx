import type { Meta, StoryObj } from "@storybook/react"
import { Footer } from "../../components/layout/footer"

const meta: Meta<typeof Footer> = {
  title: "Layout/Footer",
  component: Footer,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <Footer />
    </div>
  ),
}
