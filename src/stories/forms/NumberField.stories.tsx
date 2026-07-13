import type { Meta, StoryObj } from "@storybook/react"

import { NumberField, NumberFieldGroup, NumberFieldDecrement, NumberFieldIncrement, NumberFieldInput } from "../../components/forms/number-field"

const meta: Meta<typeof NumberField> = {
  title: "Forms/NumberField",
  component: NumberField,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <NumberField defaultValue={5} min={0} max={100}>
      <NumberFieldGroup>
        <NumberFieldDecrement />
        <NumberFieldInput />
        <NumberFieldIncrement />
      </NumberFieldGroup>
    </NumberField>
  ),
}

export const Small: Story = {
  render: () => (
    <NumberField defaultValue={3} min={1} max={10} size="sm">
      <NumberFieldGroup>
        <NumberFieldDecrement />
        <NumberFieldInput />
        <NumberFieldIncrement />
      </NumberFieldGroup>
    </NumberField>
  ),
}

export const Large: Story = {
  render: () => (
    <NumberField defaultValue={50} min={0} max={100} size="lg">
      <NumberFieldGroup>
        <NumberFieldDecrement />
        <NumberFieldInput />
        <NumberFieldIncrement />
      </NumberFieldGroup>
    </NumberField>
  ),
}

export const Disabled: Story = {
  render: () => (
    <NumberField defaultValue={10} disabled>
      <NumberFieldGroup>
        <NumberFieldDecrement />
        <NumberFieldInput />
        <NumberFieldIncrement />
      </NumberFieldGroup>
    </NumberField>
  ),
}
