"use client"

import * as React from "react"
import { MessageCircle, Send, ThumbsUp } from "lucide-react"
import { cn } from "@/lib/cn"

export interface CommentUser {
  id: string
  name: string
  avatar?: string
}

export interface CommentItem {
  id: string
  author: CommentUser
  content: string
  timestamp: string
  likes?: number
  liked?: boolean
  replies?: CommentItem[]
}

export interface CommentsProps {
  comments: CommentItem[]
  currentUser?: CommentUser
  title?: string
  emptyText?: string
  placeholder?: string
  maxDepth?: number
  onSubmit?: (content: string, parentId?: string) => void
  onLike?: (commentId: string) => void
  className?: string
}

function Avatar({
  user,
  className,
}: {
  user: CommentUser
  className?: string
}) {
  const initials = user.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()

  return (
    <span
      className={cn(
        "flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary/10 text-xs font-semibold text-primary ring-1 ring-border",
        className,
      )}
    >
      {user.avatar ? (
        <img src={user.avatar} alt={user.name} className="size-full object-cover" />
      ) : (
        initials
      )}
    </span>
  )
}

function CommentCard({
  comment,
  currentUser,
  maxDepth,
  onSubmit,
  onLike,
  depth = 0,
}: {
  comment: CommentItem
  currentUser?: CommentUser
  maxDepth: number
  onSubmit?: (content: string, parentId?: string) => void
  onLike?: (commentId: string) => void
  depth?: number
}) {
  const [replying, setReplying] = React.useState(false)
  const [replyText, setReplyText] = React.useState("")
  const [liked, setLiked] = React.useState(Boolean(comment.liked))
  const replyRef = React.useRef<HTMLTextAreaElement>(null)

  const likes = (comment.likes ?? 0) + (liked ? 1 : 0)

  const toggleLike = () => {
    setLiked((prev) => !prev)
    onLike?.(comment.id)
  }

  const submitReply = () => {
    const content = replyText.trim()
    if (!content) return
    onSubmit?.(content, comment.id)
    setReplyText("")
    setReplying(false)
  }

  const canReply = depth < maxDepth && currentUser != null

  return (
    <li className="flex gap-3">
      <Avatar user={comment.author} />
      <div className="min-w-0 flex-1">
        <div className="rounded-lg border border-border bg-card/60 px-3 py-2.5">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="text-sm font-semibold text-foreground">
              {comment.author.name}
            </span>
            <span className="text-xs text-muted-foreground">{comment.timestamp}</span>
          </div>
          <p className="mt-1 text-sm whitespace-pre-wrap text-muted-foreground">
            {comment.content}
          </p>
        </div>
        <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
          <button
            type="button"
            onClick={toggleLike}
            className={cn(
              "inline-flex items-center gap-1 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              liked && "text-primary",
            )}
          >
            <ThumbsUp className={cn("size-3.5", liked && "fill-current")} />
            {likes > 0 ? likes : "Like"}
          </button>
          {canReply ? (
            <button
              type="button"
              onClick={() => {
                setReplying((prev) => !prev)
                setTimeout(() => replyRef.current?.focus(), 0)
              }}
              className="inline-flex items-center gap-1 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <MessageCircle className="size-3.5" />
              Reply
            </button>
          ) : null}
        </div>

        {replying && currentUser ? (
          <div className="mt-2 flex gap-2">
            <Avatar user={currentUser} className="size-7 text-[10px]" />
            <div className="flex flex-1 items-start gap-2">
              <textarea
                ref={replyRef}
                value={replyText}
                onChange={(event) => setReplyText(event.target.value)}
                placeholder={`Reply to ${comment.author.name}...`}
                rows={2}
                className="flex-1 resize-none rounded-lg border border-input bg-transparent px-3 py-2 text-sm outline-none transition-colors focus:border-ring focus:ring-3 focus:ring-ring/50"
              />
              <button
                type="button"
                onClick={submitReply}
                aria-label="Send reply"
                className="inline-flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
                disabled={!replyText.trim()}
              >
                <Send className="size-4" />
              </button>
            </div>
          </div>
        ) : null}

        {comment.replies && comment.replies.length > 0 ? (
          <ul className="mt-3 space-y-3 border-l border-border pl-4">
            {comment.replies.map((reply) => (
              <CommentCard
                key={reply.id}
                comment={reply}
                currentUser={currentUser}
                maxDepth={maxDepth}
                onSubmit={onSubmit}
                onLike={onLike}
                depth={depth + 1}
              />
            ))}
          </ul>
        ) : null}
      </div>
    </li>
  )
}

export function Comments({
  comments,
  currentUser,
  title = "Comments",
  emptyText = "No comments yet. Be the first to start the conversation.",
  placeholder = "Add a comment...",
  maxDepth = 2,
  onSubmit,
  onLike,
  className,
}: CommentsProps) {
  const [items, setItems] = React.useState(comments)
  const [text, setText] = React.useState("")
  const inputRef = React.useRef<HTMLTextAreaElement>(null)

  React.useEffect(() => setItems(comments), [comments])

  const addComment = (content: string, parentId?: string) => {
    const newComment: CommentItem = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      author: currentUser ?? { id: "anonymous", name: "Anonymous" },
      content,
      timestamp: "Just now",
      likes: 0,
    }

    setItems((prev) => {
      if (!parentId) return [newComment, ...prev]
      const attach = (list: CommentItem[]): CommentItem[] =>
        list.map((item) =>
          item.id === parentId
            ? { ...item, replies: [...(item.replies ?? []), newComment] }
            : { ...item, replies: item.replies ? attach(item.replies) : undefined },
        )
      return attach(prev)
    })

    onSubmit?.(content, parentId)
  }

  const submitComment = () => {
    const content = text.trim()
    if (!content) return
    addComment(content)
    setText("")
    inputRef.current?.focus()
  }

  return (
    <section
      aria-label={title}
      className={cn("w-full max-w-2xl", className)}
    >
      <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
        <MessageCircle className="size-5" />
        {title}
        <span className="text-sm font-normal text-muted-foreground">
          ({items.length})
        </span>
      </h2>

      {currentUser ? (
        <div className="mt-4 flex gap-3">
          <Avatar user={currentUser} />
          <div className="flex flex-1 flex-col gap-2">
            <textarea
              ref={inputRef}
              value={text}
              onChange={(event) => setText(event.target.value)}
              onKeyDown={(event) => {
                if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
                  submitComment()
                }
              }}
              placeholder={placeholder}
              rows={3}
              className="w-full resize-none rounded-lg border border-input bg-transparent px-3 py-2 text-sm outline-none transition-colors focus:border-ring focus:ring-3 focus:ring-ring/50"
            />
            <div className="flex justify-end">
              <button
                type="button"
                onClick={submitComment}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
                disabled={!text.trim()}
              >
                <Send className="size-4" />
                Comment
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {items.length === 0 ? (
        <div className="mt-6 rounded-lg border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
          {emptyText}
        </div>
      ) : (
        <ul className="mt-6 space-y-4">
          {items.map((comment) => (
            <CommentCard
              key={comment.id}
              comment={comment}
              currentUser={currentUser}
              maxDepth={maxDepth}
              onSubmit={onSubmit}
              onLike={onLike}
            />
          ))}
        </ul>
      )}
    </section>
  )
}

export default Comments