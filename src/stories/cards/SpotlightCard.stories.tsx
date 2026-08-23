import type { Meta, StoryObj } from "@storybook/react"
import { Bolt, ShieldCheck, Zap } from "lucide-react"
import { SpotlightCard } from "../../components/cards/spotlight-card"

const meta: Meta<typeof SpotlightCard> = {
  title: "Cards/SpotlightCard",
  component: SpotlightCard,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-64 items-center justify-center bg-background p-10">
      <SpotlightCard className="w-full max-w-sm p-6">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <Zap className="size-5 text-yellow-500" />
          Lighting fast
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Optimized for performance with a minimal bundle size. Build fast,
          responsive interfaces without compromise.
        </p>
      </SpotlightCard>
    </div>
  ),
}

export const Grid: Story = {
  render: () => (
    <div className="grid gap-4 p-10 sm:grid-cols-2 lg:grid-cols-3">
      <SpotlightCard className="p-6">
        <div className="flex items-center gap-2 font-semibold">
          <Bolt className="size-4 text-primary" />
          Realtime
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Live updates across every connected workspace.
        </p>
      </SpotlightCard>
      <SpotlightCard className="p-6">
        <div className="flex items-center gap-2 font-semibold">
          <ShieldCheck className="size-4 text-primary" />
          Secure
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Enterprise-grade encryption and access controls.
        </p>
      </SpotlightCard>
      <SpotlightCard className="p-6">
        <div className="flex items-center gap-2 font-semibold">
          <Zap className="size-4 text-primary" />
          Scalable
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Built to grow from prototype to production.
        </p>
      </SpotlightCard>
    </div>
  ),
}

export const CustomColor: Story = {
  render: () => (
    <div className="flex min-h-64 items-center justify-center bg-background p-10">
      <SpotlightCard
        spotlightColor="#ff006630"
        className="w-full max-w-sm p-6"
      >
        <div className="flex items-center gap-2 text-lg font-semibold">
          <Bolt className="size-5 text-yellow-500" />
          Neon spotlight
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Custom spotlight color via the spotlightColor prop.
        </p>
      </SpotlightCard>
    </div>
  ),
}