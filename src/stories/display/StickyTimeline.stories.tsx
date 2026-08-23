import type { Meta, StoryObj } from "@storybook/react"
import { StickyTimeline } from "../../components/display/sticky-timeline"

const meta: Meta<typeof StickyTimeline> = {
  title: "Display/StickyTimeline",
  component: StickyTimeline,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const data = [
  {
    title: "2024",
    content: (
      <div className="flex flex-col gap-4">
        <p className="text-muted-foreground">
          Built and launched the component library from scratch, laying the
          foundation for a cohesive design system.
        </p>
        <div className="grid grid-cols-2 gap-3">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="flex aspect-video items-center justify-center rounded-xl border border-border bg-muted text-muted-foreground"
            >
              Screenshot {item}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Early 2025",
    content: (
      <div className="flex flex-col gap-4">
        <p className="text-muted-foreground">
          Shipped dark mode, theming tokens, and the first batch of reusable
          dashboard components to all VarSys apps.
        </p>
      </div>
    ),
  },
  {
    title: "Changelog",
    content: (
      <ul className="flex flex-col gap-2">
        <li className="flex items-center gap-2 text-muted-foreground">
          <span className="text-primary">✓</span> Bento grid layouts
        </li>
        <li className="flex items-center gap-2 text-muted-foreground">
          <span className="text-primary">✓</span> Industrial chart components
        </li>
        <li className="flex items-center gap-2 text-muted-foreground">
          <span className="text-primary">✓</span> Theme-safe design tokens
        </li>
      </ul>
    ),
  },
]

export const Default: Story = {
  args: { data },
}

export const CustomHeading: Story = {
  args: {
    data,
    title: "Our journey",
    description:
      "A look back at how the team shipped features over the years.",
  },
}