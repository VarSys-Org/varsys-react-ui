import type { Meta, StoryObj } from "@storybook/react"
import { Searchbox } from "../../components/overlays/searchbox"

const meta: Meta<typeof Searchbox> = {
  title: "Overlays/Searchbox",
  component: Searchbox,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const results = [
  { title: "Getting started", category: "Docs", description: "Installation guide" },
  { title: "Components", category: "Docs", description: "All components" },
  { title: "Theming", category: "Docs", description: "Tailwind config" },
  { title: "Changelog", category: "Blog", description: "Latest updates" },
]

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <p className="text-sm text-muted-foreground">
        Press <kbd className="rounded border px-1.5 py-0.5 text-xs">/</kbd> to open the
        search dialog.
      </p>
      <Searchbox results={results} />
    </div>
  ),
}
