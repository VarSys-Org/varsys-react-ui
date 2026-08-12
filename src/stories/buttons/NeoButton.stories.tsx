import type { Meta, StoryObj } from "@storybook/react"
import { NeoButton } from "../../components/buttons/neo-button"

const meta: Meta<typeof NeoButton> = {
  title: "Buttons/NeoButton",
  component: NeoButton,
  tags: ["autodocs"],
  args: {
    children: "Click Here",
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-8 p-8">
      <NeoButton {...args} />
      <NeoButton {...args} variant="pressed" />
      <NeoButton {...args} variant="ringed" />
      <NeoButton {...args} variant="underline" />
    </div>
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-8 p-8">
      <NeoButton {...args} size="sm">
        Small
      </NeoButton>
      <NeoButton {...args} size="default">
        Default
      </NeoButton>
      <NeoButton {...args} size="lg">
        Large
      </NeoButton>
      <NeoButton {...args} size="icon" aria-label="Settings">
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="size-4"
        >
          <path d="M8.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
          <path
            fillRule="evenodd"
            d="M8 0a.75.75 0 0 1 .75.75v.846c.555.12 1.086.308 1.586.555l.599-.599a.75.75 0 0 1 1.06 1.06l-.599.6c.247.5.435 1.03.555 1.586h.846A.75.75 0 0 1 13.25 8h-1.155c-.12.555-.308 1.086-.555 1.586l.599.599a.75.75 0 0 1-1.06 1.06l-.6-.599c-.5.247-1.03.435-1.586.555v.846A.75.75 0 0 1 8 13.25h-1.5a.75.75 0 0 1-.75-.75v-.846a5.2 5.2 0 0 1-1.586-.555l-.6.599a.75.75 0 0 1-1.06-1.06l.6-.6A5.2 5.2 0 0 1 3.155 8H2.25a.75.75 0 0 1 0-1.5h.905A5.2 5.2 0 0 1 3.71 4.914l-.6-.6a.75.75 0 0 1 1.06-1.06l.6.6c.5-.247 1.03-.435 1.586-.555V.75A.75.75 0 0 1 6.5 0H8ZM5.25 8a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0Z"
            clipRule="evenodd"
          />
        </svg>
      </NeoButton>
    </div>
  ),
}

export const AsLink: Story = {
  render: (args) => (
    <div className="p-8">
      <NeoButton {...args} href="#" target="_blank">
        Open link
      </NeoButton>
    </div>
  ),
}

export const Disabled: Story = {
  render: (args) => (
    <div className="flex gap-8 p-8">
      <NeoButton {...args} disabled>
        Disabled
      </NeoButton>
      <NeoButton {...args} disabled variant="pressed">
        Disabled
      </NeoButton>
    </div>
  ),
}
