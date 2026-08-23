import type { Meta, StoryObj } from "@storybook/react"
import { Bell } from "lucide-react"
import { NavbarUnderline } from "../../components/navigation/navbar-underline"

const meta: Meta<typeof NavbarUnderline> = {
  title: "Navigation/NavbarUnderline",
  component: NavbarUnderline,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const items = [
  { label: "Home", href: "#home", active: true },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#docs" },
  { label: "Blog", href: "#blog" },
]

export const Default: Story = {
  args: { items },
}

export const WithLogo: Story = {
  args: {
    items,
    logo: (
      <span className="flex items-center gap-2 text-base font-bold">
        <span className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
          V
        </span>
        VarSys
      </span>
    ),
    right: (
      <button
        type="button"
        className="relative inline-flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
      >
        <Bell className="size-4" />
      </button>
    ),
  },
}

export const NoActive: Story = {
  args: {
    items: items.map(({ label, href }) => ({ label, href })),
    logo: <span className="font-bold">Acme</span>,
  },
}