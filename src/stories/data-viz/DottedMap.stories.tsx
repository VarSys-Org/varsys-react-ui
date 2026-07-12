import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"
import { DottedMap } from "../../components/data-viz/dotted-map"
import type { Marker } from "../../components/data-viz/dotted-map"

const meta: Meta<typeof DottedMap> = {
  title: "DataViz/DottedMap",
  component: DottedMap,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof DottedMap>

const markers: Marker[] = [
  { lat: 37.5665, lng: 126.978, size: 2.8 },
  { lat: 40.7128, lng: -74.006, size: 2.8 },
]

export const Default: Story = {
  render: () => (
    <div className="relative h-[500px] w-full overflow-hidden rounded-lg border">
      <DottedMap />
    </div>
  ),
}

export const WithMarkers: Story = {
  render: () => (
    <div className="relative h-[500px] w-full overflow-hidden rounded-lg border">
      <div className="to-background absolute inset-0 bg-radial from-transparent to-200%" />
      <DottedMap markers={markers} pulse />
    </div>
  ),
}

export const SmallDots: Story = {
  render: () => (
    <div className="relative h-[500px] w-full overflow-hidden rounded-lg border">
      <DottedMap dotRadius={0.1} />
    </div>
  ),
}
