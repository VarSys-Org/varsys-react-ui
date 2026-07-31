import type React from "react"
import { useCallback, useMemo, useState } from "react"

export interface TreeNode {
  id: string
  label: string
  defaultChecked?: boolean
  children?: TreeNode[]
}

export function useCheckboxTree(initialTree: TreeNode) {
  const initialCheckedNodes = useMemo(() => {
    const checkedSet = new Set<string>()
    const initializeCheckedNodes = (node: TreeNode) => {
      if (node.defaultChecked) {
        checkedSet.add(node.id)
      }
      node.children?.forEach(initializeCheckedNodes)
    }
    initializeCheckedNodes(initialTree)
    return checkedSet
  }, [initialTree])

  const [checkedNodes, setCheckedNodes] =
    useState<Set<string>>(initialCheckedNodes)

  const isChecked = useCallback(
    (node: TreeNode): boolean | "indeterminate" => {
      if (!node.children) {
        return checkedNodes.has(node.id)
      }

      const childrenChecked = node.children.map((child) => isChecked(child))
      if (childrenChecked.every((status) => status === true)) {
        return true
      }
      if (
        childrenChecked.some(
          (status) => status === true || status === "indeterminate"
        )
      ) {
        return "indeterminate"
      }
      return false
    },
    [checkedNodes]
  )

  const handleCheck = useCallback(
    (node: TreeNode) => {
      const newCheckedNodes = new Set(checkedNodes)

      const toggleNode = (n: TreeNode, check: boolean) => {
        if (check) {
          newCheckedNodes.add(n.id)
        } else {
          newCheckedNodes.delete(n.id)
        }
        for (const child of n.children ?? []) {
          toggleNode(child, check)
        }
      }

      const currentStatus = isChecked(node)
      const newCheck = currentStatus !== true

      toggleNode(node, newCheck)
      setCheckedNodes(newCheckedNodes)
    },
    [checkedNodes, isChecked]
  )

  return { handleCheck, isChecked }
}

export interface CheckboxTreeRenderProps {
  node: TreeNode
  isChecked: boolean | "indeterminate"
  onCheckedChange: () => void
  children: React.ReactNode
}

export interface CheckboxTreeProps {
  tree: TreeNode
  renderNode?: (props: CheckboxTreeRenderProps) => React.ReactNode
}

export function CheckboxTree({ tree, renderNode }: CheckboxTreeProps) {
  const { isChecked, handleCheck } = useCheckboxTree(tree)

  const renderTreeNode = (node: TreeNode): React.ReactNode => {
    const children = node.children?.map(renderTreeNode)

    if (renderNode) {
      return renderNode({
        children,
        isChecked: isChecked(node),
        node,
        onCheckedChange: () => handleCheck(node),
      })
    }

    return (
      <div className="space-y-1">
        <label className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 text-sm hover:bg-muted">
          <input
            type="checkbox"
            className="size-4 rounded border-input accent-primary"
            checked={isChecked(node) === true}
            ref={(el) => {
              if (el) el.indeterminate = isChecked(node) === "indeterminate"
            }}
            onChange={() => handleCheck(node)}
          />
          <span>{node.label}</span>
        </label>
        {children ? <div className="ml-4 space-y-1">{children}</div> : null}
      </div>
    )
  }

  return renderTreeNode(tree)
}
