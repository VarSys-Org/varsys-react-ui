import type { Meta, StoryObj } from "@storybook/react"
import { ComicText } from "../../components/text-effects/comic-text"

const meta: Meta<typeof ComicText> = {
  title: "TextEffects/ComicText",
  component: ComicText,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <ComicText>Hello World</ComicText>,
}

export const Small: Story = {
  render: () => <ComicText fontSize={2}>Small Text</ComicText>,
}

export const Large: Story = {
  render: () => <ComicText fontSize={8}>Large</ComicText>,
}
