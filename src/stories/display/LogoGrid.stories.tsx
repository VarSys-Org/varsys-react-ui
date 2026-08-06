import type { Meta, StoryObj } from "@storybook/react"
import { LogoGrid } from "../../components/display/logo-grid"

const meta: Meta<typeof LogoGrid> = {
  title: "Display/LogoGrid",
  component: LogoGrid,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const textLogos = [
  "Acme",
  "Globex",
  "Initech",
  "Umbrella",
  "Wayne",
  "Stark",
  "Wonka",
  "Nimbus",
].map((name) => ({
  name,
  logo: (
    <span className="text-xl font-bold tracking-tight text-muted-foreground">
      {name}
    </span>
  ),
}))

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <LogoGrid
        title="Who's using it?"
        description="Trusted by fast-moving teams to build delightful interfaces."
        items={textLogos}
      />
    </div>
  ),
}

export const Divided: Story = {
  render: () => (
    <div className="p-8">
      <LogoGrid
        divided
        title="Trusted by industry leaders"
        description="Powering the products your customers love."
        items={textLogos}
      />
    </div>
  ),
}

export const ThreeColumns: Story = {
  render: () => (
    <div className="p-8">
      <LogoGrid
        columns={3}
        items={textLogos}
      />
    </div>
  ),
}
