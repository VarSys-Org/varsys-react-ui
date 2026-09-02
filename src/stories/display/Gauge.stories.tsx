import type { Meta, StoryObj } from "@storybook/react"
import {
  Gauge,
  GaugeCombined,
  GaugeIndicator,
  GaugeLabel,
  GaugeRange,
  GaugeTrack,
  GaugeValueText,
} from "../../components/display/gauge"

const meta: Meta<typeof GaugeCombined> = {
  title: "Display/Gauge",
  component: GaugeCombined,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex h-64 items-center justify-center px-8">
      <GaugeCombined value={68} />
    </div>
  ),
}

export const PartialArc: Story = {
  render: () => (
    <div className="flex h-64 items-center justify-center px-8">
      <GaugeCombined value={72} startAngle={200} endAngle={340} />
    </div>
  ),
}

export const CustomMax: Story = {
  render: () => (
    <div className="flex h-64 items-center justify-center px-8">
      <GaugeCombined
        value={7}
        max={10}
        getValueText={(value) => `${value} / 10`}
      />
    </div>
  ),
}

export const Complete: Story = {
  render: () => (
    <div className="flex h-64 items-center justify-center px-8">
      <GaugeCombined value={100} />
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex h-72 items-center justify-center px-8">
      <Gauge value={62} size={140}>
        <GaugeIndicator>
          <GaugeTrack />
          <GaugeRange />
        </GaugeIndicator>
        <GaugeValueText>62%</GaugeValueText>
        <GaugeLabel>CPU usage</GaugeLabel>
      </Gauge>
    </div>
  ),
}