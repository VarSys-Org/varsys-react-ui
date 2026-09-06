"use client"

import * as React from "react"
import { cn } from "@/lib/cn"

export interface ContactFormProps
  extends Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit"> {
  submitLabel?: string
  successTitle?: string
  successMessage?: string
  onSubmit?: React.FormEventHandler<HTMLFormElement>
  onSubmitted?: (values: {
    name: string
    email: string
    message: string
  }) => void
}

export function ContactForm({
  submitLabel = "Send Message",
  successTitle = "Message sent!",
  successMessage = "Thanks for reaching out — we'll get back to you shortly.",
  onSubmitted,
  className,
  onSubmit,
  ...props
}: ContactFormProps) {
  const [submitted, setSubmitted] = React.useState(false)

  if (submitted) {
    return (
      <div
        className={cn(
          "mx-auto max-w-md space-y-3 rounded-lg border border-border bg-muted p-6 text-center",
          className
        )}
      >
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto size-12 text-emerald-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <h3 className="text-lg font-semibold text-foreground">{successTitle}</h3>
        <p className="text-sm text-muted-foreground">{successMessage}</p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="inline-flex rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form
      action="#"
      className={cn(
        "mx-auto max-w-md space-y-4 rounded-lg border border-border bg-muted p-6",
        className
      )}
      onSubmit={(event) => {
        event.preventDefault()
        const form = new FormData(event.currentTarget)
        const values = {
          name: String(form.get("name") ?? ""),
          email: String(form.get("email") ?? ""),
          message: String(form.get("message") ?? ""),
        }
        onSubmit?.(event)
        onSubmitted?.(values)
        setSubmitted(true)
      }}
      {...props}
    >
      <div>
        <label className="block text-sm font-medium text-foreground" htmlFor="name">
          Name
        </label>
        <input
          className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground shadow-sm outline-none transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground" htmlFor="email">
          Email
        </label>
        <input
          className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground shadow-sm outline-none transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
          id="email"
          name="email"
          type="email"
          placeholder="Your email"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground" htmlFor="message">
          Message
        </label>
        <textarea
          className="mt-1 w-full resize-none rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground shadow-sm outline-none transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
          id="message"
          name="message"
          rows={4}
          placeholder="Your message"
          required
        />
      </div>

      <button
        className="block w-full rounded-lg border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-indigo-600"
        type="submit"
      >
        {submitLabel}
      </button>
    </form>
  )
}

export default ContactForm