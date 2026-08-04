import * as React from "react"
import { cn } from "@/lib/utils"

export interface ContactSectionProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "onSubmit"> {
  eyebrow?: string
  title?: string
  description?: string
  submitLabel?: string
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
}

export function ContactSection({
  eyebrow = "Contact",
  title = "Get in touch",
  description = "We'd love to hear from you! Please fill out the form below.",
  submitLabel = "Submit",
  onSubmit,
  className,
}: ContactSectionProps) {
  return (
    <main className={cn("py-14", className)}>
      <div className="mx-auto max-w-screen-xl px-4 text-gray-600 md:px-8">
        <div className="mx-auto max-w-lg space-y-3 sm:text-center">
          <h3 className="font-semibold text-indigo-600">{eyebrow}</h3>
          <p className="text-3xl font-semibold text-foreground sm:text-4xl">
            {title}
          </p>
          {description ? <p>{description}</p> : null}
        </div>
        <div className="mx-auto mt-12 max-w-lg">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              onSubmit?.(e)
            }}
            className="space-y-5"
          >
            <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
              <div>
                <label className="font-medium">First name</label>
                <input
                  type="text"
                  required
                  className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 outline-none shadow-sm focus:border-indigo-600"
                />
              </div>
              <div>
                <label className="font-medium">Last name</label>
                <input
                  type="text"
                  required
                  className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 outline-none shadow-sm focus:border-indigo-600"
                />
              </div>
            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                required
                className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 outline-none shadow-sm focus:border-indigo-600"
              />
            </div>
            <div>
              <label className="font-medium">Phone number</label>
              <div className="relative mt-2">
                <div className="absolute inset-y-0 left-3 my-auto flex h-6 items-center border-r pr-2">
                  <select className="h-full rounded-lg bg-transparent text-sm outline-none">
                    <option>US</option>
                    <option>ES</option>
                    <option>MR</option>
                  </select>
                </div>
                <input
                  type="number"
                  placeholder="+1 (555) 000-000"
                  required
                  className="w-full appearance-none rounded-lg border bg-transparent py-2 pr-3 pl-[4.5rem] text-gray-500 outline-none shadow-sm focus:border-indigo-600"
                />
              </div>
            </div>
            <div>
              <label className="font-medium">Message</label>
              <textarea
                required
                className="mt-2 h-36 w-full resize-none appearance-none rounded-lg border bg-transparent px-3 py-2 text-gray-500 outline-none shadow-sm focus:border-indigo-600"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white duration-150 hover:bg-indigo-500 active:bg-indigo-600"
            >
              {submitLabel}
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default ContactSection
