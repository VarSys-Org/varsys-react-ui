import * as React from "react"
import { cn } from "@/lib/cn"

export interface SearchResult {
  title: string
  category?: string
  description?: string
  href?: string
}

export interface SearchboxProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "results"> {
  results: SearchResult[]
  shortcutKey?: string
  placeholder?: string
}

export function Searchbox({
  results,
  shortcutKey = "Slash",
  placeholder = "Search docs, blocks, plugins, or templates",
  className,
}: SearchboxProps) {
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState("")
  const inputRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    const onKeydown = (evt: KeyboardEvent) => {
      if (evt.code === shortcutKey) {
        evt.preventDefault()
        setOpen(true)
      }
      if (evt.code === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKeydown)
    return () => window.removeEventListener("keydown", onKeydown)
  }, [shortcutKey])

  React.useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return results
    return results.filter((r) =>
      [r.title, r.category, r.description].filter(Boolean).join(" ").toLowerCase().includes(q)
    )
  }, [query, results])

  if (!open) return null

  return (
    <div
      className={cn(
        "size-full fixed top-0 left-0 z-50 overflow-x-hidden overflow-y-auto bg-stone-950/10 backdrop-blur-xs",
        className
      )}
      role="dialog"
      tabIndex={-1}
      onClick={() => setOpen(false)}
    >
      <div
        className="lg:max-w-3xl lg:w-full m-3 lg:mx-auto min-h-[calc(100%-56px)] flex items-start pt-8 sm:pt-16"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-xl pointer-events-auto dark:border-neutral-700 dark:bg-neutral-900">
          <div className="flex items-center gap-x-2 border-b border-stone-200 pe-3 sm:pe-4 ps-4 sm:ps-5 py-2.5 dark:border-neutral-700">
            <div className="relative grow">
              <label className="sr-only">Search</label>
              <div className="absolute inset-y-0 left-0 z-20 flex items-center pointer-events-none">
                <svg
                  className="shrink-0 size-4 text-stone-400 dark:text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m21 21-4.34-4.34" />
                  <circle cx="11" cy="11" r="8" />
                </svg>
              </div>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="block w-full border-0 bg-transparent py-1 ps-7 pe-8 text-base sm:text-sm text-stone-900 placeholder:text-stone-400 focus:border-transparent focus:ring-0 disabled:pointer-events-none disabled:opacity-50 dark:text-neutral-100 dark:placeholder:text-neutral-500"
                type="text"
                role="combobox"
                aria-expanded="true"
                placeholder={placeholder}
              />
              {query ? (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="absolute top-1/2 right-0 -translate-y-1/2 inline-flex items-center justify-center size-7 rounded-full text-stone-400 hover:bg-stone-100 focus:outline-none focus:bg-stone-100 dark:text-neutral-500 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  aria-label="Clear input"
                >
                  <svg
                    className="shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                  </svg>
                </button>
              ) : null}
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="sm:hidden inline-flex shrink-0 items-center justify-center gap-x-1 rounded-full border border-stone-200 bg-white p-2 text-xs text-stone-600 hover:border-stone-300 hover:text-stone-800 focus:outline-none focus:border-stone-300 focus:text-stone-800 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-600 dark:hover:text-neutral-200 dark:focus:border-neutral-600 dark:focus:text-neutral-200"
            >
              <svg
                className="shrink-0 size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span className="sr-only">Close</span>
            </button>
          </div>

          <div className="px-3 sm:px-4 pt-3">
            <p className="mb-3 text-xs text-stone-500 dark:text-neutral-500">
              Explore by page type
            </p>
          </div>

          <div className="mt-0">
            <div className="max-h-[50dvh] overflow-y-auto p-1 sm:p-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-stone-100 [&::-webkit-scrollbar-thumb]:bg-stone-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-800 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-600">
              {filtered.length === 0 ? (
                <div className="flex min-h-72 flex-col items-center justify-center px-6 py-10 text-center">
                  <div className="mb-4 inline-flex size-12 items-center justify-center rounded-full bg-stone-100 text-stone-500 dark:bg-neutral-800 dark:text-neutral-400">
                    <svg
                      className="size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m21 21-4.34-4.34" />
                      <circle cx="11" cy="11" r="8" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-stone-900 dark:text-neutral-100">
                    No matching results
                  </p>
                  <p className="mt-1 text-sm text-stone-500 dark:text-neutral-400">
                    Try a page type, category, or keyword.
                  </p>
                </div>
              ) : (
                filtered.map((r, i) => (
                  <a
                    key={i}
                    href={r.href ?? "#"}
                    className="group flex gap-x-3 p-2 rounded-lg hover:bg-stone-100 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  >
                    <span className="min-w-0 grow">
                      <span className="block truncate text-sm text-stone-900 dark:text-neutral-100">
                        {r.title}
                      </span>
                      <span className="mt-0.5 flex items-center gap-x-1 truncate text-xs text-stone-500 dark:text-neutral-400">
                        <span className="truncate">{r.category}</span>
                        {r.category && r.description ? (
                          <span aria-hidden="true">•</span>
                        ) : null}
                        <span className="truncate">{r.description}</span>
                      </span>
                    </span>
                  </a>
                ))
              )}
            </div>
          </div>

          <div className="flex items-center justify-between gap-x-3 bg-stone-50 border-t border-stone-100 px-4 py-3 text-xs text-stone-500/70 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-500">
            <span className="inline-flex flex-wrap items-center gap-x-5 gap-y-1">
              <span className="inline-flex items-center gap-x-1">
                <svg
                  className="shrink-0 size-3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m3 16 4 4 4-4" />
                  <path d="M7 20V4" />
                  <path d="m21 8-4-4-4 4" />
                  <path d="M17 4v16" />
                </svg>
                <span>Select</span>
              </span>
              <span className="inline-flex items-center gap-x-1">
                <svg
                  className="shrink-0 size-3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 4v7a4 4 0 0 1-4 4H4" />
                  <path d="m9 10-5 5 5 5" />
                </svg>
                <span>Open</span>
              </span>
              <span className="inline-flex items-center gap-x-1">
                <svg
                  className="shrink-0 size-3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 4v7a4 4 0 0 1-4 4H4" />
                  <path d="m9 10-5 5 5 5" />
                </svg>
                <span>Esc</span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Searchbox
