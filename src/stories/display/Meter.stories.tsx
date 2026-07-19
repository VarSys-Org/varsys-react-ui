import type { Meta, StoryObj } from "@storybook/react"
import { Meter, MeterLabel, MeterValue } from "../../components/display/meter"

const meta: Meta<typeof Meter> = {
  title: "Display/Meter",
  component: Meter,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Meter value={65} max={100} />,
}

export const WithLabel: Story = {
  render: () => (
    <div className="w-full space-y-2">
      <div className="flex items-center justify-between">
        <MeterLabel>Storage</MeterLabel>
        <MeterValue>65%</MeterValue>
      </div>
      <Meter value={65} max={100} />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="w-full space-y-4">
      <div>
        <MeterLabel>Small</MeterLabel>
        <Meter value={40} max={100} size="sm" />
      </div>
      <div>
        <MeterLabel>Default</MeterLabel>
        <Meter value={60} max={100} size="default" />
      </div>
      <div>
        <MeterLabel>Large</MeterLabel>
        <Meter value={80} max={100} size="lg" />
      </div>
    </div>
  ),
}
