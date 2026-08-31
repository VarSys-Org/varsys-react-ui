import type { Meta, StoryObj } from "@storybook/react"
import { TextareaCharacterCount } from "../../components/forms/textarea-character-count"

const meta: Meta<typeof TextareaCharacterCount> = {
  title: "Forms/TextareaCharacterCount",
  component: TextareaCharacterCount,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <div className="w-full max-w-md">
        <TextareaCharacterCount
          label="Bio"
          maxLength={180}
          defaultValue="Write a few sentences about yourself..."
          placeholder="Tell us about yourself"
        />
      </div>
    </div>
  ),
}