import type { Meta, StoryObj } from "@storybook/react"
import { SocialLoginButtons } from "../../components/buttons/social-login-buttons"

const meta: Meta<typeof SocialLoginButtons> = {
  title: "Buttons/SocialLoginButtons",
  component: SocialLoginButtons,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Icon: Story = {
  render: () => (
    <div className="flex min-h-40 items-center justify-center bg-background p-10">
      <SocialLoginButtons />
    </div>
  ),
}

export const Label: Story = {
  render: () => (
    <div className="flex min-h-40 items-center justify-center bg-background p-10">
      <SocialLoginButtons layout="label" />
    </div>
  ),
}

export const GithubOnly: Story = {
  render: () => (
    <div className="flex min-h-40 items-center justify-center bg-background p-10">
      <SocialLoginButtons providers={["github"]} layout="label" />
    </div>
  ),
}