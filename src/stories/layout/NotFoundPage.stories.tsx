import type { Meta, StoryObj } from "@storybook/react"
import { NotFoundPage } from "../../components/layout/not-found-page"

const meta: Meta<typeof NotFoundPage> = {
  title: "Layout/NotFoundPage",
  component: NotFoundPage,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Centered: Story = {
  render: () => <NotFoundPage variant="centered" />,
}

export const Image: Story = {
  render: () => <NotFoundPage variant="image" />,
}

export const Logo: Story = {
  render: () => <NotFoundPage variant="logo" />,
}
