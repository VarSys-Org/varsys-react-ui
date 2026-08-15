import type { Meta, StoryObj } from "@storybook/react"
import { CloudShader } from "../../components/effects/cloud-shader"

const meta: Meta<typeof CloudShader> = {
  title: "Effects/CloudShader",
  component: CloudShader,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <CloudShader className="h-72 rounded-xl" />
    </div>
  ),
}

export const WithContent: Story = {
  render: () => (
    <div className="p-8">
      <CloudShader className="flex h-72 items-center justify-center rounded-xl">
        <div className="rounded-lg bg-background/80 px-6 py-4 text-center shadow-lg backdrop-blur">
          <p className="text-lg font-semibold text-foreground">Banking above the clouds</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Close the books in hours, not weeks.
          </p>
        </div>
      </CloudShader>
    </div>
  ),
}

export const Sunset: Story = {
  render: () => (
    <div className="p-8">
      <CloudShader
        className="h-72 rounded-xl"
        cloudColor="#fff5e6"
        skyTopColor="#7c2d12"
        skyBottomColor="#f97316"
        speed={1.5}
        count={4}
      />
    </div>
  ),
}
