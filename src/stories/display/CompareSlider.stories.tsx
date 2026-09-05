import type { Meta, StoryObj } from "@storybook/react"
import {
  CompareSlider,
  CompareSliderAfter,
  CompareSliderBefore,
  CompareSliderHandle,
  CompareSliderLabel,
} from "../../components/display/compare-slider"

const meta: Meta<typeof CompareSlider> = {
  title: "Display/CompareSlider",
  component: CompareSlider,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-64 items-center justify-center bg-background p-10">
      <CompareSlider className="h-40 w-full max-w-md overflow-hidden rounded-xl border">
        <CompareSliderBefore className="flex items-center justify-center bg-muted text-sm text-muted-foreground">
          Before
        </CompareSliderBefore>
        <CompareSliderAfter className="flex items-center justify-center bg-primary/20 text-sm">
          After
        </CompareSliderAfter>
        <CompareSliderHandle aria-label="Drag to compare" />
        <CompareSliderLabel className="top-2 left-2">Original</CompareSliderLabel>
        <CompareSliderLabel className="top-2 right-2">Edited</CompareSliderLabel>
      </CompareSlider>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="flex min-h-96 items-center justify-center bg-background p-10">
      <CompareSlider
        className="h-80 w-56 overflow-hidden rounded-xl border"
        orientation="vertical"
      >
        <CompareSliderBefore className="flex items-center justify-center bg-muted text-sm text-muted-foreground">
          Top
        </CompareSliderBefore>
        <CompareSliderAfter className="flex items-center justify-center bg-primary/20 text-sm">
          Bottom
        </CompareSliderAfter>
        <CompareSliderHandle aria-label="Drag to compare" />
      </CompareSlider>
    </div>
  ),
}