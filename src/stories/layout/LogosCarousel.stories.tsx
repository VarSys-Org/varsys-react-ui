import type { Meta, StoryObj } from "@storybook/react"
import { LogosCarousel } from "../../components/layout/logos-carousel"

const meta: Meta<typeof LogosCarousel> = {
  title: "Layout/LogosCarousel",
  component: LogosCarousel,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const logos = [
  { name: "Acme", className: "font-bold tracking-tight text-lg" },
  { name: "Vertex", className: "font-semibold italic text-lg" },
  { name: "Nimbus", className: "font-mono text-lg" },
  { name: "Orbit", className: "font-extrabold uppercase text-lg" },
  { name: "Quanta", className: "font-light tracking-widest text-lg" },
  { name: "Pulse", className: "font-black text-lg" },
  { name: "Halo", className: "font-medium text-lg" },
  { name: "Drift", className: "font-bold text-lg" },
]

export const Default: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <LogosCarousel>
        {logos.map((logo) => (
          <span key={logo.name} className={`text-muted-foreground ${logo.className}`}>
            {logo.name}
          </span>
        ))}
      </LogosCarousel>
    </div>
  ),
}

export const TwoPerGroup: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <LogosCarousel count={2}>
        {logos.map((logo) => (
          <span key={logo.name} className={`text-muted-foreground ${logo.className}`}>
            {logo.name}
          </span>
        ))}
      </LogosCarousel>
    </div>
  ),
}

export const Fast: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <LogosCarousel interval={1200} initialDelay={200}>
        {logos.map((logo) => (
          <span key={logo.name} className={`text-muted-foreground ${logo.className}`}>
            {logo.name}
          </span>
        ))}
      </LogosCarousel>
    </div>
  ),
}