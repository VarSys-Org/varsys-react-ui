import * as React from "react"
import { cn } from "@/lib/cn"
import { useEditor, EditorContent, type Editor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Underline from "@tiptap/extension-underline"
import Placeholder from "@tiptap/extension-placeholder"
import Link from "@tiptap/extension-link"

export interface TextEditorProps extends React.HTMLAttributes<HTMLDivElement> {
  placeholder?: string
  defaultValue?: string
}

const btnCls =
  "size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full text-foreground hover:bg-muted focus:outline-none focus:bg-muted disabled:opacity-50 disabled:pointer-events-none"

export function TextEditor({
  placeholder = "Add a message, if you'd like.",
  defaultValue = "<p>Start editing…</p>",
  className,
}: TextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Placeholder.configure({
        placeholder,
        emptyNodeClass: "text-muted-foreground",
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: { class: "text-primary underline" },
      }),
    ],
    content: defaultValue,
  })

  if (!editor) return null

  const action = (fn: (editor: Editor) => void) => () => {
    fn(editor)
    editor.chain().focus().run()
  }

  return (
    <div
      className={cn(
        "bg-background border border-border rounded-xl overflow-hidden",
        className
      )}
    >
      <div className="sticky top-0 bg-background flex align-middle gap-x-0.5 border-b border-border p-2 flex-wrap">
        <button
          type="button"
          className={cn(btnCls, editor.isActive("bold") && "bg-muted")}
          onClick={action((e) => e.chain().toggleBold().run())}
          aria-label="Bold"
        >
          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 12a4 4 0 0 0 0-8H6v8" /><path d="M15 20a4 4 0 0 0 0-8H6v8Z" /></svg>
        </button>
        <button
          type="button"
          className={cn(btnCls, editor.isActive("italic") && "bg-muted")}
          onClick={action((e) => e.chain().toggleItalic().run())}
          aria-label="Italic"
        >
          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" x2="10" y1="4" y2="4" /><line x1="14" x2="5" y1="20" y2="20" /><line x1="15" x2="9" y1="4" y2="20" /></svg>
        </button>
        <button
          type="button"
          className={cn(btnCls, editor.isActive("underline") && "bg-muted")}
          onClick={action((e) => e.chain().toggleUnderline().run())}
          aria-label="Underline"
        >
          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 4v6a6 6 0 0 0 12 0V4" /><line x1="4" x2="20" y1="20" y2="20" /></svg>
        </button>
        <button
          type="button"
          className={cn(btnCls, editor.isActive("strike") && "bg-muted")}
          onClick={action((e) => e.chain().toggleStrike().run())}
          aria-label="Strikethrough"
        >
          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14-1 1H2" /><path d="M16 16c.4.7.9 1.2 1.5 1.5.7.4 1.5.5 2.5.5s1.9-.2 2.5-.8c.6-.5.9-1.2.9-2 0-.6-.2-1.1-.5-1.5-.4-.5-.9-1-1.5-1.5L17 11" /><path d="M7 8c-.4-.7-.9-1.2-1.5-1.5C4.8 6.1 4 6 3 6s-1.9.2-2.5.8C0 7.3-.1 8 0 8.7c0 .6.2 1.1.5 1.5.4.5.9 1 1.5 1.5L7 12" /><path d="M7 15.5c0 1 .4 1.8 1.2 2.5.8.7 1.8 1 3.2 1" /><path d="M8 8.5c-.2-1-.6-1.8-1.2-2.5C5.9 5.3 4.9 5 3.5 5" /><line x1="2" x2="22" y1="12" y2="12" /></svg>
        </button>
        <span className="border-s border-border mx-1"></span>
        <button
          type="button"
          className={cn(btnCls, editor.isActive("bulletList") && "bg-muted")}
          onClick={action((e) => e.chain().toggleBulletList().run())}
          aria-label="Bullet list"
        >
          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="9" x2="21" y1="6" y2="6" /><line x1="9" x2="21" y1="12" y2="12" /><line x1="9" x2="21" y1="18" y2="18" /><circle cx="5" cy="6" r="1" /><circle cx="5" cy="12" r="1" /><circle cx="5" cy="18" r="1" /></svg>
        </button>
        <button
          type="button"
          className={cn(btnCls, editor.isActive("orderedList") && "bg-muted")}
          onClick={action((e) => e.chain().toggleOrderedList().run())}
          aria-label="Ordered list"
        >
          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="10" x2="21" y1="6" y2="6" /><line x1="10" x2="21" y1="12" y2="12" /><line x1="10" x2="21" y1="18" y2="18" /><path d="M4 6h1v4" /><path d="M4 10h2" /><path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" /></svg>
        </button>
        <button
          type="button"
          className={cn(btnCls, editor.isActive("blockquote") && "bg-muted")}
          onClick={action((e) => e.chain().toggleBlockquote().run())}
          aria-label="Blockquote"
        >
          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" /><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" /></svg>
        </button>
        <button
          type="button"
          className={cn(btnCls, editor.isActive("link") && "bg-muted")}
          onClick={() => {
            const url = window.prompt(
              "Link URL",
              (editor.getAttributes("link").href as string) ?? "https://"
            )
            if (url === null) return
            if (url === "") {
              editor.chain().focus().extendMarkRange("link").unsetLink().run()
            } else {
              editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run()
            }
          }}
          aria-label="Link"
        >
          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
        </button>
      </div>

      <div className="p-4">
        <EditorContent
          editor={editor}
          className="tiptap prose prose-stone max-w-none [&_ul]:list-disc [&_ul]:ps-5 [&_ol]:list-decimal [&_ol]:ps-5 [&_blockquote]:border-s-4 [&_blockquote]:ps-4 [&_blockquote]:text-muted-foreground"
        />
      </div>
    </div>
  )
}

export default TextEditor
