import type { Meta, StoryObj } from "@storybook/react"
import { DecryptedText } from "../../components/text-effects/decrypted-text"

const meta: Meta<typeof DecryptedText> = {
  title: "TextEffects/DecryptedText",
  component: DecryptedText,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Hover: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <DecryptedText
        text="Hover to decrypt"
        className="text-2xl font-semibold"
      />
    </div>
  ),
}

export const Sequential: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <DecryptedText
        text="SEQUENTIAL REVEAL"
        sequential
        revealDirection="center"
        animateOn="view"
        className="text-3xl font-bold tracking-wide"
      />
    </div>
  ),
}

export const ClickToDecrypt: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <DecryptedText
        text="Click me"
        animateOn="click"
        clickMode="toggle"
        className="cursor-pointer text-2xl font-semibold"
      />
    </div>
  ),
}