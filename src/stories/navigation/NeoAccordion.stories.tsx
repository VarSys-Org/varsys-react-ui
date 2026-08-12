import type { Meta, StoryObj } from "@storybook/react"
import { NeoAccordion } from "../../components/navigation/neo-accordion"

const meta: Meta<typeof NeoAccordion> = {
  title: "Navigation/NeoAccordion",
  component: NeoAccordion,
  tags: ["autodocs"],
  args: {
    items: [
      {
        value: "features",
        title: "What are the basic features?",
        content:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt similique, quae hic dicta quo facere facilis praesentium a sunt.",
      },
      {
        value: "getting-started",
        title: "How do I get started?",
        content:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt similique, quae hic dicta quo facere facilis praesentium a sunt.",
      },
      {
        value: "pricing",
        title: "How much does it cost?",
        content:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt similique, quae hic dicta quo facere facilis praesentium a sunt.",
      },
    ],
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="max-w-lg p-8">
      <NeoAccordion {...args} />
    </div>
  ),
}

export const SingleOpen: Story = {
  render: (args) => (
    <div className="max-w-lg p-8">
      <NeoAccordion {...args} type="single" defaultValue={["features"]} />
    </div>
  ),
}

export const MultipleOpen: Story = {
  render: (args) => (
    <div className="max-w-lg p-8">
      <NeoAccordion
        {...args}
        type="multiple"
        defaultValue={["features", "pricing"]}
      />
    </div>
  ),
}
