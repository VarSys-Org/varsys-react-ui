import type { ItemInstance } from "@headless-tree/core"
import { ChevronDownIcon } from "lucide-react"
import { Slot } from "@radix-ui/react-slot"
import * as React from "react"
import { cn } from "@/lib/utils"

interface TreeContextValue<T = unknown> {
  indent: number
  currentItem?: ItemInstance<T>
  tree?: {
    getContainerProps?: () => React.HTMLAttributes<HTMLDivElement>
    getDragLineStyle?: () => React.CSSProperties
  }
}

const TreeContext = React.createContext<TreeContextValue<any>>({
  currentItem: undefined,
  indent: 20,
  tree: undefined,
})

function useTreeContext<T = unknown>() {
  return React.useContext(TreeContext) as TreeContextValue<T>
}

export interface TreeProps extends React.HTMLAttributes<HTMLDivElement> {
  indent?: number
  tree?: TreeContextValue["tree"]
}

function Tree({ indent = 20, tree, className, ...props }: TreeProps) {
  const containerProps =
    tree && typeof tree.getContainerProps === "function"
      ? tree.getContainerProps()
      : {}
  const mergedProps = { ...props, ...containerProps }

  const { style: propStyle, ...otherProps } = mergedProps

  const mergedStyle = {
    ...propStyle,
    "--tree-indent": `${indent}px`,
  } as React.CSSProperties

  return (
    <TreeContext.Provider value={{ indent, tree }}>
      <div
        className={cn("flex flex-col", className)}
        data-slot="tree"
        style={mergedStyle}
        {...otherProps}
      />
    </TreeContext.Provider>
  )
}

export interface TreeItemProps<T = unknown>
  extends React.HTMLAttributes<HTMLButtonElement> {
  item: ItemInstance<T>
  asChild?: boolean
}

function TreeItem<T = unknown>({
  item,
  className,
  asChild,
  children,
  ...props
}: TreeItemProps<T>) {
  const { indent } = useTreeContext<T>()

  const itemProps =
    typeof item.getProps === "function" ? item.getProps() : {}
  const mergedProps = { ...props, ...itemProps }

  const { style: propStyle, ...otherProps } = mergedProps

  const mergedStyle = {
    ...propStyle,
    "--tree-padding": `${item.getItemMeta().level * indent}px`,
  } as React.CSSProperties

  const Comp = asChild ? Slot : "button"

  return (
    <TreeContext.Provider value={{ currentItem: item, indent }}>
      <Comp
        aria-expanded={item.isExpanded()}
        className={cn(
          "group z-10 select-none ps-[var(--tree-padding)] outline-none focus:z-20 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
          className
        )}
        data-drag-target={
          typeof item.isDragTarget === "function"
            ? item.isDragTarget() || false
            : undefined
        }
        data-focus={
          typeof item.isFocused === "function"
            ? item.isFocused() || false
            : undefined
        }
        data-folder={
          typeof item.isFolder === "function"
            ? item.isFolder() || false
            : undefined
        }
        data-search-match={
          typeof item.isMatchingSearch === "function"
            ? item.isMatchingSearch() || false
            : undefined
        }
        data-selected={
          typeof item.isSelected === "function"
            ? item.isSelected() || false
            : undefined
        }
        data-slot="tree-item"
        style={mergedStyle}
        {...otherProps}
      >
        {children}
      </Comp>
    </TreeContext.Provider>
  )
}

export interface TreeItemLabelProps<T = unknown>
  extends React.HTMLAttributes<HTMLSpanElement> {
  item?: ItemInstance<T>
}

function TreeItemLabel<T = unknown>({
  item: propItem,
  children,
  className,
  ...props
}: TreeItemLabelProps<T>) {
  const { currentItem } = useTreeContext<T>()
  const item = propItem || currentItem

  if (!item) {
    return null
  }

  return (
    <span
      className={cn(
        "flex items-center gap-1 rounded-sm bg-background px-2 py-1.5 ps-7 text-sm transition-colors hover:bg-accent group-data-[folder=true]:ps-0 group-data-[selected=true]:bg-accent group-data-[selected=true]:text-accent-foreground group-data-[drag-target=true]:bg-accent group-data-[search-match=true]:!bg-blue-400/20 group-focus-visible:ring-[3px] group-focus-visible:ring-ring/50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      data-slot="tree-item-label"
      {...props}
    >
      {item.isFolder() && (
        <ChevronDownIcon className="size-4 -rotate-90 text-muted-foreground transition-transform group-aria-expanded:rotate-0" />
      )}
      {children ||
        (typeof item.getItemName === "function" ? item.getItemName() : null)}
    </span>
  )
}

export interface TreeDragLineProps extends React.HTMLAttributes<HTMLDivElement> {}

function TreeDragLine({ className, ...props }: TreeDragLineProps) {
  const { tree } = useTreeContext()

  if (!tree || typeof tree.getDragLineStyle !== "function") {
    return null
  }

  const dragLine = tree.getDragLineStyle()
  return (
    <div
      className={cn(
        "absolute -mt-px z-30 h-0.5 w-[unset] bg-primary before:absolute before:-top-[3px] before:left-0 before:size-2 before:rounded-full before:border-2 before:border-primary before:bg-background",
        className
      )}
      style={dragLine}
      {...props}
    />
  )
}

export { Tree, TreeItem, TreeItemLabel, TreeDragLine }
