import type { Meta, StoryObj } from "@storybook/react"
import { Flex } from "../../components/layout/flex"

const meta: Meta<typeof Flex> = {
  title: "Layout/Flex",
  component: Flex,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

function Chip({ label }: { label: string }) {
  return (
    <div className="rounded-md bg-muted px-3 py-2 text-sm font-medium text-foreground">
      {label}
    </div>
  )
}

export const Between: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-xl p-8">
      <Flex justifyContent="between" className="gap-3">
        <Chip label="Left" />
        <Chip label="Right" />
      </Flex>
    </div>
  ),
}

export const Center: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-xl p-8">
      <Flex justifyContent="center" className="gap-3">
        <Chip label="A" />
        <Chip label="B" />
        <Chip label="C" />
      </Flex>
    </div>
  ),
}

export const Column: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-sm p-8">
      <Flex flexDirection="col" justifyContent="start" alignItems="stretch" className="gap-3">
        <Chip label="One" />
        <Chip label="Two" />
        <Chip label="Three" />
      </Flex>
    </div>
  ),
}

export const Evenly: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-2xl p-8">
      <Flex justifyContent="evenly" className="gap-2">
        <Chip label="1" />
        <Chip label="2" />
        <Chip label="3" />
        <Chip label="4" />
      </Flex>
    </div>
  ),
}
