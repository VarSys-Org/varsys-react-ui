import type { Meta, StoryObj } from "@storybook/react"
import { CheckIcon, PencilIcon, XIcon } from "lucide-react"
import {
  Editable,
  EditableArea,
  EditableCancel,
  EditableInput,
  EditableLabel,
  EditablePreview,
  EditableSubmit,
  EditableToolbar,
  EditableTrigger,
} from "../../components/forms/editable"

const meta: Meta<typeof Editable> = {
  title: "Forms/Editable",
  component: Editable,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <Editable defaultValue="VarSys UI">
        <EditableArea>
          <EditablePreview />
          <EditableInput />
          <EditableToolbar>
            <EditableCancel>
              <XIcon />
            </EditableCancel>
            <EditableSubmit>
              <CheckIcon />
            </EditableSubmit>
          </EditableToolbar>
        </EditableArea>
      </Editable>
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <Editable defaultValue="Component library" className="w-64">
        <EditableLabel>Title</EditableLabel>
        <EditableArea>
          <EditablePreview />
          <EditableInput />
          <EditableToolbar>
            <EditableCancel>
              <XIcon />
            </EditableCancel>
            <EditableSubmit>
              <CheckIcon />
            </EditableSubmit>
          </EditableToolbar>
        </EditableArea>
      </Editable>
    </div>
  ),
}

export const WithTrigger: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <Editable defaultValue="Double-click or use the trigger" triggerMode="dblclick">
        <EditableArea>
          <EditablePreview />
          <EditableInput />
        </EditableArea>
        <EditableToolbar>
          <EditableTrigger>
            <PencilIcon />
          </EditableTrigger>
        </EditableToolbar>
      </Editable>
    </div>
  ),
}

export const Autosize: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <Editable defaultValue="Autosizing inline edit" autosize>
        <EditableArea>
          <EditablePreview />
          <EditableInput />
        </EditableArea>
      </Editable>
    </div>
  ),
}