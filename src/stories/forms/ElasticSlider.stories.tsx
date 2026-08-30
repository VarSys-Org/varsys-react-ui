import type { Meta, StoryObj } from "@storybook/react"
import { ElasticSlider } from "../../components/forms/elastic-slider"

const meta: Meta<typeof ElasticSlider> = {
  title: "Forms/ElasticSlider",
  component: ElasticSlider,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <ElasticSlider defaultValue={50} leftIcon={<>−</>} rightIcon={<>+</>} />
    </div>
  ),
}

export const Stepped: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <ElasticSlider defaultValue={2} startingValue={1} maxValue={5} isStepped stepSize={1} />
    </div>
  ),
}

export const CustomRange: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <ElasticSlider defaultValue={50} startingValue={0} maxValue={200} />
    </div>
  ),
}