import type { Meta, StoryObj } from "@storybook/react"
import {
  AutocompleteRoot,
  AutocompleteInput,
  AutocompletePopup,
  AutocompleteList,
  AutocompleteItem,
  AutocompleteEmpty,
} from "../../components/forms/autocomplete"

const meta: Meta<typeof AutocompleteRoot> = {
  title: "Forms/Autocomplete",
  component: AutocompleteRoot,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const fruits = [
  "Apple",
  "Banana",
  "Blueberry",
  "Cherry",
  "Grape",
  "Kiwi",
  "Mango",
  "Orange",
  "Peach",
  "Pear",
  "Pineapple",
  "Strawberry",
  "Watermelon",
]

export const Default: Story = {
  render: () => (
    <div className="w-72">
      <AutocompleteRoot>
        <AutocompleteInput placeholder="Search fruits..." />
        <AutocompletePopup>
          <AutocompleteEmpty>No results found</AutocompleteEmpty>
          <AutocompleteList>
            {fruits.map((fruit) => (
              <AutocompleteItem key={fruit} value={fruit}>
                {fruit}
              </AutocompleteItem>
            ))}
          </AutocompleteList>
        </AutocompletePopup>
      </AutocompleteRoot>
    </div>
  ),
}
