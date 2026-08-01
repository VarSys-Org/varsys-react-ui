import type { Meta, StoryObj } from "@storybook/react"
import { ProgressBar } from "../../components/display/progress-bar"

const meta: Meta<typeof ProgressBar> = {
  title: "Display/ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex h-32 items-center justify-center px-8">
      <div className="w-full max-w-md space-y-6">
        <ProgressBar value={50} />
        <ProgressBar value={50} showAnimation />
      </div>
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex h-32 items-center justify-center px-8">
      <div className="w-full max-w-md space-y-6">
        <ProgressBar value={42} label="42%" />
        <ProgressBar value={87} label="87%" />
      </div>
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="flex h-40 items-center justify-center px-8">
      <div className="w-full max-w-md space-y-4">
        <ProgressBar value={70} variant="default" />
        <ProgressBar value={70} variant="neutral" />
        <ProgressBar value={70} variant="warning" />
        <ProgressBar value={70} variant="error" />
        <ProgressBar value={70} variant="success" />
      </div>
    </div>
  ),
}

export const CustomMax: Story = {
  render: () => (
    <div className="flex h-32 items-center justify-center px-8">
      <div className="w-full max-w-md">
        <ProgressBar value={3} max={10} label="3 of 10" showAnimation />
      </div>
    </div>
  ),
}
