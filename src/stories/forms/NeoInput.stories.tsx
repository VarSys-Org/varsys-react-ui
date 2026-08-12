import type { Meta, StoryObj } from "@storybook/react"
import { NeoInput } from "../../components/forms/neo-input"

const meta: Meta<typeof NeoInput> = {
  title: "Forms/NeoInput",
  component: NeoInput,
  tags: ["autodocs"],
  args: {
    type: "email",
    placeholder: "you@example.com",
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="max-w-sm p-8">
      <NeoInput {...args} label="Email" />
    </div>
  ),
}

export const WithIcon: Story = {
  render: (args) => (
    <div className="max-w-sm p-8">
      <NeoInput
        {...args}
        label="Email"
        icon={
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-4"
          >
            <path
              fillRule="evenodd"
              d="M11.89 4.111a5.5 5.5 0 1 0 0 7.778.75.75 0 1 1 1.06 1.061A7 7 0 1 1 15 8a2.5 2.5 0 0 1-4.083 1.935A3.5 3.5 0 1 1 11.5 8a1 1 0 0 0 2 0 5.48 5.48 0 0 0-1.61-3.889ZM10 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"
              clipRule="evenodd"
            />
          </svg>
        }
      />
    </div>
  ),
}

export const WithAction: Story = {
  render: (args) => (
    <div className="max-w-sm p-8">
      <NeoInput
        {...args}
        label="Search"
        type="search"
        placeholder="Search..."
        action={
          <button
            type="submit"
            className="border-2 border-l-0 border-foreground bg-yellow-300 px-4 py-2 text-xs font-bold tracking-wide uppercase hover:bg-yellow-400 focus:bg-yellow-400 focus:outline-none"
          >
            Search
          </button>
        }
      />
    </div>
  ),
}
