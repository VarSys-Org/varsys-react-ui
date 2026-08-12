import type { Meta, StoryObj } from "@storybook/react"
import { NeoAlert } from "../../components/display/neo-alert"

const meta: Meta<typeof NeoAlert> = {
  title: "Display/NeoAlert",
  component: NeoAlert,
  tags: ["autodocs"],
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, eos!",
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="flex max-w-lg flex-col gap-6 p-8">
      <NeoAlert {...args} variant="info" title="Info" />
      <NeoAlert {...args} variant="success" title="Success" />
      <NeoAlert {...args} variant="warning" title="Warning" />
      <NeoAlert {...args} variant="error" title="Error" />
    </div>
  ),
}

export const Title: Story = {
  render: (args) => (
    <div className="p-8">
      <NeoAlert {...args} variant="info" title="Heads up!" />
    </div>
  ),
}

export const CustomIcon: Story = {
  render: (args) => (
    <div className="p-8">
      <NeoAlert
        {...args}
        variant="warning"
        title="Storage almost full"
        icon={
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="mt-0.5 size-4 shrink-0"
          >
            <path
              fillRule="evenodd"
              d="M8 1a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0v-5.5A.75.75 0 0 1 8 1Zm0 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
              clipRule="evenodd"
            />
          </svg>
        }
      />
    </div>
  ),
}
