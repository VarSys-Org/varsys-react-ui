import type { Meta, StoryObj } from "@storybook/react"
import { Bold, Copy, Italic, Link, Share2 } from "lucide-react"
import { useCallback, useRef } from "react"
import {
  SelectionToolbar,
  SelectionToolbarItem,
  SelectionToolbarSeparator,
} from "../../components/overlays/selection-toolbar"

const meta: Meta<typeof SelectionToolbar> = {
  title: "Overlays/SelectionToolbar",
  component: SelectionToolbar,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const Demo = () => {
      const containerRef = useRef<HTMLDivElement>(null)

      const wrapSelection = useCallback((tagName: string) => {
        const selection = window.getSelection()
        if (!selection || selection.rangeCount === 0) return

        const range = selection.getRangeAt(0)
        const selectedText = range.toString()
        if (!selectedText) return

        const wrapper = document.createElement(tagName)
        try {
          range.surroundContents(wrapper)
          selection.removeAllRanges()
          const newRange = document.createRange()
          newRange.selectNodeContents(wrapper)
          selection.addRange(newRange)
        } catch {
          wrapper.textContent = selectedText
          range.deleteContents()
          range.insertNode(wrapper)
          selection.removeAllRanges()
          const newRange = document.createRange()
          newRange.selectNodeContents(wrapper)
          selection.addRange(newRange)
        }
      }, [])

      const onBold = useCallback(() => wrapSelection("strong"), [wrapSelection])
      const onItalic = useCallback(() => wrapSelection("em"), [wrapSelection])

      const onLink = useCallback(() => {
        const selection = window.getSelection()
        if (!selection || selection.rangeCount === 0) return

        const url = prompt("Enter URL:")
        if (!url) return

        const range = selection.getRangeAt(0)
        const link = document.createElement("a")
        link.href = url
        link.className = "text-primary underline hover:text-primary/80"

        try {
          range.surroundContents(link)
          selection.removeAllRanges()
          const newRange = document.createRange()
          newRange.selectNodeContents(link)
          selection.addRange(newRange)
        } catch {
          link.textContent = range.toString()
          range.deleteContents()
          range.insertNode(link)
          selection.removeAllRanges()
          const newRange = document.createRange()
          newRange.selectNodeContents(link)
          selection.addRange(newRange)
        }
      }, [])

      const onCopy = useCallback((text: string) => {
        navigator.clipboard.writeText(text)
        const selection = window.getSelection()
        if (selection) selection.removeAllRanges()
      }, [])

      const onShare = useCallback((text: string) => {
        if (navigator.share) navigator.share({ text })
        const selection = window.getSelection()
        if (selection) selection.removeAllRanges()
      }, [])

      return (
        <div className="flex min-h-96 w-full items-center justify-center bg-background p-10">
          <div
            ref={containerRef}
            contentEditable
            suppressContentEditableWarning
            className="max-w-2xl space-y-4 rounded-lg border bg-card p-8 text-card-foreground outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            <h2 className="text-2xl font-semibold">
              Medium-style text selection
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Select any text in this area to see the floating toolbar appear.
              The toolbar automatically positions itself above the selection
              and includes common formatting options like bold, italic, and
              link, as well as utility actions like copy and share.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Try selecting text across multiple lines or near the edges of the
              viewport. The menu will automatically adjust its position to stay
              visible and accessible.
            </p>

            <SelectionToolbar container={containerRef}>
              <SelectionToolbarItem onSelect={onBold}>
                <Bold />
              </SelectionToolbarItem>
              <SelectionToolbarItem onSelect={onItalic}>
                <Italic />
              </SelectionToolbarItem>
              <SelectionToolbarItem onSelect={onLink}>
                <Link />
              </SelectionToolbarItem>
              <SelectionToolbarSeparator />
              <SelectionToolbarItem onSelect={onCopy}>
                <Copy />
              </SelectionToolbarItem>
              <SelectionToolbarItem onSelect={onShare}>
                <Share2 />
              </SelectionToolbarItem>
            </SelectionToolbar>
          </div>
        </div>
      )
    }
    return <Demo />
  },
}

export const BottomAligned: Story = {
  render: () => {
    const Demo = () => {
      const containerRef = useRef<HTMLDivElement>(null)

      return (
        <div className="flex min-h-96 w-full items-center justify-center bg-background p-10">
          <div
            ref={containerRef}
            contentEditable
            suppressContentEditableWarning
            className="max-w-xl space-y-4 rounded-lg border bg-card p-8 text-card-foreground outline-none"
          >
            <h2 className="text-xl font-semibold">Bottom toolbar</h2>
            <p className="leading-relaxed text-muted-foreground">
              Select text to show the toolbar anchored below the selection
              instead of above it.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              The <code className="rounded bg-muted px-1 py-0.5">side</code>{" "}
              prop lets you control where the toolbar appears relative to the
              selection range.
            </p>

            <SelectionToolbar container={containerRef} side="bottom">
              <SelectionToolbarItem onSelect={(text) => console.log("copy", text)}>
                <Copy />
              </SelectionToolbarItem>
              <SelectionToolbarSeparator />
              <SelectionToolbarItem onSelect={(text) => console.log("share", text)}>
                <Share2 />
              </SelectionToolbarItem>
            </SelectionToolbar>
          </div>
        </div>
      )
    }
    return <Demo />
  },
}