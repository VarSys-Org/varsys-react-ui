import type { Meta, StoryObj } from "@storybook/react"
import { Legend } from "../../components/display/legend"

const meta: Meta<typeof Legend> = {
  title: "Display/Legend",
  component: Legend,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const categories = ["Sales", "Marketing", "Support"]
const colors = ["#3b82f6", "#10b981", "#8b5cf6"]

export const Default: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-md p-8">
      <Legend categories={categories} colors={colors} />
    </div>
  ),
}

export const ManyItems: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-md p-8">
      <Legend
        categories={[
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ]}
      />
    </div>
  ),
}

export const Clickable: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-md p-8">
      <Legend categories={categories} colors={colors} onClickLegendItem={() => {}} />
    </div>
  ),
}

export const WithActiveItem: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-md p-8">
      <Legend categories={categories} colors={colors} activeLegend="Marketing" />
    </div>
  ),
}
