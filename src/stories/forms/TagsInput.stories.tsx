import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { TagsInput } from "../../components/forms/tags-input"

const meta: Meta<typeof TagsInput> = {
  title: "Forms/TagsInput",
  component: TagsInput,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

function TagsInputDemo() {
  const [tags, setTags] = useState(["react", "typescript"])
  return (
    <div className="w-full max-w-md space-y-8 p-8">
      <div>
        <p className="mb-2 text-sm font-medium">Default</p>
        <TagsInput
          value={tags}
          onValueChange={setTags}
          placeholder="Add tags and press Enter..."
        />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">Disabled</p>
        <TagsInput value={["locked", "readonly"]} disabled />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">Max 3 tags</p>
        <TagsInput value={[]} maxTags={3} placeholder="Max 3 tags allowed..." />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">Error state</p>
        <TagsInput value={[]} error placeholder="Required field..." />
      </div>
    </div>
  )
}

export const Default: Story = {
  render: () => <TagsInputDemo />,
}

export const Basic: Story = {
  render: () => (
    <div className="w-full max-w-md p-8">
      <TagsInput defaultValue="" placeholder="Type a tag and press Enter..." />
    </div>
  ),
}

export const WithInitialTags: Story = {
  render: () => (
    <div className="w-full max-w-md p-8">
      <TagsInput value={["vite", "tailwind", "storybook"]} onValueChange={() => {}} />
    </div>
  ),
}