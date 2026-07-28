import type { Meta, StoryObj } from "@storybook/react"
import { SignupForm } from "../../components/forms/signup-form"

const meta: Meta<typeof SignupForm> = { title: "Forms/SignupForm", component: SignupForm, tags: ["autodocs"] }
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: {} }
