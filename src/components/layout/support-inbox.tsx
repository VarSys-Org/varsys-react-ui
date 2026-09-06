"use client"

import * as React from "react"
import { cn } from "@/lib/cn"

export type TicketStatus = "Open" | "Pending" | "Closed"
export type TicketPriority = "Low" | "Medium" | "High"

export interface SupportTicket {
  id: string
  title: string
  requester: string
  status: TicketStatus
  priority: TicketPriority
  updated: string
}

export interface SupportQueue {
  label: string
  count?: number
  active?: boolean
}

export interface SupportTag {
  label: string
  color: string
}

export interface SupportInboxProps extends React.HTMLAttributes<HTMLDivElement> {
  brand?: string
  queues?: SupportQueue[]
  tags?: SupportTag[]
  tickets?: SupportTicket[]
  defaultQueue?: string
  searchPlaceholder?: string
  newTicketLabel?: string
  onNewTicket?: () => void
}

const statusClasses: Record<TicketStatus, string> = {
  Open: "bg-blue-100 text-blue-700",
  Pending: "bg-amber-100 text-amber-700",
  Closed: "bg-gray-100 text-gray-600",
}

const priorityClasses: Record<TicketPriority, string> = {
  Low: "bg-gray-100 text-gray-600",
  Medium: "bg-amber-100 text-amber-700",
  High: "bg-red-100 text-red-700",
}

const defaultTickets: SupportTicket[] = [
  {
    id: "#4821",
    title: "Can't export invoices as CSV",
    requester: "Marcus Boyle",
    status: "Open",
    priority: "High",
    updated: "12 minutes ago",
  },
  {
    id: "#4819",
    title: "Team seats not syncing after upgrade",
    requester: "Priya Natarajan",
    status: "Open",
    priority: "High",
    updated: "41 minutes ago",
  },
  {
    id: "#4812",
    title: "Question about annual billing discount",
    requester: "Owen Baptiste",
    status: "Pending",
    priority: "Low",
    updated: "3 hours ago",
  },
  {
    id: "#4790",
    title: "Feature request: dark mode for reports",
    requester: "Freya Lindqvist",
    status: "Pending",
    priority: "Low",
    updated: "1 day ago",
  },
]

const defaultQueues: SupportQueue[] = [
  { label: "My tickets", count: 4, active: true },
  { label: "Unassigned", count: 11 },
  { label: "All open", count: 37 },
  { label: "Closed" },
]

const defaultTags: SupportTag[] = [
  { label: "Billing", color: "bg-rose-500" },
  { label: "Bug", color: "bg-amber-500" },
  { label: "Onboarding", color: "bg-emerald-500" },
]

export function SupportInbox({
  brand = "Orbitly",
  queues = defaultQueues,
  tags = defaultTags,
  tickets = defaultTickets,
  defaultQueue,
  searchPlaceholder = "Search tickets",
  newTicketLabel = "New ticket",
  onNewTicket,
  className,
}: SupportInboxProps) {
  const [activeQueue, setActiveQueue] = React.useState(
    defaultQueue ?? queues.find((q) => q.active)?.label ?? queues[0]?.label
  )
  const [activeFilter, setActiveFilter] = React.useState<TicketStatus | "All">("All")
  const [query, setQuery] = React.useState("")
  const [railOpen, setRailOpen] = React.useState(false)

  const filtered = tickets.filter((ticket) => {
    const matchesFilter = activeFilter === "All" || ticket.status === activeFilter
    const q = query.trim().toLowerCase()
    const matchesQuery =
      q.length === 0 ||
      ticket.title.toLowerCase().includes(q) ||
      ticket.requester.toLowerCase().includes(q) ||
      ticket.id.toLowerCase().includes(q)
    return matchesFilter && matchesQuery
  })

  return (
    <div
      className={cn(
        "flex h-[640px] flex-col overflow-hidden rounded-xl border border-border bg-background text-foreground",
        className
      )}
    >
      <header className="flex h-14 shrink-0 items-center gap-4 border-b border-border bg-background px-4 sm:px-6">
        <button
          type="button"
          aria-expanded={railOpen}
          aria-controls="queue-rail"
          onClick={() => setRailOpen((v) => !v)}
          className="cursor-pointer rounded-md p-2 text-muted-foreground transition hover:bg-muted lg:hidden"
        >
          <span className="sr-only">Toggle queues</span>
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            className="size-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        <p className="text-sm font-semibold">
          {brand} <span className="font-normal text-muted-foreground">/ Support</span>
        </p>

        <div className="ml-4 hidden max-w-sm flex-1 sm:block">
          <div className="relative">
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <input
              type="search"
              aria-label="Search tickets"
              placeholder={searchPlaceholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-md border border-border bg-background py-1.5 pl-9 text-sm shadow-xs outline-none transition-colors focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20"
            />
          </div>
        </div>

        <div className="ml-auto flex items-center gap-3">
          <button
            type="button"
            onClick={onNewTicket}
            className="hidden rounded-md bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-indigo-700 sm:block"
          >
            {newTicketLabel}
          </button>

          <div className="flex size-8 items-center justify-center rounded-full bg-muted text-xs font-semibold text-muted-foreground">
            JP
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {railOpen ? (
          <button
            type="button"
            aria-hidden="true"
            onClick={() => setRailOpen(false)}
            className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          />
        ) : null}

        <nav
          id="queue-rail"
          aria-label="Queues"
          className={cn(
            "fixed inset-y-14 start-0 z-40 w-56 -translate-x-full overflow-y-auto border-e border-border bg-background p-3 transition-transform duration-300 lg:static lg:z-auto lg:translate-x-0",
            railOpen && "translate-x-0"
          )}
        >
          <ul className="space-y-1">
            {queues.map((queue) => {
              const isActive = queue.label === activeQueue
              return (
                <li key={queue.label}>
                  <button
                    type="button"
                    onClick={() => setActiveQueue(queue.label)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-indigo-50 text-indigo-700"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    {queue.label}
                    {queue.count !== undefined ? (
                      <span
                        className={cn(
                          "rounded-full px-2 py-0.5 text-xs",
                          isActive ? "bg-white text-indigo-700" : "bg-muted text-muted-foreground"
                        )}
                      >
                        {queue.count}
                      </span>
                    ) : null}
                  </button>
                </li>
              )
            })}
          </ul>

          <p className="mt-6 px-3 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Tags
          </p>
          <ul className="mt-2 space-y-1">
            {tags.map((tag) => (
              <li key={tag.label}>
                <button
                  type="button"
                  className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <span className={cn("size-2 rounded-full", tag.color)} />
                  {tag.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <main className="flex-1 overflow-y-auto">
          <div className="border-b border-border bg-background px-4 py-4 sm:px-6">
            <h1 className="text-lg font-semibold">{activeQueue}</h1>

            <div className="mt-3 flex gap-1">
              {(["All", "Open", "Pending", "Closed"] as const).map((filter) => {
                const isActive = activeFilter === filter
                return (
                  <button
                    key={filter}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveFilter(filter)}
                    className={cn(
                      "rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
                      isActive
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:bg-muted"
                    )}
                  >
                    {filter}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="p-4 sm:p-6">
            <div className="overflow-hidden rounded-lg border border-border bg-background">
              <table className="min-w-full divide-y divide-border">
                <thead className="bg-muted/50">
                  <tr className="*:px-4 *:py-3 *:text-left *:text-xs *:font-medium *:text-muted-foreground">
                    <th scope="col">Ticket</th>
                    <th scope="col" className="hidden sm:table-cell">
                      Requester
                    </th>
                    <th scope="col">Status</th>
                    <th scope="col" className="hidden md:table-cell">
                      Priority
                    </th>
                    <th scope="col" className="hidden md:table-cell">
                      Updated
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-border">
                  {filtered.map((ticket, index) => (
                    <tr
                      key={ticket.id}
                      className={cn("cursor-pointer transition-colors hover:bg-muted/60", index === 1 && "bg-indigo-50/60 hover:bg-indigo-50")}
                    >
                      <td className="px-4 py-3">
                        <p className="text-sm font-medium">{ticket.title}</p>
                        <p className="text-xs text-muted-foreground">{ticket.id}</p>
                      </td>
                      <td className="hidden px-4 py-3 text-sm text-muted-foreground sm:table-cell">
                        {ticket.requester}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={cn(
                            "rounded-full px-2.5 py-0.5 text-xs",
                            statusClasses[ticket.status]
                          )}
                        >
                          {ticket.status}
                        </span>
                      </td>
                      <td className="hidden px-4 py-3 md:table-cell">
                        <span
                          className={cn(
                            "rounded-full px-2.5 py-0.5 text-xs",
                            priorityClasses[ticket.priority]
                          )}
                        >
                          {ticket.priority}
                        </span>
                      </td>
                      <td className="hidden px-4 py-3 text-sm text-muted-foreground md:table-cell">
                        {ticket.updated}
                      </td>
                    </tr>
                  ))}
                  {filtered.length === 0 ? (
                    <tr>
                      <td className="px-4 py-10 text-center text-sm text-muted-foreground" colSpan={5}>
                        No tickets match your search.
                      </td>
                    </tr>
                  ) : null}
                </tbody>
              </table>
            </div>

            <nav aria-label="Pagination" className="mt-4 flex items-center justify-between">
              <p className="text-xs text-muted-foreground">
                Showing {filtered.length} of {tickets.length} tickets
              </p>

              <div className="flex gap-1">
                <button
                  type="button"
                  className="inline-flex size-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-muted"
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-3 rtl:rotate-180"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="inline-flex size-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-muted"
                >
                  <span className="sr-only">Next</span>
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-3 rtl:rotate-180"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </nav>
          </div>
        </main>
      </div>
    </div>
  )
}

export default SupportInbox