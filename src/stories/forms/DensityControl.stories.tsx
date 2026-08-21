import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { DensityControl } from "../../components/forms/density-control"

const meta: Meta<typeof DensityControl> = {
  title: "Forms/DensityControl",
  component: DensityControl,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <DensityControl defaultValue="grid" />,
}

export const Controlled: Story = {
  render: () => {
    const [density, setDensity] = useState<"list" | "grid">("grid")
    return (
      <div className="flex flex-col items-start gap-4 p-8">
        <DensityControl value={density} onChange={setDensity} />
        <p className="text-sm text-muted-foreground">
          Current density: {density}
        </p>
      </div>
    )
  },
}

export const InToolbar: Story = {
  render: () => (
    <div className="flex items-center justify-between rounded-lg border bg-card p-2 p-8">
      <p className="text-sm font-medium">Assets</p>
      <DensityControl defaultValue="list" />
    </div>
  ),
}
