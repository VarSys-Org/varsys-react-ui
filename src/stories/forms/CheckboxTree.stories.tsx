import type { Meta, StoryObj } from "@storybook/react"
import { CheckboxTree, type TreeNode } from "../../components/forms/checkbox-tree"

const meta: Meta<typeof CheckboxTree> = {
  title: "Forms/CheckboxTree",
  component: CheckboxTree,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const tree: TreeNode = {
  id: "root",
  label: "Permissions",
  defaultChecked: true,
  children: [
    {
      id: "read",
      label: "Read access",
      children: [
        { id: "read-files", label: "Files", defaultChecked: true },
        { id: "read-issues", label: "Issues" },
        { id: "read-wiki", label: "Wiki" },
      ],
    },
    {
      id: "write",
      label: "Write access",
      children: [
        { id: "write-code", label: "Code" },
        { id: "write-issues", label: "Issues", defaultChecked: true },
      ],
    },
    {
      id: "admin",
      label: "Admin",
      children: [{ id: "admin-settings", label: "Settings" }],
    },
  ],
}

export const Default: Story = {
  render: () => (
    <div className="flex h-64 items-start justify-center p-6">
      <div className="w-72 rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
        <CheckboxTree tree={tree} />
      </div>
    </div>
  ),
}
