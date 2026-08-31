import type { Meta, StoryObj } from "@storybook/react"
import { Theme } from "../../components/layout/theme"

const meta: Meta<typeof Theme> = {
  title: "Layout/Theme",
  component: Theme,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  render: () => (
    <div className="min-h-56 bg-background p-10">
      <Theme appearance="light">
        <div className="rounded-xl border border-border bg-card p-6 text-card-foreground shadow-sm">
          <h3 className="text-lg font-semibold">Light theme subtree</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Everything inside this wrapper is forced to the light appearance.
          </p>
        </div>
      </Theme>
    </div>
  ),
}

export const Dark: Story = {
  render: () => (
    <div className="min-h-56 bg-background p-10">
      <Theme appearance="dark">
        <div className="rounded-xl border border-border bg-card p-6 text-card-foreground shadow-sm">
          <h3 className="text-lg font-semibold">Dark theme subtree</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Everything inside this wrapper is forced to the dark appearance.
          </p>
        </div>
      </Theme>
    </div>
  ),
}

export const WithAccentAndRadius: Story = {
  render: () => (
    <div className="min-h-56 bg-background p-10">
      <Theme appearance="dark" accentColor="blue" radius="large">
        <div className="rounded-xl border border-border bg-card p-6 text-card-foreground shadow-sm">
          <h3 className="text-lg font-semibold">Blue accent, large radius</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Custom accent color and radius apply to this subtree.
          </p>
        </div>
      </Theme>
    </div>
  ),
}