import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import {
  AngleSlider,
  AngleSliderRange,
  AngleSliderThumb,
  AngleSliderTrack,
  AngleSliderValue,
} from "../../components/forms/angle-slider"

const meta: Meta<typeof AngleSlider> = {
  title: "Forms/AngleSlider",
  component: AngleSlider,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <AngleSlider defaultValue={[45]}>
        <AngleSliderTrack>
          <AngleSliderRange />
        </AngleSliderTrack>
        <AngleSliderThumb />
        <AngleSliderValue />
      </AngleSlider>
    </div>
  ),
}

export const Range: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <AngleSlider defaultValue={[30, 150]} minStepsBetweenThumbs={10}>
        <AngleSliderTrack>
          <AngleSliderRange />
        </AngleSliderTrack>
        <AngleSliderThumb index={0} />
        <AngleSliderThumb index={1} />
        <AngleSliderValue />
      </AngleSlider>
    </div>
  ),
}

export const Controlled: Story = {
  render: () => {
    const ControlledSlider = () => {
      const [value, setValue] = useState<number[]>([90])
      return (
        <div className="flex flex-col items-center gap-6">
          <AngleSlider value={value} onValueChange={setValue} size={80}>
            <AngleSliderTrack>
              <AngleSliderRange />
            </AngleSliderTrack>
            <AngleSliderThumb />
            <AngleSliderValue />
          </AngleSlider>
          <span className="text-sm text-muted-foreground">
            Value: {value[0]}°
          </span>
        </div>
      )
    }
    return (
      <div className="flex min-h-48 items-center justify-center bg-background p-10">
        <ControlledSlider />
      </div>
    )
  },
}