import type { Meta, StoryObj } from "@storybook/react"
import {
  Attachment,
  AttachmentContent,
  AttachmentTitle,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentActions,
  AttachmentAction,
  AttachmentGroup,
} from "../../components/display/attachment"
import { FileTextIcon, XIcon } from "lucide-react"

const meta: Meta<typeof Attachment> = {
  title: "Display/Attachment",
  component: Attachment,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Attachment>
      <AttachmentMedia>
        <FileTextIcon />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>sales-dashboard.pdf</AttachmentTitle>
        <AttachmentDescription>PDF · 2.4 MB</AttachmentDescription>
      </AttachmentContent>
      <AttachmentActions>
        <AttachmentAction aria-label="Remove">
          <XIcon />
        </AttachmentAction>
      </AttachmentActions>
    </Attachment>
  ),
}

export const Uploading: Story = {
  render: () => (
    <Attachment state="uploading">
      <AttachmentMedia>
        <FileTextIcon />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>design-system.zip</AttachmentTitle>
        <AttachmentDescription>Uploading · 64%</AttachmentDescription>
      </AttachmentContent>
    </Attachment>
  ),
}

export const Error: Story = {
  render: () => (
    <Attachment state="error">
      <AttachmentMedia>
        <FileTextIcon />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>financial-model.xlsx</AttachmentTitle>
        <AttachmentDescription>Upload failed. Try again.</AttachmentDescription>
      </AttachmentContent>
    </Attachment>
  ),
}

export const Group: Story = {
  render: () => (
    <AttachmentGroup>
      <Attachment>
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>briefing-notes.pdf</AttachmentTitle>
          <AttachmentDescription>PDF · 1.4 MB</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
      <Attachment>
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>customers.csv</AttachmentTitle>
          <AttachmentDescription>CSV · 18 KB</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
    </AttachmentGroup>
  ),
}
