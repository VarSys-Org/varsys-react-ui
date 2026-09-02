import type { Meta, StoryObj } from "@storybook/react"
import { Stack, StackItem } from "../../components/layout/stack"

const meta: Meta<typeof Stack> = {
  title: "Layout/Stack",
  component: Stack,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex h-[420px] items-center justify-center px-8">
      <Stack className="w-full max-w-sm">
        <StackItem className="h-40">Front card</StackItem>
        <StackItem className="h-40">Middle card</StackItem>
        <StackItem className="h-40">Back card</StackItem>
      </Stack>
    </div>
  ),
}

export const ExpandOnHover: Story = {
  render: () => (
    <div className="flex h-[420px] items-center justify-center px-8">
      <Stack className="w-full max-w-sm" expandOnHover>
        <StackItem className="h-40">Front card</StackItem>
        <StackItem className="h-40">Middle card</StackItem>
        <StackItem className="h-40">Back card</StackItem>
        <StackItem className="h-40">Fourth card</StackItem>
      </Stack>
    </div>
  ),
}

export const Expanded: Story = {
  render: () => (
    <div className="flex h-[520px] items-center justify-center px-8">
      <Stack className="w-full max-w-sm" expandedItemCount={4}>
        <StackItem className="h-40">Card one</StackItem>
        <StackItem className="h-40">Card two</StackItem>
        <StackItem className="h-40">Card three</StackItem>
        <StackItem className="h-40">Card four</StackItem>
      </Stack>
    </div>
  ),
}

export const StackTop: Story = {
  render: () => (
    <div className="flex h-[420px] items-center justify-center px-8">
      <Stack className="w-full max-w-sm" side="top">
        <StackItem className="h-40">Front card</StackItem>
        <StackItem className="h-40">Middle card</StackItem>
        <StackItem className="h-40">Back card</StackItem>
      </Stack>
    </div>
  ),
}