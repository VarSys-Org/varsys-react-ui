import type { Meta, StoryObj } from "@storybook/react"
import { Navbar } from "../../components/navigation/navbar"

const meta: Meta<typeof Navbar> = {
  title: "Navigation/Navbar",
  component: Navbar,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="min-h-56 bg-background p-10">
      <Navbar
        brand="Acme"
        links={[
          { label: "Home", href: "#", active: true },
          { label: "Features", href: "#" },
          { label: "Pricing", href: "#" },
          { label: "About", href: "#" },
        ]}
      />
    </div>
  ),
}

export const CustomActions: Story = {
  render: () => (
    <div className="min-h-56 bg-background p-10">
      <Navbar brand="VarSys" signInLabel="Log in" ctaLabel="Create account" />
    </div>
  ),
}