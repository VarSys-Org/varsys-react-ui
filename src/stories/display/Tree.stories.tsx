import { useTree } from "@headless-tree/react"
import type { ItemInstance } from "@headless-tree/core"
import type { Meta, StoryObj } from "@storybook/react"
import { Tree, TreeItem, TreeItemLabel } from "../../components/display/tree"

interface NodeData {
  name: string
  children?: string[]
}

const data: Record<string, NodeData> = {
  root: { name: "project", children: ["docs", "src", "package.json"] },
  docs: { name: "docs", children: ["index.md", "api.md"] },
  "index.md": { name: "index.md" },
  "api.md": { name: "api.md" },
  src: { name: "src", children: ["components", "index.ts"] },
  components: { name: "components", children: ["tree.tsx", "button.tsx"] },
  "tree.tsx": { name: "tree.tsx" },
  "button.tsx": { name: "button.tsx" },
  "index.ts": { name: "index.ts" },
  "package.json": { name: "package.json" },
}

function TreeNode({ item }: { item: ItemInstance<NodeData> }) {
  const children = item.isFolder() ? item.getChildren() : []
  return (
    <>
      <TreeItem
        item={item}
        onClick={() => {
          if (item.isFolder()) {
            if (item.isExpanded()) {
              item.collapse()
            } else {
              item.expand()
            }
          }
        }}
      >
        <TreeItemLabel />
      </TreeItem>
      {item.isExpanded() &&
        children.map((child) => (
          <TreeNode key={child.getId()} item={child} />
        ))}
    </>
  )
}

function TreeStory() {
  const tree = useTree<NodeData>({
    rootItemId: "root",
    initialState: {
      expandedItems: ["root", "docs", "src", "src/components"],
      selectedItems: ["src/index.ts"],
    },
    dataLoader: {
      getItem: (itemId) => data[itemId],
      getChildren: (itemId) => data[itemId]?.children ?? [],
    },
    isItemFolder: (item) => Boolean(item.getItemData()?.children),
    getItemName: (item) => item.getItemData()?.name ?? item.getId(),
  })

  return (
    <div className="flex h-96 items-start justify-center p-8">
      <Tree
        tree={tree}
        className="w-full max-w-sm rounded-lg border border-border bg-card p-2"
      >
        <TreeNode item={tree.getRootItem()} />
      </Tree>
    </div>
  )
}

const meta: Meta<typeof Tree> = {
  title: "Display/Tree",
  component: Tree,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <TreeStory />,
}
