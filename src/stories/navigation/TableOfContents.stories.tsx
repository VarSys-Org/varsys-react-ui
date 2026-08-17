import type { Meta, StoryObj } from "@storybook/react"
import { TableOfContents } from "../../components/navigation/table-of-contents"

const meta: Meta<typeof TableOfContents> = {
  title: "Navigation/TableOfContents",
  component: TableOfContents,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const items = [
  { id: "getting-started", label: "Getting started" },
  {
    id: "installation",
    label: "Installation",
    children: [
      { id: "requirements", label: "Requirements" },
      { id: "setup", label: "Setup" },
      { id: "theming", label: "Theming" },
    ],
  },
  { id: "components", label: "Components" },
  { id: "api", label: "API reference" },
  { id: "changelog", label: "Changelog" },
]

function Demo() {
  return (
    <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-[280px_1fr]">
      <TableOfContents items={items} />
      <div className="space-y-40">
        <section id="getting-started" className="scroll-mt-24">
          <h2 className="text-2xl font-bold">Getting started</h2>
          <p className="mt-2 text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </section>
        <section id="requirements" className="scroll-mt-24">
          <h2 className="text-2xl font-bold">Requirements</h2>
          <p className="mt-2 text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </section>
        <section id="setup" className="scroll-mt-24">
          <h2 className="text-2xl font-bold">Setup</h2>
          <p className="mt-2 text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </section>
        <section id="theming" className="scroll-mt-24">
          <h2 className="text-2xl font-bold">Theming</h2>
          <p className="mt-2 text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </section>
        <section id="components" className="scroll-mt-24">
          <h2 className="text-2xl font-bold">Components</h2>
          <p className="mt-2 text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </section>
        <section id="api" className="scroll-mt-24">
          <h2 className="text-2xl font-bold">API reference</h2>
          <p className="mt-2 text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </section>
        <section id="changelog" className="scroll-mt-24">
          <h2 className="text-2xl font-bold">Changelog</h2>
          <p className="mt-2 text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </section>
      </div>
    </div>
  )
}

export const Default: Story = {
  render: () => <Demo />,
}

export const Static: Story = {
  render: () => (
    <div className="w-full max-w-xs p-8">
      <TableOfContents items={items} activeId="installation" />
    </div>
  ),
}

export const Expanded: Story = {
  render: () => (
    <div className="w-full max-w-xs p-8">
      <TableOfContents items={items} collapsible={false} />
    </div>
  ),
}