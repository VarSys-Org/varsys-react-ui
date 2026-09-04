import type { Meta, StoryObj } from "@storybook/react"
import {
  KeyValue,
  KeyValueAdd,
  KeyValueError,
  KeyValueItem,
  KeyValueKeyInput,
  KeyValueList,
  KeyValueRemove,
  KeyValueValueInput,
} from "../../components/display/key-value"

const meta: Meta<typeof KeyValue> = {
  title: "Display/KeyValue",
  component: KeyValue,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <KeyValue
        className="w-full max-w-md"
        defaultValue={[{ id: "1", key: "region", value: "us-east-1" }]}
      >
        <KeyValueList>
          <KeyValueItem>
            <KeyValueKeyInput />
            <KeyValueValueInput />
            <KeyValueRemove />
          </KeyValueItem>
        </KeyValueList>
        <KeyValueAdd />
      </KeyValue>
    </div>
  ),
}

export const Validation: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <KeyValue
        className="w-full max-w-md"
        defaultValue={[{ id: "1", key: "", value: "" }]}
        onKeyValidate={(key, items) => {
          if (!key) return "Key is required"
          if (
            items.some((item) => item.key === key && item.key !== key)
          ) {
            return undefined
          }
          return undefined
        }}
      >
        <KeyValueList>
          <KeyValueItem>
            <KeyValueKeyInput />
            <KeyValueValueInput />
            <KeyValueRemove />
            <KeyValueError field="key" />
          </KeyValueItem>
        </KeyValueList>
        <KeyValueAdd />
      </KeyValue>
    </div>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <KeyValue
        className="w-full max-w-md"
        defaultValue={[{ id: "1", key: "width", value: "100%" }]}
      >
        <KeyValueList orientation="horizontal">
          <KeyValueItem>
            <KeyValueKeyInput />
            <KeyValueValueInput />
            <KeyValueRemove />
          </KeyValueItem>
        </KeyValueList>
        <KeyValueAdd />
      </KeyValue>
    </div>
  ),
}