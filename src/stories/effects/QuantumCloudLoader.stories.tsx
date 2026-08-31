import type { Meta, StoryObj } from "@storybook/react"
import { QuantumCloudLoader } from "../../components/effects/quantum-cloud-loader"

const meta: Meta<typeof QuantumCloudLoader> = {
  title: "Effects/QuantumCloudLoader",
  component: QuantumCloudLoader,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <QuantumCloudLoader size={280} />
    </div>
  ),
}

export const BrandColors: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <QuantumCloudLoader size={240} colors={["#6366f1", "#22d3ee", "#f472b6"]} />
    </div>
  ),
}

export const Small: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <QuantumCloudLoader size={120} label="Loading" />
    </div>
  ),
}