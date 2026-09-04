import type { Meta, StoryObj } from "@storybook/react"
import {
  SegmentedInput,
  SegmentedInputItem,
} from "../../components/forms/segmented-input"

const meta: Meta<typeof SegmentedInput> = {
  title: "Forms/SegmentedInput",
  component: SegmentedInput,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <SegmentedInput>
        <SegmentedInputItem placeholder="Search" />
        <SegmentedInputItem placeholder="Replace" />
      </SegmentedInput>
    </div>
  ),
}

export const ThreeSegments: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <SegmentedInput size="lg">
        <SegmentedInputItem placeholder="Domain" />
        <SegmentedInputItem placeholder="Subdomain" />
        <SegmentedInputItem placeholder="Port" />
      </SegmentedInput>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <SegmentedInput>
        <SegmentedInputItem placeholder="Search" className="ps-8" />
        <SegmentedInputItem placeholder="Email" className="ps-8" />
        <SegmentedInputItem placeholder="Username" className="ps-8" />
      </SegmentedInput>
    </div>
  ),
}

export const Small: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <SegmentedInput size="sm">
        <SegmentedInputItem placeholder="Year" />
        <SegmentedInputItem placeholder="Month" />
        <SegmentedInputItem placeholder="Day" />
      </SegmentedInput>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <SegmentedInput disabled>
        <SegmentedInputItem placeholder="Locked" />
        <SegmentedInputItem placeholder="Locked" />
      </SegmentedInput>
    </div>
  ),
}