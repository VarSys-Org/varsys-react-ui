import type { Meta, StoryObj } from "@storybook/react"
import { Text } from "../../components/display/text"

const meta: Meta<typeof Text> = {
  title: "Display/Text",
  component: Text,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-md p-8">
      <Text>
        The quick brown fox jumps over the lazy dog. This is a paragraph of
        body text rendered with the Text component.
      </Text>
    </div>
  ),
}

export const Tags: Story = {
  render: () => (
    <div className="mx-auto flex w-full max-w-md flex-col gap-4 p-8">
      <Text as="p">As a paragraph.</Text>
      <Text as="span">As a span.</Text>
      <Text as="label">As a label.</Text>
      <Text as="div">As a div.</Text>
    </div>
  ),
}

export const Custom: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-md p-8">
      <Text className="text-muted-foreground">
        Muted secondary text.
      </Text>
    </div>
  ),
}
