import type { Meta, StoryObj } from "@storybook/react"
import { Mail } from "lucide-react"
import { NumberInput } from "../../components/forms/number-input"
import { TextInput } from "../../components/forms/text-input"

const meta: Meta = {
  title: "Forms/NumberTextInput",
  tags: ["autodocs"],
}
export default meta

export const NumberBasic: StoryObj = {
  render: () => (
    <div className="mx-auto w-full max-w-sm space-y-4 p-8">
      <NumberInput defaultValue={42} />
      <NumberInput defaultValue={3.5} step={0.5} />
    </div>
  ),
}

export const NumberWithStepper: StoryObj = {
  render: () => (
    <div className="mx-auto w-full max-w-sm space-y-4 p-8">
      <NumberInput defaultValue={10} min={0} max={100} enableStepper />
      <NumberInput defaultValue={1} min={1} max={10} enableStepper disabled />
    </div>
  ),
}

export const NumberNoStepper: StoryObj = {
  render: () => (
    <div className="mx-auto w-full max-w-sm space-y-4 p-8">
      <NumberInput defaultValue={5} enableStepper={false} />
      <NumberInput placeholder="Enter a number" enableStepper={false} />
    </div>
  ),
}

export const TextBasic: StoryObj = {
  render: () => (
    <div className="mx-auto w-full max-w-sm space-y-4 p-8">
      <TextInput placeholder="Your name" />
      <TextInput placeholder="you@example.com" type="email" />
      <TextInput placeholder="Search..." icon={Mail} />
    </div>
  ),
}

export const TextStates: StoryObj = {
  render: () => (
    <div className="mx-auto w-full max-w-sm space-y-4 p-8">
      <TextInput defaultValue="Disabled field" disabled />
      <TextInput defaultValue="Invalid value" error errorMessage="This field is required." />
    </div>
  ),
}
