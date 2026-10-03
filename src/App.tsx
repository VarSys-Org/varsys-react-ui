import { useEffect, useMemo, useState } from "react"
import { Badge } from "./components/display/badge"
import { Input } from "./components/forms/input"

type StoryEntry = {
  id: string
  name: string
  title: string
  type: string
}

type StoryIndex = {
  entries: Record<string, StoryEntry>
}

function getStorybookUrl(path: string) {
  return `${window.location.protocol}//${window.location.hostname}:6006${path}`
}

export default function App() {
  const [entries, setEntries] = useState<StoryEntry[]>([])
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All components")
  const [selectedId, setSelectedId] = useState("")
  const [loadError, setLoadError] = useState(false)

  useEffect(() => {
    let keepResult = true

    fetch(getStorybookUrl("/index.json"))
      .then((response) => {
        if (!response.ok) throw new Error("Storybook catalog is unavailable")
        return response.json() as Promise<StoryIndex>
      })
      .then((index) => {
        if (!keepResult) return
        const stories = Object.values(index.entries)
          .filter((entry) => entry.type === "story")
          .sort((first, second) =>
            `${first.title}/${first.name}`.localeCompare(`${second.title}/${second.name}`),
          )
        setEntries(stories)
        setSelectedId(stories[0]?.id ?? "")
        setLoadError(false)
      })
      .catch(() => {
        if (keepResult) setLoadError(true)
      })

    return () => {
      keepResult = false
    }
  }, [])

  const categories = useMemo(
    () => ["All components", ...new Set(entries.map((entry) => entry.title.split("/")[0]))],
    [entries],
  )

  const visibleEntries = useMemo(() => {
    const query = search.trim().toLowerCase()
    return entries.filter((entry) => {
      const matchesCategory = category === "All components" || entry.title.startsWith(`${category}/`)
      const matchesSearch = !query || `${entry.title} ${entry.name}`.toLowerCase().includes(query)
      return matchesCategory && matchesSearch
    })
  }, [category, entries, search])

  const selectedEntry = entries.find((entry) => entry.id === selectedId)

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex min-h-screen w-full max-w-[1600px] flex-col px-4 py-5 sm:px-6 sm:py-7">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b pb-5">
          <a className="flex items-center gap-3 font-semibold tracking-tight" href="#catalog" aria-label="VarSys UI home">
            <img src="/logo.png" alt="" className="size-9 rounded-lg" />
            <span>VarSys UI</span>
          </a>
          <div className="flex items-center gap-3">
            <Badge variant={entries.length ? "secondary" : "outline"}>
              {entries.length ? `${entries.length} examples` : "Component catalog"}
            </Badge>
            <a
              href={getStorybookUrl("/")}
              className="text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              Open Storybook
            </a>
          </div>
        </header>

        <section id="catalog" className="grid flex-1 gap-5 py-5 lg:min-h-0 lg:grid-cols-[minmax(14rem,20rem)_minmax(0,1fr)]">
          <aside className="flex min-h-0 flex-col gap-3 rounded-xl border bg-card p-3">
            <div className="space-y-3">
              <div>
                <h1 className="text-xl font-semibold tracking-tight">Component browser</h1>
                <p className="mt-1 text-sm text-muted-foreground">Choose an example to render it live.</p>
              </div>
              <label htmlFor="catalog-search" className="sr-only">Search components</label>
              <Input
                id="catalog-search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search components"
              />
              <label htmlFor="catalog-category" className="sr-only">Filter by category</label>
              <select
                id="catalog-category"
                className="h-10 w-full rounded-md border bg-background px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              >
                {categories.map((item) => <option key={item}>{item}</option>)}
              </select>
            </div>

            <div className="grid max-h-64 gap-1 overflow-y-auto lg:max-h-none lg:flex-1">
              {visibleEntries.map((entry) => (
                <button
                  key={entry.id}
                  type="button"
                  className={`rounded-md px-3 py-2 text-left text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${selectedId === entry.id ? "bg-accent text-accent-foreground" : "hover:bg-muted"}`}
                  aria-current={selectedId === entry.id ? "page" : undefined}
                  onClick={() => setSelectedId(entry.id)}
                >
                  <span className="block truncate font-medium">{entry.title.split("/").slice(1).join(" / ") || entry.title}</span>
                  <span className="mt-0.5 block truncate text-xs text-muted-foreground">{entry.name}</span>
                </button>
              ))}
              {!visibleEntries.length && !loadError && (
                <p className="px-3 py-5 text-sm text-muted-foreground">No component examples match this search.</p>
              )}
            </div>
          </aside>

          <section className="flex min-h-[24rem] min-w-0 flex-col overflow-hidden rounded-xl border bg-card lg:min-h-0">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b px-4 py-3">
              <div className="min-w-0">
                <h2 className="truncate text-sm font-semibold">
                  {selectedEntry ? `${selectedEntry.title} / ${selectedEntry.name}` : "Live preview"}
                </h2>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {selectedEntry ? "Rendered by the matching Storybook example." : "The selected example appears here."}
                </p>
              </div>
            </div>
            {loadError ? (
              <div className="grid flex-1 place-items-center p-6 text-center">
                <div className="max-w-md space-y-3">
                  <h3 className="font-semibold">Start Storybook to load live examples</h3>
                  <p className="text-sm text-muted-foreground">Run <code className="rounded bg-muted px-1.5 py-1">npm run storybook</code> in another terminal, then refresh this page.</p>
                </div>
              </div>
            ) : selectedEntry ? (
              <iframe
                key={selectedEntry.id}
                title={`${selectedEntry.title} ${selectedEntry.name} preview`}
                className="min-h-[28rem] w-full flex-1 bg-background lg:min-h-0"
                src={getStorybookUrl(`/iframe.html?id=${encodeURIComponent(selectedEntry.id)}&viewMode=story`)}
              />
            ) : (
              <div className="grid flex-1 place-items-center p-6 text-sm text-muted-foreground">Loading component examples…</div>
            )}
          </section>
        </section>
      </div>
    </main>
  )
}
