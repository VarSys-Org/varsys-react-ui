import type { Meta, StoryObj } from "@storybook/react"
import { Poll } from "../../components/forms/poll"

const meta: Meta<typeof Poll> = {
  title: "Forms/Poll",
  component: Poll,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const options = [
  { id: "opt-1", label: "Option 1", value: 45 },
  { id: "opt-2", label: "Option 2", value: 25 },
  { id: "opt-3", label: "Option 3", value: 30 },
]

export const Default: Story = {
  render: () => (
    <div className="flex min-h-64 items-center justify-center p-8">
      <Poll
        title="Where should we go for lunch?"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe maiores exercitationem id soluta eaque harum eligendi distinctio sapiente esse ad!"
        options={options}
        endDate="October 31, 2025"
      />
    </div>
  ),
}

export const MultipleChoice: Story = {
  render: () => (
    <div className="flex min-h-64 items-center justify-center p-8">
      <Poll
        title="Where should we go for lunch?"
        description="Pick one or more options that appeal to you."
        options={options}
        multiple
        endDate="October 31, 2025"
      />
    </div>
  ),
}

export const Empty: Story = {
  render: () => (
    <div className="flex min-h-64 items-center justify-center p-8">
      <Poll
        title="No votes yet"
        description="Be the first to cast your vote."
        options={[
          { id: "a", label: "Pizza", value: 0 },
          { id: "b", label: "Sushi", value: 0 },
          { id: "c", label: "Tacos", value: 0 },
        ]}
      />
    </div>
  ),
}
