import type { Meta, StoryObj } from "@storybook/react"
import {
  ComboboxRoot,
  ComboboxInput,
  ComboboxInputGroup,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxEmpty,
  ComboboxTrigger,
  ComboboxLabel,
} from "../../components/forms/combobox"

const fruits = ["Apple", "Banana", "Orange", "Pineapple", "Grape", "Mango"]

const meta: Meta<typeof ComboboxRoot> = {
  title: "Forms/Combobox",
  component: ComboboxRoot,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ComboboxRoot items={fruits}>
      <ComboboxLabel>Choose a fruit</ComboboxLabel>
      <ComboboxInputGroup>
        <ComboboxInput placeholder="Select a fruit" />
        <ComboboxTrigger />
      </ComboboxInputGroup>
      <ComboboxContent>
        <ComboboxEmpty>No fruits found.</ComboboxEmpty>
        <ComboboxList>
          {(item: string) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </ComboboxRoot>
  ),
}
