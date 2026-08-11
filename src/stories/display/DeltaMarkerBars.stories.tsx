import type { Meta, StoryObj } from "@storybook/react"
import { DeltaBar } from "../../components/display/delta-bar"
import { MarkerBar } from "../../components/display/marker-bar"

const meta: Meta = {
  title: "Display/DeltaMarkerBars",
  tags: ["autodocs"],
}
export default meta

export const DeltaBarPositive: StoryObj = {
  render: () => (
    <div className="mx-auto w-full max-w-md space-y-6 p-8">
      <DeltaBar value={25} showAnimation />
      <DeltaBar value={50} showAnimation />
      <DeltaBar value={75} showAnimation />
    </div>
  ),
}

export const DeltaBarNegative: StoryObj = {
  render: () => (
    <div className="mx-auto w-full max-w-md space-y-6 p-8">
      <DeltaBar value={-25} showAnimation />
      <DeltaBar value={-50} showAnimation />
      <DeltaBar value={-75} showAnimation />
    </div>
  ),
}

export const DeltaBarMixed: StoryObj = {
  render: () => (
    <div className="mx-auto w-full max-w-md space-y-6 p-8">
      <DeltaBar value={30} tooltip="Revenue up 30%" />
      <DeltaBar value={-45} tooltip="Costs down 45%" />
      <DeltaBar value={0} />
    </div>
  ),
}

export const MarkerBarBasic: StoryObj = {
  render: () => (
    <div className="mx-auto w-full max-w-md space-y-8 p-8">
      <MarkerBar value={25} markerTooltip="25%" />
      <MarkerBar value={50} markerTooltip="50%" />
      <MarkerBar value={75} markerTooltip="75%" />
    </div>
  ),
}

export const MarkerBarWithRange: StoryObj = {
  render: () => (
    <div className="mx-auto w-full max-w-md space-y-8 p-8">
      <MarkerBar
        value={60}
        minValue={20}
        maxValue={80}
        markerTooltip="Current: 60%"
        rangeTooltip="Target range"
        showAnimation
      />
      <MarkerBar
        value={35}
        minValue={10}
        maxValue={60}
        markerTooltip="Current: 35%"
        rangeTooltip="Comfort zone"
        showAnimation
      />
    </div>
  ),
}

export const MarkerBarCustomColor: StoryObj = {
  render: () => (
    <div className="mx-auto w-full max-w-md p-8">
      <MarkerBar value={70} color="#8b5cf6" markerTooltip="Custom colored marker" />
    </div>
  ),
}
