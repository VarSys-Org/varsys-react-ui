"use client"

import * as React from "react"
import { Mail, Send } from "lucide-react"

import { cn } from "@/lib/cn"

export interface NewsletterCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSubmit"> {
  /** Card heading. */
  title?: string
  /** Short supporting description. */
  description?: string
  /** Placeholder text for the email input. */
  placeholder?: string
  /** Submit button label. */
  buttonLabel?: string
  /** Message shown after a successful submit. */
  successMessage?: string
  /** Small print rendered below the form (e.g. privacy note). */
  footnote?: string
  /** Whether the card is in a submitting state. */
  submitting?: boolean
  /** Called on form submit with the entered email. */
  onSubscribe?: (email: string) => void
  /** Show a decorative mail icon. */
  showIcon?: boolean
}

export function NewsletterCard({
  title = "Subscribe to our newsletter",
  description = "Get the latest updates and insights delivered straight to your inbox.",
  placeholder = "Enter your email",
  buttonLabel = "Subscribe",
  successMessage = "Thanks for subscribing!",
  footnote,
  submitting = false,
  onSubscribe,
  showIcon = true,
  className,
  ...props
}: NewsletterCardProps) {
  const [email, setEmail] = React.useState("")
  const [submitted, setSubmitted] = React.useState(false)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (!email.trim()) return
    onSubscribe?.(email.trim())
    setSubmitted(true)
  }

  return (
    <div
      data-slot="newsletter-card"
      className={cn(
        "w-full rounded-2xl border border-border bg-card p-8 shadow-sm",
        className,
      )}
      {...props}
    >
      {showIcon && (
        <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Mail aria-hidden="true" className="size-6" />
        </div>
      )}
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      {description && (
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      )}

      {submitted ? (
        <p className="mt-6 rounded-lg bg-primary/10 px-4 py-3 text-sm font-medium text-primary">
          {successMessage}
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={placeholder}
            className="h-11 w-full flex-1 rounded-lg border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
          />
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-foreground px-5 text-sm font-medium text-background transition-colors hover:opacity-90 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
          >
            <Send aria-hidden="true" className="size-4" />
            {buttonLabel}
          </button>
        </form>
      )}

      {footnote && <p className="mt-4 text-xs text-muted-foreground">{footnote}</p>}
    </div>
  )
}

export default NewsletterCard
