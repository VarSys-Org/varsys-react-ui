import type { Meta, StoryObj } from "@storybook/react"
import { ParallaxGridScroll } from "../../components/effects/parallax-grid-scroll"

const meta: Meta<typeof ParallaxGridScroll> = {
  title: "Effects/ParallaxGridScroll",
  component: ParallaxGridScroll,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const items = [
  {
    title: "Real-time Analytics",
    description:
      "Track every metric as it happens. Live dashboards with sub-second latency keep your team ahead of the curve.",
    badge: "New",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Collaborative Workspace",
    description:
      "Bring your team together with shared boards, live cursors, and instant presence indicators.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Enterprise Security",
    description:
      "SOC 2 certified infrastructure with granular role-based access control and audit logs.",
    badge: "SOC 2",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Global Edge Network",
    description:
      "Deploy to 300+ edge locations and serve your users from wherever they are on the planet.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Seamless Integrations",
    description:
      "Connect the tools you already use. Native integrations with 100+ services out of the box.",
    badge: "100+",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Smart Automation",
    description:
      "Automate repetitive work with AI-powered workflows that learn from how your team operates.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Mobile-first Design",
    description:
      "Every surface is responsive by default. Crafted to feel native on any screen size.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Developer API",
    description:
      "A clean, typed API with webhooks and SDKs for every major language. Ship integrations in hours.",
    badge: "API",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Continuous Deployment",
    description:
      "Push to main and watch your changes roll out across the globe with zero downtime.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
  },
]

export const Default: Story = {
  render: () => (
    <div className="bg-background p-10">
      <ParallaxGridScroll items={items} />
    </div>
  ),
}

export const Reversed: Story = {
  render: () => (
    <div className="bg-background p-10">
      <ParallaxGridScroll items={items} reverse travel="70%" />
    </div>
  ),
}
