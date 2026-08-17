import type { Meta, StoryObj } from "@storybook/react"
import { BadgeCheck, Zap } from "lucide-react"
import { FeatureSplit } from "../../components/layout/feature-split"

const meta: Meta<typeof FeatureSplit> = {
  title: "Layout/FeatureSplit",
  component: FeatureSplit,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const IMAGE = "https://picsum.photos/seed/feature-split/1200/900"

export const Default: Story = {
  render: () => (
    <FeatureSplit
      eyebrow="New release"
      title="Ship faster with a component library built for the edge"
      description="Drop-in, theme-safe components that work with any stack. No lock-in, no configuration maze — just copy, paste, and ship."
      bullets={[
        "Accessible out of the box with full keyboard navigation",
        "Theme-safe tokens that follow light and dark mode",
        "Tree-shakeable and dependency-light by design",
      ]}
      image={IMAGE}
      imageAlt="Product screenshot"
      primaryAction={{ label: "Get started", href: "#" }}
      secondaryAction={{ label: "View docs", href: "#" }}
    />
  ),
}

export const Flipped: Story = {
  render: () => (
    <FeatureSplit
      flip
      eyebrow="Performance"
      title="Built to stay out of your way"
      description="Tiny runtime footprint, no surprising re-renders, and first-class support for the modern React renderer."
      image={IMAGE}
      imageAlt="Dashboard preview"
      primaryAction={{ label: "Learn more", href: "#" }}
    />
  ),
}

export const WithBadge: Story = {
  render: () => (
    <FeatureSplit
      eyebrow="Trusted by teams"
      title="Loved by engineers everywhere"
      description="Join thousands of teams that ship high-quality UI without the busywork."
      image={IMAGE}
      imageAlt="Team photo"
      badge={
        <div className="flex items-center gap-2 text-sm">
          <span className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Zap className="size-4" />
          </span>
          <span className="font-semibold text-foreground">99.9% uptime</span>
        </div>
      }
    />
  ),
}

export const WithCustomContent: Story = {
  render: () => (
    <FeatureSplit
      title="Content on the left, visuals on the right"
      description="Pass any React node as the image slot to embed charts, code blocks, or live previews."
      image={
        <div className="flex aspect-[4/3] w-full items-center justify-center bg-gradient-to-br from-primary/20 via-accent to-primary/20 text-muted-foreground">
          <BadgeCheck className="size-16" />
        </div>
      }
      contentClassName="max-w-xl"
    />
  ),
}