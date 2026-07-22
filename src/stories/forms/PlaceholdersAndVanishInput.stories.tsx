import type { Meta, StoryObj } from "@storybook/react"
import { PlaceholdersAndVanishInput } from "../../components/forms/placeholders-and-vanish-input"

const meta: Meta<typeof PlaceholdersAndVanishInput> = {
  title: "Forms/PlaceholdersAndVanishInput",
  component: PlaceholdersAndVanishInput,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex w-full justify-center p-10">
      <PlaceholdersAndVanishInput
        placeholders={["Ask me anything...", "Type your message here", "What's on your mind?"]}
        onChange={() => {}}
        onSubmit={() => {}}
      />
    </div>
  ),
}
