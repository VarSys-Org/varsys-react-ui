import type { Meta, StoryObj } from "@storybook/react"
import { FeatureSectionStickyScroll } from "../../components/layout/feature-section-sticky-scroll"
import type { FeatureSectionStickyScrollItem } from "../../components/layout/feature-section-sticky-scroll"
import { Sparkles, Zap, Globe, ShieldCheck } from "lucide-react"

const meta: Meta<typeof FeatureSectionStickyScroll> = {
  title: "Layout/FeatureSectionStickyScroll",
  component: FeatureSectionStickyScroll,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const features: FeatureSectionStickyScrollItem[] = [
  {
    title: "Real-time collaboration",
    description:
      "Connect your team instantly. AI-powered insights help you work smarter together and ship faster.",
    icon: <Zap className="size-5" />,
    content: (
      <div className="rounded-2xl border border-border bg-background p-8 shadow-sm">
        <p className="text-4xl font-bold text-foreground">98%</p>
        <p className="mt-2 text-sm text-muted-foreground">faster review cycles with live multiplayer edits.</p>
      </div>
    ),
  },
  {
    title: "Enterprise-grade security",
    description:
      "End-to-end encryption and SOC2 compliance ensure your data stays protected across all devices.",
    icon: <ShieldCheck className="size-5" />,
    content: (
      <div className="rounded-2xl border border-border bg-background p-8 shadow-sm">
        <p className="text-sm font-medium text-foreground">SOC2 & HIPAA</p>
        <p className="mt-2 text-sm text-muted-foreground">Compliant by default. Your data is safe with us, always.</p>
      </div>
    ),
  },
  {
    title: "Edge computing ready",
    description:
      "Deploy closer to your users with our global edge network for ultra-low latency responses.",
    icon: <Globe className="size-5" />,
    content: (
      <div className="rounded-2xl border border-border bg-background p-8 shadow-sm">
        <p className="text-sm font-medium text-foreground">35 regions</p>
        <p className="mt-2 text-sm text-muted-foreground">Sub-50ms latency for 90% of the globe.</p>
      </div>
    ),
  },
  {
    title: "AI-powered workflows",
    description:
      "Automate repetitive tasks and generate production-ready results with built-in AI assistance.",
    icon: <Sparkles className="size-5" />,
    content: (
      <div className="rounded-2xl border border-border bg-background p-8 shadow-sm">
        <p className="text-sm font-medium text-foreground">AI Copilot</p>
        <p className="mt-2 text-sm text-muted-foreground">Summarize, generate and refactor in one click.</p>
      </div>
    ),
  },
]

export const Default: Story = {
  render: () => (
    <div className="min-h-80 bg-background p-10">
      <FeatureSectionStickyScroll features={features} />
    </div>
  ),
}

export const Compact: Story = {
  render: () => (
    <div className="min-h-80 bg-background p-10">
      <FeatureSectionStickyScroll
        title="Why teams switch"
        description="A short scroll-driven story."
        features={features.slice(0, 3)}
      />
    </div>
  ),
}

export const CustomBackgrounds: Story = {
  render: () => (
    <div className="min-h-80 bg-background p-10">
      <FeatureSectionStickyScroll
        backgroundColors={[
          "hsl(var(--primary) / 0.08)",
          "hsl(var(--muted) / 0.5)",
          "hsl(var(--accent) / 0.18)",
        ]}
        features={features}
      />
    </div>
  ),
}